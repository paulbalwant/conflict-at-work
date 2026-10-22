/* Study site engine. Plain JavaScript, no build step.
   Routes: #/  #/s/<series>  #/s/<series>/<n>  #/s/<series>/final  #/progress */
(function () {
  'use strict';

  /* ---------------------------------------------------------- storage */
  var KEY = 'ob-conflict-site-v1';
  var state = { acts: {}, watched: {}, name: '' };
  try { var raw = localStorage.getItem(KEY); if (raw) state = Object.assign(state, JSON.parse(raw)); } catch (e) {}
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} }
  function rec(k) { return state.acts[k]; }
  function setRec(k, r) { state.acts[k] = Object.assign({}, state.acts[k] || {}, r); save(); }

  /* ---------------------------------------------------------- helpers */
  var $app = document.getElementById('app');
  function h(tag, attrs, kids) {
    var el = document.createElement(tag);
    if (attrs) for (var a in attrs) {
      var v = attrs[a];
      if (v == null || v === false) continue;
      if (a === 'class') el.className = v;
      else if (a === 'html') el.innerHTML = v;
      else if (a === 'text') el.textContent = v;
      else if (a.slice(0, 2) === 'on') el.addEventListener(a.slice(2), v);
      else el.setAttribute(a, v === true ? '' : v);
    }
    (kids || []).forEach(function (k) { if (k == null) return; el.appendChild(typeof k === 'string' ? document.createTextNode(k) : k); });
    return el;
  }
  function shuffle(a, seed) {
    a = a.slice(); var s = seed || 7;
    for (var i = a.length - 1; i > 0; i--) { s = (s * 9301 + 49297) % 233280; var j = Math.floor(s / 233280 * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function rshuffle(a) { return shuffle(a, Math.floor(Math.random() * 100000) + 1); }
  function letter(i) { return String.fromCharCode(65 + i); }
  function pct(s, m) { return m ? Math.round(100 * s / m) : 0; }
  var SERIES = window.SERIES;
  function series(id) { return SERIES.filter(function (s) { return s.id === id; })[0]; }
  function akey(sid, ep, i) { return sid + '-' + ep + '-' + i; }
  var UNSCORED = { dilemma: 1, selfcheck: 1, breathe: 1, reflect: 1 };
  function maxFor(act) {
    if (act.type === 'mcq') return act.qs.length;
    if (act.type === 'sort' || act.type === 'order') return act.items.length;
    if (act.type === 'tf') return act.cards.length;
    if (act.type === 'grid') return act.items.length;
    if (act.type === 'multi') return act.open ? 0 : 1;
    if (UNSCORED[act.type]) return 0;
    return 1;
  }
  function unitStats(sid, ep, acts) {
    var done = 0, score = 0, max = 0;
    acts.forEach(function (a, i) {
      var r = rec(akey(sid, ep, i));
      if (r && r.done) { done++; score += r.score || 0; max += maxFor(a); }
    });
    return { done: done, total: acts.length, score: score, max: max, complete: done === acts.length };
  }
  function seriesStats(s) {
    var units = s.episodes.map(function (e, i) { return unitStats(s.id, i + 1, e.acts); });
    var fin = unitStats(s.id, 'final', s.final.acts);
    var done = 0, total = 0;
    units.concat([fin]).forEach(function (u) { done += u.done; total += u.total; });
    var watched = s.episodes.filter(function (e, i) { return state.watched[s.id + '-' + (i + 1)]; }).length;
    return { units: units, fin: fin, done: done + watched, total: total + s.episodes.length, completeEps: units.filter(function (u) { return u.complete; }).length };
  }
  function confetti() {
    var cols = ['#E2664E', '#3E3F98', '#F0A030', '#6F9A6C', '#5A7394'];
    for (var i = 0; i < 70; i++) {
      var c = h('i', { class: 'confetti' });
      c.style.left = Math.random() * 100 + 'vw';
      c.style.background = cols[i % cols.length];
      c.style.animationDuration = (1.6 + Math.random() * 1.8) + 's';
      c.style.animationDelay = (Math.random() * .4) + 's';
      document.body.appendChild(c);
      setTimeout(function (el) { el.remove(); }, 4200, c);
    }
  }
  var OWL = '<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="34" r="26" fill="#8A5A38"/><path d="M10 18 L20 26 L14 30Z M54 18 L44 26 L50 30Z" fill="#5E3A22"/><ellipse cx="32" cy="44" rx="15" ry="14" fill="#EADCC6"/><circle cx="23" cy="30" r="9" fill="#FBF6EC"/><circle cx="41" cy="30" r="9" fill="#FBF6EC"/><circle cx="24" cy="31" r="4.2" fill="#3A2416"/><circle cx="40" cy="31" r="4.2" fill="#3A2416"/><circle cx="25.4" cy="29.6" r="1.4" fill="#fff"/><circle cx="41.4" cy="29.6" r="1.4" fill="#fff"/><path d="M29 37 L35 37 L32 42Z" fill="#F0A030"/></svg>';

  /* ---------------------------------------------------------- activities */
  // Each renderer gets (act, key, mount, onChange) and must call finish(score) when complete.
  function finisher(act, key, onChange) {
    return function (score, data) {
      var r = { done: true, score: score || 0 };
      if (data !== undefined) r.data = data;
      var prev = rec(key);
      // keep the best score if retried
      if (prev && prev.done && (prev.score || 0) > r.score) r.score = prev.score;
      setRec(key, r); onChange();
    };
  }
  function retryBtn(fn) { return h('button', { class: 'btn ghost sm', onclick: fn }, ['↻ Try again']); }
  function scoreLine(score, max, extra) {
    var msg = score === max ? 'Perfect.' : score >= max * 0.6 ? 'Nice work.' : 'Worth another look.';
    return h('div', { class: 'scoreline fade-in', 'aria-live': 'polite' }, [h('span', { class: 'pill ' + (score === max ? 'ok' : 'soft') }, [score + ' / ' + max]), h('b', null, [msg]), h('span', { class: 'spacer' }), extra]);
  }

  var R = {};

  R.mcq = function (act, key, mount, onChange) {
    var finish = finisher(act, key, onChange);
    var answered = 0, score = 0;
    act.qs.forEach(function (q, qi) {
      var opts = h('div', { class: 'opts' + (q.html ? ' cols' : '') });
      var fb = h('div', { 'aria-live': 'polite' });
      var btns = q.o.map(function (o, oi) {
        var b = h('button', { class: 'opt', type: 'button', onclick: function () {
          btns.forEach(function (x, xi) {
            x.disabled = true;
            if (xi === q.a) x.classList.add('right');
            else if (xi === oi) x.classList.add('wrong');
            else x.classList.add('dim');
          });
          var ok = oi === q.a; if (ok) score++; answered++;
          fb.appendChild(h('div', { class: 'feedback fade-in ' + (ok ? 'ok' : 'no') }, [h('b', null, [ok ? 'Correct.' : 'Not quite. The answer is ' + letter(q.a) + '.']), h('span', { html: q.why })]));
          if (answered === act.qs.length) {
            finish(score);
            mount.appendChild(scoreLine(score, act.qs.length, retryBtn(function () { mount.innerHTML = ''; R.mcq(act, key, mount, onChange); })));
          }
        } }, [h('span', { class: 'k' }, [letter(oi)]), h('span', { html: o })]);
        opts.appendChild(b); return b;
      });
      mount.appendChild(h('div', { class: 'q' }, [h('div', { class: 'qt' }, [h('span', { class: 'qn' }, [(qi + 1) + '.']), h('span', { html: q.q })]), opts, fb]));
    });
  };

  R.sort = function (act, key, mount, onChange) {
    var finish = finisher(act, key, onChange);
    var items = rshuffle(act.items.map(function (it, i) { return Object.assign({ id: i }, it); }));
    var place = {}; var selected = null; var checked = false;
    var pool = h('div', { class: 'pool' });
    var buckets = h('div', { class: 'buckets' });
    var chips = {};
    items.forEach(function (it) {
      var c = h('button', { class: 'chip', type: 'button', draggable: 'true', 'data-id': it.id, onclick: function (e) { e.stopPropagation(); if (checked) return; select(it.id); } }, [h('span', { html: it.t })]);
      c.addEventListener('dragstart', function (e) { if (checked) return e.preventDefault(); e.dataTransfer.setData('text/plain', it.id); select(it.id); });
      chips[it.id] = c; pool.appendChild(c);
    });
    var bEls = act.buckets.map(function (b, bi) {
      var count = h('span', { class: 'c' });
      var el = h('div', { class: 'bucket', role: 'button', tabindex: '0', 'aria-label': 'Place in ' + b, onclick: function () { drop(bi); }, onkeydown: function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); drop(bi); } } }, [h('div', { class: 'bh' }, [b, count])]);
      el.addEventListener('dragover', function (e) { if (!checked) { e.preventDefault(); el.classList.add('over'); } });
      el.addEventListener('dragleave', function () { el.classList.remove('over'); });
      el.addEventListener('drop', function (e) { e.preventDefault(); el.classList.remove('over'); drop(bi); });
      el._count = count; buckets.appendChild(el); return el;
    });
    pool.addEventListener('click', function () { if (selected != null && place[selected] != null) { delete place[selected]; pool.appendChild(chips[selected]); select(null); upd(); } });
    function select(id) {
      selected = (selected === id) ? null : id;
      Object.keys(chips).forEach(function (k) { chips[k].classList.toggle('sel', +k === selected); });
      bEls.forEach(function (b) { b.classList.toggle('target', selected != null); });
    }
    function drop(bi) {
      if (checked || selected == null) return;
      place[selected] = bi; bEls[bi].appendChild(chips[selected]); select(null); upd();
    }
    var checkBtn = h('button', { class: 'btn acc', disabled: true, onclick: check }, ['Check']);
    var hint = h('span', { class: 'muted small' }, ['Tip: tap a placed card and then tap the grey area to send it back.']);
    function upd() {
      bEls.forEach(function (b, bi) { var n = 0; for (var k in place) if (place[k] === bi) n++; b._count.textContent = n ? n : ''; });
      checkBtn.disabled = Object.keys(place).length !== items.length;
    }
    function check() {
      checked = true; var score = 0;
      bEls.forEach(function (b) { b.classList.remove('target'); });
      items.forEach(function (it) {
        var c = chips[it.id]; c.draggable = false;
        if (place[it.id] === it.b) { score++; c.classList.add('right'); if (it.why) c.appendChild(h('span', { class: 'why' }, [it.why])); }
        else { c.classList.add('wrong'); c.appendChild(h('span', { class: 'fix' }, ['→ ' + act.buckets[it.b]])); if (it.why) c.appendChild(h('span', { class: 'why' }, [it.why])); }
      });
      ctrl.remove();
      finish(score);
      mount.appendChild(scoreLine(score, items.length, retryBtn(function () { mount.innerHTML = ''; R.sort(act, key, mount, onChange); })));
    }
    var ctrl = h('div', { class: 'row', style: 'margin-top:14px' }, [checkBtn, hint]);
    mount.appendChild(pool); mount.appendChild(buckets); mount.appendChild(ctrl);
  };

  R.order = function (act, key, mount, onChange) {
    var finish = finisher(act, key, onChange);
    var cur = rshuffle(act.items.map(function (t, i) { return i; }));
    var safety = 0; while (cur.every(function (v, i) { return v === i; }) && safety++ < 10) cur = rshuffle(cur);
    var list = h('ol', { class: 'olist' });
    var checked = false, dragFrom = null;
    function render() {
      list.innerHTML = '';
      cur.forEach(function (idx, pos) {
        var li = h('li', { draggable: checked ? null : 'true' }, [
          h('span', { class: 'tx', html: act.items[idx] }),
          checked ? null : h('span', { class: 'mv' }, [
            h('button', { type: 'button', 'aria-label': 'Move up', disabled: pos === 0, onclick: function () { mv(pos, pos - 1); } }, ['▲']),
            h('button', { type: 'button', 'aria-label': 'Move down', disabled: pos === cur.length - 1, onclick: function () { mv(pos, pos + 1); } }, ['▼'])
          ])
        ]);
        if (checked) li.classList.add(idx === pos ? 'right' : 'wrong');
        li.addEventListener('dragstart', function () { dragFrom = pos; li.classList.add('dragging'); });
        li.addEventListener('dragend', function () { li.classList.remove('dragging'); });
        li.addEventListener('dragover', function (e) { e.preventDefault(); });
        li.addEventListener('drop', function (e) { e.preventDefault(); if (dragFrom != null) mv(dragFrom, pos); dragFrom = null; });
        list.appendChild(li);
      });
    }
    function mv(a, b) { var x = cur.splice(a, 1)[0]; cur.splice(b, 0, x); render(); }
    render();
    var btn = h('button', { class: 'btn acc', onclick: function () {
      checked = true; render(); btn.remove();
      var score = cur.filter(function (v, i) { return v === i; }).length;
      var fb = h('div', { class: 'feedback fade-in ' + (score === cur.length ? 'ok' : 'no') }, [
        h('b', null, [score === cur.length ? 'Right order.' : 'Not quite. The correct order is:']),
        score === cur.length ? null : h('ol', { style: 'margin:.3em 0 .6em;padding-left:1.3em' }, act.items.map(function (t) { return h('li', { html: t }); })),
        act.why ? h('span', { html: act.why }) : null
      ]);
      mount.appendChild(fb);
      finish(score);
      mount.appendChild(scoreLine(score, cur.length, retryBtn(function () { mount.innerHTML = ''; R.order(act, key, mount, onChange); })));
    } }, ['Check order']);
    mount.appendChild(list);
    mount.appendChild(h('div', { class: 'row', style: 'margin-top:14px' }, [btn, h('span', { class: 'muted small' }, ['Use the arrows, or drag the rows.'])]));
  };

  R.spot = function (act, key, mount, onChange) {
    var finish = finisher(act, key, onChange);
    var chat = h('div', { class: 'chat' });
    var btns = act.lines.map(function (ln, i) {
      var b = h('button', { type: 'button', class: 'bub ' + ln.side + (ln.think ? ' think' : ''), onclick: function () {
        btns.forEach(function (x) { x.disabled = true; });
        btns[act.a].classList.add('right');
        var ok = i === act.a; if (!ok) b.classList.add('wrong');
        mount.appendChild(h('div', { class: 'feedback fade-in ' + (ok ? 'ok' : 'no') }, [h('b', null, [ok ? 'Spot on.' : 'Not that one. Look at the highlighted line.']), h('span', { html: act.why })]));
        finish(ok ? 1 : 0);
        mount.appendChild(scoreLine(ok ? 1 : 0, 1, retryBtn(function () { mount.innerHTML = ''; R.spot(act, key, mount, onChange); })));
      } }, [h('span', { class: 'w' }, [ln.who]), h('span', { html: ln.think ? '💭 ' + ln.t : ln.t })]);
      chat.appendChild(b); return b;
    });
    mount.appendChild(chat);
  };

  R.tf = function (act, key, mount, onChange) {
    var finish = finisher(act, key, onChange);
    var i = 0, score = 0, results = [];
    var wrap = h('div', { class: 'tf-wrap' });
    mount.appendChild(wrap);
    function show() {
      wrap.innerHTML = '';
      if (i >= act.cards.length) {
        finish(score);
        wrap.appendChild(h('div', { class: 'tf-dots' }, results.map(function (r) { return h('i', { class: r ? 'ok' : 'no' }); })));
        mount.appendChild(scoreLine(score, act.cards.length, retryBtn(function () { mount.innerHTML = ''; R.tf(act, key, mount, onChange); })));
        return;
      }
      var c = act.cards[i];
      var back = h('div', { class: 'tf-face tf-back' });
      var card = h('div', { class: 'tf-card' }, [h('div', { class: 'tf-inner' }, [h('div', { class: 'tf-face' }, [h('span', { html: c.t })]), back])]);
      var dots = h('div', { class: 'tf-dots' }, act.cards.map(function (x, j) { return h('i', { class: j < results.length ? (results[j] ? 'ok' : 'no') : '' }); }));
      var btns = h('div', { class: 'tf-btns' });
      function answer(v) {
        var ok = v === c.a; if (ok) score++; results.push(ok);
        back.className = 'tf-face tf-back ' + (ok ? 'ok' : 'no');
        back.innerHTML = '';
        back.appendChild(h('b', null, [(ok ? '✓ Correct: ' : '✗ Actually, ') + (c.a ? 'true' : 'false') + '.']));
        back.appendChild(h('span', { html: c.why }));
        card.classList.add('flip');
        btns.innerHTML = '';
        var nx = h('button', { class: 'btn', onclick: function () { i++; show(); } }, [i === act.cards.length - 1 ? 'See score' : 'Next card →']);
        btns.appendChild(nx); setTimeout(function () { nx.focus(); }, 50);
      }
      btns.appendChild(h('button', { class: 'btn t', onclick: function () { answer(true); } }, ['True']));
      btns.appendChild(h('button', { class: 'btn f', onclick: function () { answer(false); } }, ['False']));
      wrap.appendChild(h('div', { class: 'tf-count' }, ['Card ' + (i + 1) + ' of ' + act.cards.length]));
      wrap.appendChild(card); wrap.appendChild(btns); wrap.appendChild(dots);
    }
    show();
  };

  R.grid = function (act, key, mount, onChange) {
    var finish = finisher(act, key, onChange);
    var Z = [
      { id: 'forcing', name: 'Forcing', cls: 'tl' }, { id: 'problem', name: 'Problem solving', cls: 'tr' },
      { id: 'avoiding', name: 'Avoiding', cls: 'bl' }, { id: 'yielding', name: 'Yielding', cls: 'br' },
      { id: 'compromising', name: 'Compromising', cls: 'mid' }
    ];
    var i = 0, score = 0, locked = false;
    var scen = h('div', { class: 'scenario', 'aria-live': 'polite' });
    var fb = h('div');
    var nextBtn = h('button', { class: 'btn', style: 'margin-top:12px;display:none', onclick: function () { i++; show(); } }, ['Next →']);
    var field = h('div', { class: 'field' });
    var zb = {};
    Z.forEach(function (z) {
      var tok = h('span', { class: 'tok' });
      var b = h('button', { type: 'button', class: 'zonebtn ' + z.cls, onclick: function () { pick(z.id); } }, [h('span', null, [z.name]), tok]);
      b._tok = tok; zb[z.id] = b; field.appendChild(b);
    });
    var dual = h('div', { class: 'dual' }, [h('span', { class: 'ax-y' }, ['Assertiveness →']), field, h('span', { class: 'ax-x' }, ['Cooperativeness →'])]);
    function clear() { Z.forEach(function (z) { zb[z.id].classList.remove('right', 'wrong'); zb[z.id].disabled = false; }); }
    function show() {
      clear(); fb.innerHTML = ''; locked = false; nextBtn.style.display = 'none';
      if (i >= act.items.length) {
        scen.innerHTML = '';
        scen.appendChild(h('span', { class: 'sn' }, ['All placed']));
        scen.appendChild(document.createTextNode('Each number on the grid is one of the situations you placed.'));
        Z.forEach(function (z) { zb[z.id].disabled = true; });
        finish(score);
        mount.appendChild(scoreLine(score, act.items.length, retryBtn(function () { mount.innerHTML = ''; R.grid(act, key, mount, onChange); })));
        return;
      }
      scen.innerHTML = '';
      scen.appendChild(h('span', { class: 'sn' }, ['Situation ' + (i + 1) + ' of ' + act.items.length]));
      scen.appendChild(h('span', { html: act.items[i].t }));
    }
    function pick(id) {
      if (locked || i >= act.items.length) return; locked = true;
      var it = act.items[i], ok = id === it.a; if (ok) score++;
      zb[it.a].classList.add('right'); if (!ok) zb[id].classList.add('wrong');
      zb[it.a]._tok.appendChild(h('i', null, [String(i + 1)]));
      var name = Z.filter(function (z) { return z.id === it.a; })[0].name;
      fb.appendChild(h('div', { class: 'feedback fade-in ' + (ok ? 'ok' : 'no') }, [h('b', null, [ok ? 'Yes: ' + name + '.' : 'This one is ' + name + '.']), it.why ? h('span', { html: it.why }) : null]));
      nextBtn.style.display = ''; nextBtn.textContent = i === act.items.length - 1 ? 'Finish' : 'Next →';
      setTimeout(function () { nextBtn.focus(); }, 50);
    }
    mount.appendChild(h('div', { class: 'grid-act' }, [h('div', null, [scen, fb, nextBtn]), dual]));
    show();
  };

  R.multi = function (act, key, mount, onChange) {
    var finish = finisher(act, key, onChange);
    var sel = {}; var done = false;
    var opts = h('div', { class: 'opts' });
    var btns = act.o.map(function (o, oi) {
      var b = h('button', { class: 'opt', type: 'button', 'aria-pressed': 'false', onclick: function () {
        if (done) return;
        if (!sel[oi] && act.max && Object.keys(sel).length >= act.max) return;
        if (sel[oi]) delete sel[oi]; else sel[oi] = 1;
        b.classList.toggle('sel', !!sel[oi]); b.setAttribute('aria-pressed', sel[oi] ? 'true' : 'false');
        btn.disabled = Object.keys(sel).length === 0;
      } }, [h('span', { class: 'k' }, ['✓']), h('span', { html: o })]);
      opts.appendChild(b); return b;
    });
    var btn = h('button', { class: 'btn acc', disabled: true, style: 'margin-top:14px', onclick: function () {
      done = true; btn.remove();
      var chosen = Object.keys(sel).map(Number);
      if (act.open) {
        btns.forEach(function (b, bi) { b.disabled = true; if (!sel[bi]) b.classList.add('dim'); });
        mount.appendChild(h('div', { class: 'feedback fade-in' }, [h('b', null, ['You chose: ' + chosen.map(function (c) { return act.o[c]; }).join(', ')]), h('span', { html: act.why })]));
        finish(0, chosen); return;
      }
      var exact = chosen.length === act.a.length && act.a.every(function (x) { return sel[x]; });
      btns.forEach(function (b, bi) {
        b.disabled = true; b.classList.remove('sel');
        var should = act.a.indexOf(bi) >= 0;
        if (should) b.classList.add('right'); else if (sel[bi]) b.classList.add('wrong'); else b.classList.add('dim');
      });
      mount.appendChild(h('div', { class: 'feedback fade-in ' + (exact ? 'ok' : 'no') }, [h('b', null, [exact ? 'Exactly right.' : 'Close. The green ones are the full set.']), h('span', { html: act.why })]));
      finish(exact ? 1 : 0, chosen);
      mount.appendChild(scoreLine(exact ? 1 : 0, 1, retryBtn(function () { mount.innerHTML = ''; R.multi(act, key, mount, onChange); })));
    } }, [act.open ? 'Done' : 'Check']);
    mount.appendChild(opts); mount.appendChild(btn);
  };

  R.zone = function (act, key, mount, onChange) {
    var finish = finisher(act, key, onChange);
    var span = act.max - act.min;
    function x(v) { return ((v - act.min) / span * 100) + '%'; }
    var viz = h('div', { class: 'zone-viz' });
    act.parties.forEach(function (p) {
      var col = 'var(--' + p.color + 'D)';
      var row = h('div', { class: 'zrow', style: 'color:' + col }, [h('span', { class: 'lab2' }, [p.who]), h('div', { class: 'zline' })]);
      [['initial', 'Opens'], ['target', 'Target'], ['resist', 'Walks away']].forEach(function (m) {
        row.appendChild(h('div', { class: 'zmark' + (m[0] === 'resist' ? ' res' : ''), style: 'left:' + x(p[m[0]]) }, [h('i'), h('span', null, [m[1] + ' ' + act.unit + p[m[0]]])]));
      });
      viz.appendChild(row);
    });
    var axis = h('div', { class: 'zaxis' });
    for (var v = act.min; v <= act.max; v += 5) axis.appendChild(h('span', { style: 'left:' + x(v) }, [act.unit + v]));
    var band = h('div', { class: 'zband' });
    var sel = h('div', { class: 'zsel' }, [band]);
    var lo = h('input', { type: 'range', min: act.min, max: act.max, step: 1, value: act.min + 8 });
    var hi = h('input', { type: 'range', min: act.min, max: act.max, step: 1, value: act.max - 8 });
    var loL = h('b'), hiL = h('b');
    function upd() {
      var a = +lo.value, b = +hi.value; if (a > b) { var t = a; a = b; b = t; }
      band.style.left = x(a); band.style.width = ((b - a) / span * 100) + '%';
      loL.textContent = act.unit + a; hiL.textContent = act.unit + b; return [a, b];
    }
    lo.addEventListener('input', upd); hi.addEventListener('input', upd); upd();
    viz.appendChild(axis); viz.appendChild(h('div', { class: 'small muted', style: 'margin:0 14px' }, ['Your bargaining zone:'])); viz.appendChild(sel);
    var sliders = h('div', { class: 'zsliders' }, [h('label', null, [h('span', null, ['Low end: ', loL]), lo]), h('label', null, [h('span', null, ['High end: ', hiL]), hi])]);
    var fb = h('div', { 'aria-live': 'polite' });
    var tries = 0;
    var btn = h('button', { class: 'btn acc', style: 'margin-top:14px', onclick: function () {
      var r = upd(); tries++; fb.innerHTML = '';
      var ok = Math.abs(r[0] - act.a[0]) <= 1 && Math.abs(r[1] - act.a[1]) <= 1;
      if (ok) {
        band.classList.add('ok'); lo.disabled = hi.disabled = true; btn.remove();
        fb.appendChild(h('div', { class: 'feedback fade-in ok' }, [h('b', null, ['That\'s the zone: ' + act.unit + act.a[0] + ' to ' + act.unit + act.a[1] + '.']), h('span', { html: act.why })]));
        var sc = tries === 1 ? 1 : 0; finish(sc);
        mount.appendChild(scoreLine(sc, 1, retryBtn(function () { mount.innerHTML = ''; R.zone(act, key, mount, onChange); })));
      } else {
        var hint = tries >= 2 ? 'Hint: look only at the filled dots ("walks away"). The deal must be acceptable to both.' : 'Not yet. Which prices would both sides accept rather than walk away?';
        fb.appendChild(h('div', { class: 'feedback fade-in no' }, [h('b', null, [hint])]));
      }
    } }, ['Check my zone']);
    mount.appendChild(viz);
    mount.appendChild(h('div', { class: 'key' }, [h('span', null, [h('i'), 'Opening offer / target']), h('span', null, [h('i', { class: 'f' }), 'Resistance point (walks away)'])]));
    mount.appendChild(sliders); mount.appendChild(btn); mount.appendChild(fb);
  };

  R.average = function (act, key, mount, onChange) {
    var finish = finisher(act, key, onChange);
    var vals = [0.1, 0.05];
    var viz = h('div', { class: 'avg-viz' });
    function col(label) { var b = h('div', { class: 'b' }), v = h('div', { class: 'v' }); var c = h('div', { class: 'avg-col' }, [b, v, h('div', { class: 't' }, [label])]); c._b = b; c._v = v; viz.appendChild(c); return c; }
    var cA = col(act.labels[0]), cB = col(act.labels[1]), cM = col('Average');
    function draw(c, val, avg) {
      var hgt = Math.abs(val) * 50;
      c._b.style.height = hgt + '%';
      c._b.style.top = val >= 0 ? (50 - hgt) + '%' : '50%';
      c._b.style.background = avg ? 'var(--ink)' : (val >= 0 ? 'var(--sage)' : 'var(--coral)');
      c._v.textContent = (val > 0 ? '+' : '') + val.toFixed(2);
      c._v.style.top = val >= 0 ? 'calc(' + (50 - hgt) + '% - 20px)' : 'calc(' + (50 + hgt) + '% + 2px)';
    }
    var sA = h('input', { type: 'range', min: -1, max: 1, step: 0.05, value: vals[0] });
    var sB = h('input', { type: 'range', min: -1, max: 1, step: 0.05, value: vals[1] });
    var fb = h('div', { 'aria-live': 'polite' });
    var solved = false;
    function upd() {
      vals = [+sA.value, +sB.value]; var avg = (vals[0] + vals[1]) / 2;
      draw(cA, vals[0]); draw(cB, vals[1]); draw(cM, avg, true);
      if (!solved && Math.abs(avg) <= 0.05 && Math.abs(vals[0]) >= 0.4 && Math.abs(vals[1]) >= 0.4) {
        solved = true; fb.innerHTML = '';
        fb.appendChild(h('div', { class: 'feedback fade-in ok' }, [h('b', null, ['There it is: two strong effects, an average of about zero.']), h('span', { html: act.why })]));
        finish(1);
      }
    }
    sA.addEventListener('input', upd); sB.addEventListener('input', upd); upd();
    mount.appendChild(viz);
    mount.appendChild(h('div', { class: 'small muted', style: 'margin-top:30px' }, ['Effect of diversity on performance (−1 strongly negative, +1 strongly positive)']));
    mount.appendChild(h('div', { class: 'zsliders' }, [h('label', null, [act.labels[0], sA]), h('label', null, [act.labels[1], sB])]));
    mount.appendChild(fb);
    if (rec(key) && rec(key).done && !solved) fb.appendChild(h('div', { class: 'feedback' }, [h('b', null, ['Already solved. Feel free to play.'])]));
  };

  R.dilemma = function (act, key, mount, onChange) {
    var finish = finisher(act, key, onChange);
    var total = 0, r = 0, path = [];
    var val = h('span', { class: 'val' }, ['0']);
    var fill = h('i', { style: 'width:0%' });
    var meter = h('div', { class: 'meter' }, [h('span', { class: 'lbl' }, [act.meter]), h('div', { class: 'bar' }, [fill]), val]);
    var stage = h('div');
    mount.appendChild(h('p', { class: 'prompt', html: act.intro }));
    mount.appendChild(meter); mount.appendChild(stage);
    function setMeter() { var v = Math.max(0, Math.min(100, total + 20)); fill.style.width = v + '%'; val.textContent = String(total); }
    setMeter();
    function round() {
      stage.innerHTML = '';
      if (r >= act.rounds.length) {
        var end = act.end.filter(function (e) { return total <= e.max; })[0];
        stage.appendChild(h('div', { class: 'feedback fade-in ' + (end === act.end[0] ? 'ok' : '') }, [h('b', null, ['Final ' + act.meter.toLowerCase() + ': ' + total]), h('span', null, [end.t])]));
        stage.appendChild(h('div', { class: 'row', style: 'margin-top:12px' }, [h('button', { class: 'btn ghost sm', onclick: function () { mount.innerHTML = ''; R.dilemma(act, key, mount, onChange); } }, ['↻ Play again, choosing differently'])]));
        finish(0, path); return;
      }
      var R0 = act.rounds[r];
      stage.appendChild(h('div', { class: 'dl-round' }, ['Round ' + (r + 1) + ' of ' + act.rounds.length]));
      stage.appendChild(h('div', { class: 'dl-scene', html: R0.s }));
      var opts = h('div', { class: 'opts' });
      var bs = R0.c.map(function (c, ci) {
        var b = h('button', { class: 'opt', type: 'button', onclick: function () {
          bs.forEach(function (x, xi) { x.disabled = true; if (xi !== ci) x.classList.add('dim'); else x.classList.add('sel'); });
          total += c.d; path.push(ci); setMeter();
          var cls = c.d > 0 ? 'up' : c.d < 0 ? 'down' : '';
          stage.appendChild(h('div', { class: 'feedback fade-in' }, [h('b', null, [h('span', { class: 'delta ' + cls }, [(c.d > 0 ? '+' : '') + c.d + ' ']), act.meter.toLowerCase()]), h('span', { html: c.f })]));
          var nx = h('button', { class: 'btn', style: 'margin-top:12px', onclick: function () { r++; round(); } }, [r === act.rounds.length - 1 ? 'See the result' : 'Next round →']);
          stage.appendChild(nx); setTimeout(function () { nx.focus(); }, 50);
        } }, [h('span', { class: 'k' }, [letter(ci)]), h('span', { html: c.t })]);
        opts.appendChild(b); return b;
      });
      stage.appendChild(opts);
    }
    round();
  };

  R.selfcheck = function (act, key, mount, onChange) {
    var finish = finisher(act, key, onChange);
    var prev = rec(key), ans = (prev && prev.data && prev.data.slice) ? prev.data.slice() : [];
    var labels = ['Not like me', '', 'Somewhat', '', 'Very like me'];
    var list = h('div', { class: 'lik' });
    mount.appendChild(h('div', { class: 'lik-scale' }, ['1 = not like me', '·', '5 = very like me']));
    act.items.forEach(function (it, i) {
      var sc = h('div', { class: 'sc', role: 'radiogroup', 'aria-label': it.t });
      var bs = [1, 2, 3, 4, 5].map(function (n) {
        var b = h('button', { type: 'button', role: 'radio', 'aria-checked': ans[i] === n ? 'true' : 'false', class: ans[i] === n ? 'on' : '', title: labels[n - 1], onclick: function () {
          ans[i] = n; bs.forEach(function (x, xi) { x.classList.toggle('on', xi === n - 1); x.setAttribute('aria-checked', xi === n - 1 ? 'true' : 'false'); }); upd();
        } }, [String(n)]);
        sc.appendChild(b); return b;
      });
      list.appendChild(h('div', { class: 'it' }, [h('span', null, [it.t]), sc]));
    });
    var out = h('div');
    var btn = h('button', { class: 'btn acc', style: 'margin-top:14px', disabled: true, onclick: result }, ['Show my profile']);
    function upd() { var n = 0; for (var i = 0; i < act.items.length; i++) if (ans[i]) n++; btn.disabled = n !== act.items.length; }
    function result() {
      var sums = act.styles.map(function () { return 0; }), cnt = act.styles.map(function () { return 0; });
      act.items.forEach(function (it, i) { sums[it.s] += ans[i]; cnt[it.s] += 5; });
      var best = Math.max.apply(null, sums);
      out.innerHTML = '';
      out.appendChild(h('h3', { style: 'margin-top:20px' }, ['Your profile']));
      out.appendChild(h('div', { class: 'profile' }, act.styles.map(function (s, si) {
        return h('div', { class: 'pr' + (sums[si] === best ? ' top' : '') }, [h('span', null, [s]), h('div', { class: 'bar' }, [h('i', { style: 'width:' + pct(sums[si], cnt[si]) + '%' })]), h('span', null, [sums[si] + '/' + cnt[si]])]);
      })));
      var tops = act.styles.filter(function (s, si) { return sums[si] === best; });
      out.appendChild(h('div', { class: 'feedback fade-in' }, [h('b', null, ['Your strongest tendency: ' + tops.join(' and ') + '.']), h('span', null, [act.after])]));
      finish(0, ans.slice());
    }
    mount.appendChild(list); mount.appendChild(btn); mount.appendChild(out); upd();
    if (prev && prev.done) result();
  };

  R.breathe = function (act, key, mount, onChange) {
    var finish = finisher(act, key, onChange);
    var orb = h('div', { class: 'orb' }, [h('span', null, [String(act.seconds), h('small', null, ['seconds'])])]);
    var cue = h('div', { class: 'muted', 'aria-live': 'polite' }, ['Press start when you\'re ready.']);
    var timer = null;
    var btn = h('button', { class: 'btn acc', onclick: function () {
      if (timer) return; btn.disabled = true;
      var left = act.seconds, phase = 0;
      orb.classList.add('in'); cue.textContent = 'Breathe in…';
      timer = setInterval(function () {
        left--; phase++;
        orb.firstChild.firstChild.textContent = String(Math.max(left, 0));
        if (phase % 4 === 0) { var inh = orb.classList.toggle('in'); cue.textContent = inh ? 'Breathe in…' : 'Breathe out…'; }
        if (left <= 0) {
          clearInterval(timer); timer = null; orb.classList.remove('in');
          orb.firstChild.firstChild.textContent = '✓'; cue.textContent = act.after;
          btn.disabled = false; btn.textContent = 'Again';
          finish(0);
        }
      }, 1000);
    } }, ['Start the pause']);
    mount.appendChild(h('div', { class: 'breathe' }, [orb, cue, btn]));
  };

  R.reflect = function (act, key, mount, onChange) {
    var finish = finisher(act, key, onChange);
    var prev = rec(key);
    var ta = h('textarea', { placeholder: 'Write your answer here. It stays on this device and appears on your progress page.', 'aria-label': 'Your answer' });
    ta.value = (prev && prev.text) || '';
    var wc = h('span', { class: 'muted small' });
    var model = h('div');
    var btn = h('button', { class: 'btn acc', onclick: reveal }, ['Compare with a model answer']);
    function words() { return (ta.value.trim().match(/\S+/g) || []).length; }
    function upd() { var w = words(); wc.textContent = w + ' word' + (w === 1 ? '' : 's') + (w < 15 ? ' · write at least 15 to compare' : ''); btn.disabled = w < 15; }
    var t; ta.addEventListener('input', function () { upd(); clearTimeout(t); t = setTimeout(function () { setRec(key, { text: ta.value }); }, 300); });
    function reveal() {
      setRec(key, { text: ta.value });
      model.innerHTML = '';
      model.appendChild(h('div', { class: 'model fade-in' }, [h('b', null, ['What a strong answer might include']), h('span', { html: act.model })]));
      btn.textContent = 'Update saved answer';
      finish(0);
    }
    mount.appendChild(ta);
    mount.appendChild(h('div', { class: 'row', style: 'margin-top:10px' }, [btn, wc]));
    mount.appendChild(model); upd();
    if (prev && prev.done) { model.appendChild(h('div', { class: 'model' }, [h('b', null, ['What a strong answer might include']), h('span', { html: act.model })])); btn.textContent = 'Update saved answer'; }
  };

  /* ---------------------------------------------------------- stepper */
  var TYPE_ICON = { mcq: '❓', sort: '🗂️', order: '↕️', spot: '🔍', tf: '🃏', grid: '🎯', multi: '☑️', zone: '📏', average: '⚖️', dilemma: '🎲', selfcheck: '🧭', breathe: '🌬️', reflect: '✍️' };
  function lab(s, epKey, acts, onAllDone) {
    var wrap = h('section', { class: 'lab', id: 'activities' });
    var steps = h('div', { class: 'steps', role: 'tablist' });
    var body = h('div', { class: 'lab-body' });
    var foot = h('div', { class: 'lab-foot' });
    var cur = 0;
    // start at first unfinished activity
    for (var i = 0; i < acts.length; i++) { var r0 = rec(akey(s.id, epKey, i)); if (!r0 || !r0.done) { cur = i; break; } if (i === acts.length - 1) cur = 0; }
    var wasComplete = unitStats(s.id, epKey, acts).complete;
    function drawSteps() {
      steps.innerHTML = '';
      acts.forEach(function (a, i) {
        var r = rec(akey(s.id, epKey, i));
        steps.appendChild(h('button', { type: 'button', role: 'tab', 'aria-selected': i === cur ? 'true' : 'false', class: 'step' + (i === cur ? ' on' : '') + (r && r.done ? ' done' : ''), onclick: function () { go(i); } }, [h('span', { class: 'd' }, [r && r.done ? '✓' : String(i + 1)]), a.title]));
      });
      var onEl = steps.querySelector('.on'); if (onEl && onEl.scrollIntoView) { var sl = onEl.offsetLeft - steps.clientWidth / 2 + onEl.clientWidth / 2; steps.scrollLeft = sl; }
    }
    function changed() {
      drawSteps(); drawFoot();
      var st = unitStats(s.id, epKey, acts);
      if (st.complete && !wasComplete) { wasComplete = true; confetti(); if (onAllDone) onAllDone(st); }
    }
    function drawFoot() {
      foot.innerHTML = '';
      foot.appendChild(h('button', { class: 'btn ghost sm', disabled: cur === 0, onclick: function () { go(cur - 1); } }, ['← Back']));
      var st = unitStats(s.id, epKey, acts);
      foot.appendChild(h('span', { class: 'muted small' }, [st.done + ' of ' + st.total + ' done']));
      foot.appendChild(h('span', { class: 'spacer' }));
      if (cur < acts.length - 1) foot.appendChild(h('button', { class: 'btn sm', onclick: function () { go(cur + 1); } }, ['Next activity →']));
      else foot.appendChild(h('button', { class: 'btn sm acc', onclick: function () { go(acts.length); } }, ['Finish']));
    }
    function go(i) {
      cur = i; body.innerHTML = '';
      if (i >= acts.length) { drawSummary(); drawSteps(); foot.innerHTML = ''; foot.appendChild(h('button', { class: 'btn ghost sm', onclick: function () { go(acts.length - 1); } }, ['← Back'])); return; }
      var a = acts[i];
      body.appendChild(h('div', { class: 'act-title' }, [h('span', { 'aria-hidden': 'true' }, [TYPE_ICON[a.type] || '•']), h('h3', null, [a.title])]));
      if (a.prompt && a.type !== 'reflect' && a.type !== 'breathe') body.appendChild(h('p', { class: 'prompt', html: a.prompt }));
      if (a.type === 'reflect' || a.type === 'breathe') body.appendChild(h('p', { class: 'prompt', style: 'color:var(--ink);font-size:1.05rem', html: a.prompt }));
      var mount = h('div', { class: 'fade-in' });
      body.appendChild(mount);
      R[a.type](a, akey(s.id, epKey, i), mount, changed);
      drawSteps(); drawFoot();
    }
    function drawSummary() {
      var st = unitStats(s.id, epKey, acts);
      var left = acts.length - st.done;
      body.appendChild(h('div', { class: 'done-card fade-in' }, [
        h('div', { class: 'big' }, [st.complete ? '🦉' : '📝']),
        h('h3', null, [st.complete ? 'All done here.' : left + ' activit' + (left === 1 ? 'y' : 'ies') + ' still to do']),
        st.max ? h('p', null, ['Score on checked activities: ', h('b', null, [st.score + ' / ' + st.max + ' (' + pct(st.score, st.max) + '%)'])]) : null,
        h('p', { class: 'muted' }, [st.complete ? 'Your reflections and scores are saved on your progress page.' : 'Use the numbered steps above to jump back to anything you skipped.'])
      ]));
    }
    wrap.appendChild(steps); wrap.appendChild(body); wrap.appendChild(foot);
    go(cur);
    return { el: wrap, go: go };
  }

  /* ---------------------------------------------------------- pages */
  function setAccent(s) { document.body.setAttribute('data-accent', s ? s.accent : 'coral'); }
  function navOn(which) { document.querySelectorAll('.top nav a').forEach(function (a) { a.classList.toggle('on', a.getAttribute('data-nav') === which); }); }

  function pageHome() {
    setAccent(null); navOn('home'); document.title = 'Conflict at Work | Study site';
    var hero = h('section', { class: 'hero' }, [
      h('div', null, [
        h('span', { class: 'pill acc' }, ['Organizational Behaviour']),
        h('h1', { style: 'margin-top:12px', html: 'Why do good teams <em>fight</em>, and what helps?' }),
        h('p', { class: 'lead' }, ['Short animated videos on conflict at work, each followed by quick, hands-on activities: sorting, spotting, negotiating and deciding. Pick your series and work through it at your own pace.'])
      ]),
      h('div', { class: 'hero-art' }, [h('img', { src: 'img/owl.png', alt: 'Owl mascot', width: 640, height: 640 })])
    ]);
    var how = h('div', { class: 'how' }, [
      h('div', null, [h('span', { class: 'n' }, ['1']), h('b', null, ['Watch']), h('span', { class: 'muted' }, ['Each video is about four minutes.'])]),
      h('div', null, [h('span', { class: 'n' }, ['2']), h('b', null, ['Try']), h('span', { class: 'muted' }, ['Five or six short activities, one at a time.'])]),
      h('div', null, [h('span', { class: 'n' }, ['3']), h('b', null, ['Reflect']), h('span', { class: 'muted' }, ['Connect the ideas to your own experience.'])])
    ]);
    var grid = h('div', { class: 'series-grid' });
    SERIES.forEach(function (s) {
      var st = seriesStats(s);
      var card = h('a', { class: 'series-card', href: '#/s/' + s.id, 'data-accent': s.accent }, [
        h('div', { class: 'band' }),
        h('div', { class: 'body' }, [
          h('div', { class: 'row' }, [h('span', { class: 'pill' }, [s.level]), h('span', { class: 'pill soft' }, [s.levelNote])]),
          h('h2', { style: 'margin:4px 0 0' }, [s.title]),
          h('p', null, [s.tagline]),
          h('div', { class: 'thumbs' }, s.episodes.slice(0, 3).map(function (e, i) { return h('img', { src: 'img/' + s.id + '-' + (i + 1) + '.jpg', alt: '', loading: 'lazy' }); })),
          h('div', { class: 'foot' }, [h('div', { class: 'bar' }, [h('i', { style: 'width:' + pct(st.done, st.total) + '%' })]), h('span', { class: 'small muted' }, [pct(st.done, st.total) + '%']), h('span', { class: 'btn sm acc' }, [st.done ? 'Continue →' : 'Start →'])])
        ])
      ]);
      grid.appendChild(card);
    });
    $app.innerHTML = '';
    $app.appendChild(h('div', { class: 'wrap' }, [hero, how, h('h2', null, ['Choose your series']), grid]));
  }

  function pageSeries(s) {
    setAccent(s); navOn('s-' + s.id); document.title = s.title + ' | Study site';
    var st = seriesStats(s);
    var list = h('div', { class: 'ep-list' });
    s.episodes.forEach(function (e, i) {
      var u = st.units[i], w = state.watched[s.id + '-' + (i + 1)];
      var status = u.complete ? h('span', { class: 'status done' }, ['✓ Complete' + (u.max ? ' · ' + pct(u.score, u.max) + '%' : '')])
        : (u.done || w) ? h('span', { class: 'status' }, [u.done + ' of ' + u.total + ' activities']) : h('span', { class: 'status muted' }, ['Not started']);
      list.appendChild(h('a', { class: 'ep-card', href: '#/s/' + s.id + '/' + (i + 1) }, [
        h('img', { src: 'img/' + s.id + '-' + (i + 1) + '.jpg', alt: '', loading: 'lazy' }),
        h('div', null, [h('div', { class: 'num' }, ['Part ' + (i + 1) + ' · ' + e.length]), h('h3', null, [e.title]), h('div', { class: 'muted small' }, [e.acts.length + ' activities'])]),
        h('div', { class: 'st' }, [status])
      ]));
    });
    var f = st.fin;
    list.appendChild(h('a', { class: 'ep-card final', href: '#/s/' + s.id + '/final' }, [
      h('div', { class: 'final-art' }, ['🏆']),
      h('div', null, [h('div', { class: 'num' }, ['Final challenge']), h('h3', null, [s.final.title]), h('div', { class: 'muted small' }, [s.final.blurb])]),
      h('div', { class: 'st' }, [f.complete ? h('span', { class: 'status done' }, ['✓ ' + pct(f.score, f.max) + '%']) : h('span', { class: 'status' }, ['Try it →'])])
    ]));
    $app.innerHTML = '';
    $app.appendChild(h('div', { class: 'wrap' }, [
      h('div', { class: 'crumbs' }, [h('a', { href: '#/' }, ['Home']), ' / ', s.title]),
      h('div', { class: 'series-head' }, [
        h('div', { class: 'meta' }, [h('span', { class: 'pill acc' }, [s.level]), h('h1', { style: 'margin-top:10px' }, [s.title]), h('p', { class: 'muted', style: 'margin:0' }, [s.tagline])]),
        h('div', { class: 'stat' }, [h('div', { class: 'small muted' }, ['Your progress']), h('div', { style: 'font-weight:800;font-size:1.3rem' }, [st.completeEps + ' of ' + s.episodes.length + ' videos complete']), h('div', { class: 'bar', style: 'margin-top:8px' }, [h('i', { style: 'width:' + pct(st.done, st.total) + '%' })])])
      ]),
      list,
      h('p', { class: 'small muted', style: 'margin-top:18px' }, [s.setting])
    ]));
  }

  function videoBlock(s, n, e) {
    var box = h('div', { class: 'video' });
    var poster = h('button', { class: 'poster', type: 'button', 'aria-label': 'Play video: ' + e.title, onclick: function () {
      box.innerHTML = '';
      box.appendChild(h('iframe', { src: 'https://www.youtube-nocookie.com/embed/' + e.yt + '?autoplay=1&rel=0&modestbranding=1', title: e.title, allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share', allowfullscreen: true, referrerpolicy: 'strict-origin-when-cross-origin' }));
    } }, [h('img', { src: 'img/' + s.id + '-' + n + '.jpg', alt: '' }), h('span', { class: 'play', html: '<svg width="34" height="34" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="#fff"/></svg>' })]);
    box.appendChild(poster);
    return box;
  }

  function pageEpisode(s, n) {
    var e = s.episodes[n - 1]; if (!e) return pageSeries(s);
    setAccent(s); navOn('s-' + s.id); document.title = e.title + ' | ' + s.title;
    var wkey = s.id + '-' + n;
    var cb = h('input', { type: 'checkbox' }); cb.checked = !!state.watched[wkey];
    cb.addEventListener('change', function () { state.watched[wkey] = cb.checked; save(); });
    var next = n < s.episodes.length ? '#/s/' + s.id + '/' + (n + 1) : '#/s/' + s.id + '/final';
    var nextLabel = n < s.episodes.length ? 'Next: Part ' + (n + 1) + ' →' : 'Final challenge →';
    var L = lab(s, n, e.acts, function () {
      var nb = document.getElementById('nextbtn'); if (nb) nb.classList.add('acc');
    });
    $app.innerHTML = '';
    $app.appendChild(h('div', { class: 'wrap narrow' }, [
      h('div', { class: 'crumbs' }, [h('a', { href: '#/' }, ['Home']), ' / ', h('a', { href: '#/s/' + s.id }, [s.title]), ' / Part ' + n]),
      h('div', { class: 'ep-head' }, [h('div', { class: 'row' }, [h('span', { class: 'pill acc' }, [s.title + ' · Part ' + n + ' of ' + s.episodes.length]), h('span', { class: 'pill soft' }, [e.length])]), h('h1', { style: 'margin-top:12px;font-size:clamp(1.7rem,4vw,2.5rem)' }, [e.title])]),
      h('div', { class: 'ep-layout' }, [
        h('div', { class: 'callout' }, [h('b', null, ['Before you watch: ']), e.warmup]),
        h('div', null, [videoBlock(s, n, e), h('div', { class: 'under-video' }, [
          h('label', { class: 'check' }, [cb, 'I\'ve watched this video']),
          h('span', { class: 'spacer' }),
          h('a', { href: 'https://youtu.be/' + e.yt, target: '_blank', rel: 'noopener' }, ['Open on YouTube ↗'])
        ])]),
        h('details', { class: 'panel' }, [h('summary', null, ['💡 Key ideas (for revision)']), h('ul', null, e.key.map(function (k) { return h('li', { html: k }); }))]),
        L.el,
        h('details', { class: 'panel' }, [h('summary', null, ['📚 References']), h('ul', { class: 'refs' }, e.refs.map(function (k) { return h('li', { html: k }); }))])
      ]),
      h('div', { class: 'ep-nav' }, [
        n > 1 ? h('a', { class: 'btn ghost', href: '#/s/' + s.id + '/' + (n - 1) }, ['← Part ' + (n - 1)]) : h('a', { class: 'btn ghost', href: '#/s/' + s.id }, ['← All videos']),
        h('a', { class: 'btn', id: 'nextbtn', href: next }, [nextLabel])
      ])
    ]));
    window.scrollTo(0, 0);
  }

  function pageFinal(s) {
    setAccent(s); navOn('s-' + s.id); document.title = s.final.title;
    var L = lab(s, 'final', s.final.acts);
    $app.innerHTML = '';
    $app.appendChild(h('div', { class: 'wrap narrow' }, [
      h('div', { class: 'crumbs' }, [h('a', { href: '#/' }, ['Home']), ' / ', h('a', { href: '#/s/' + s.id }, [s.title]), ' / Final challenge']),
      h('span', { class: 'pill acc' }, ['🏆 Final challenge']),
      h('h1', { style: 'margin-top:12px;font-size:clamp(1.7rem,4vw,2.5rem)' }, [s.final.title]),
      h('p', { class: 'muted' }, [s.final.blurb]),
      L.el,
      h('div', { class: 'ep-nav' }, [h('a', { class: 'btn ghost', href: '#/s/' + s.id }, ['← All videos']), h('a', { class: 'btn', href: '#/progress' }, ['See my progress →'])])
    ]));
    window.scrollTo(0, 0);
  }

  function pageProgress() {
    setAccent(null); navOn('progress'); document.title = 'My progress';
    var name = h('input', { type: 'text', placeholder: 'Your name (optional, for printing)', value: state.name || '', 'aria-label': 'Your name' });
    name.addEventListener('input', function () { state.name = name.value; save(); pn.textContent = name.value || '(name not entered)'; });
    var pn = h('span', null, [state.name || '(name not entered)']);
    var out = h('div', { class: 'wrap narrow' }, [
      h('h1', null, ['My progress']),
      h('p', { class: 'muted no-print' }, ['Your progress is saved in this browser on this device only. To hand in or keep a record, print this page or save it as a PDF.']),
      h('div', { class: 'print-only' }, [h('p', null, [h('b', null, ['Name: ']), pn, h('br'), h('b', null, ['Printed: ']), new Date().toLocaleString()])]),
      h('div', { class: 'namebox no-print' }, [name, h('button', { class: 'btn acc', onclick: function () { window.print(); } }, ['🖨 Print / save as PDF'])])
    ]);
    SERIES.forEach(function (s) {
      var st = seriesStats(s);
      var rows = s.episodes.map(function (e, i) {
        var u = st.units[i];
        return h('tr', null, [h('td', null, ['Part ' + (i + 1) + ': ' + e.title]), h('td', null, [state.watched[s.id + '-' + (i + 1)] ? '✓' : '·']), h('td', null, [u.done + '/' + u.total]), h('td', null, [u.max ? u.score + '/' + u.max + ' (' + pct(u.score, u.max) + '%)' : '–'])]);
      });
      rows.push(h('tr', null, [h('td', null, [h('b', null, [s.final.title])]), h('td', null, ['']), h('td', null, [st.fin.done + '/' + st.fin.total]), h('td', null, [st.fin.max ? st.fin.score + '/' + st.fin.max + ' (' + pct(st.fin.score, st.fin.max) + '%)' : '–'])]));
      out.appendChild(h('h2', { style: 'margin-top:26px' }, [s.title + ' (' + s.level.toLowerCase() + ')']));
      out.appendChild(h('table', { class: 'ptable' }, [h('thead', null, [h('tr', null, [h('th', null, ['Video']), h('th', null, ['Watched']), h('th', null, ['Activities']), h('th', null, ['Score'])])]), h('tbody', null, rows)]));
      var refl = [];
      s.episodes.forEach(function (e, i) {
        e.acts.forEach(function (a, ai) {
          var r = rec(akey(s.id, i + 1, ai));
          if (a.type === 'reflect' && r && r.text && r.text.trim()) refl.push(h('div', { class: 'refl' }, [h('div', { class: 'rq' }, ['Part ' + (i + 1) + ': ' + a.prompt]), h('div', { class: 'ra' }, [r.text])]));
        });
      });
      if (refl.length) { out.appendChild(h('h3', null, ['My reflections'])); refl.forEach(function (x) { out.appendChild(x); }); }
    });
    out.appendChild(h('div', { class: 'no-print', style: 'margin-top:30px' }, [h('button', { class: 'btn ghost sm', onclick: function () {
      if (window.confirm && !window.confirm('Clear all progress and answers on this device?')) return;
      state = { acts: {}, watched: {}, name: '' }; save(); route();
    } }, ['Reset all progress'])]));
    $app.innerHTML = ''; $app.appendChild(out); window.scrollTo(0, 0);
  }

  /* ---------------------------------------------------------- router */
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  function route() {
    window.scrollTo(0, 0);
    var p = (location.hash || '#/').replace(/^#\/?/, '').split('/');
    if (p[0] === 's' && series(p[1])) {
      var s = series(p[1]);
      if (p[2] === 'final') return pageFinal(s);
      if (p[2]) return pageEpisode(s, parseInt(p[2], 10));
      return pageSeries(s);
    }
    if (p[0] === 'progress') return pageProgress();
    return pageHome();
  }
  document.querySelector('.brand .logo').innerHTML = '<img src="img/owl-icon.png" alt="" width="34" height="34">';
  window.addEventListener('hashchange', route);
  route();
})();
