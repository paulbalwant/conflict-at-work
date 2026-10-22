# Conflict at Work: study site

A static website (HTML, CSS and JavaScript only, no build step) for two video series:

- **Conflict at Work** (undergraduate, 5 videos)
- **Conflict in Teams** (postgraduate, 7 videos)

Each video is followed by 5–7 short activities shown one at a time, plus a final challenge for each series. Students' progress, scores and written reflections are saved in their own browser (localStorage). Nothing is sent anywhere. The **My progress** page can be printed or saved as a PDF if you want students to hand in evidence of completion.

## Publish on GitHub Pages

1. Create a new public repository on GitHub (for example `conflict-at-work`).
2. Upload **everything in this folder** (keep the `css`, `js` and `img` folders, `index.html` and `.nojekyll`). On github.com: *Add file → Upload files*, drag the folder contents in, then *Commit changes*.
3. Go to *Settings → Pages*. Under *Build and deployment*, choose *Deploy from a branch*, branch `main`, folder `/ (root)`, and *Save*.
4. After a minute or two the site is live at `https://<your-username>.github.io/<repository-name>/`.

Direct links you can give students:

- Undergraduate series: `…/#/s/caw`
- Postgraduate series: `…/#/s/cit`
- A specific video, e.g. Part 2: `…/#/s/caw/2`

## Previewing on your own computer

Opening `index.html` by double-clicking works for the activities, but YouTube may refuse to play embedded videos from a `file://` page. To preview properly, run a local server in this folder (for example `python -m http.server`) and open `http://localhost:8000`. On GitHub Pages the videos play normally.

## Editing content

All the text lives in two files:

- `js/content-caw.js` (Conflict at Work)
- `js/content-cit.js` (Conflict in Teams)

Each episode has a YouTube ID (`yt`), a "before you watch" question (`warmup`), key ideas (`key`), references (`refs`) and a list of activities (`acts`). Activity types:

| type | What students do |
|---|---|
| `mcq` | Multiple-choice questions with instant explanations |
| `sort` | Tap (or drag) cards into labelled boxes |
| `order` | Put steps in the right order |
| `spot` | Click the line in a dialogue where something happens |
| `tf` | Flip-card true/false |
| `grid` | Place scenarios on the assertiveness × cooperativeness grid |
| `multi` | Select all that apply (`open: true` = no right answer) |
| `zone` | Drag sliders to find the bargaining zone |
| `average` | Sliders showing how strong effects can average to zero |
| `dilemma` | Branching choices with a running meter |
| `selfcheck` | Informal 1–5 self-assessment with a profile chart |
| `breathe` | Guided 15-second pause |
| `reflect` | Written reflection, then a model answer is revealed |

In MCQs, `a` is the index of the correct option, counting from 0.

Thumbnails in `img/` are the recommended thumbnails from each YouTube pack, resized to 640×360.
