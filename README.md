# Lacan and Freud bilingual reading archive

Public site: https://shuhuidong56-source.github.io/staferla-bilingual-archive/

This is an unofficial Chinese-English study archive built from materials linked by `staferla.free.fr`. It reorganizes Lacan seminars, Freud collections, and Lacan annex texts into a searchable bilingual reading interface.

## What is included

- A public website that works in desktop and mobile browsers.
- A bilingual Chinese/English interface for browsing Lacan, Freud, and annex entries.
- A manually translated S1 reading page with French source, Chinese translation, and English translation side by side.
- Session-based grouping for long seminar pages, so S1 can be read by discussion date.
- Links back to original DOCX, PDF, and HTML source files on Staferla.

## Public website

Open:

```text
https://shuhuidong56-source.github.io/staferla-bilingual-archive/
```

Direct S1 reading page:

```text
https://shuhuidong56-source.github.io/staferla-bilingual-archive/S1.html
```

## Status

- `S1` has a real manual Chinese/English translation through paragraph 663.
- The homepage indexes 43 entries and 143 document links.
- 26 translated document pages are still draft shells.
- This project is not an official Staferla or Lacan publication.

## Run locally

```bash
python3 -m http.server 4173
```

Open `http://localhost:4173`.

## Translate with OpenAI

Create `.env` from the example and add your real API key:

```bash
cp .env.example .env
```

Then run a small quality check:

```bash
LIMIT_DOCS=1 LIMIT_PARAGRAPHS=3 scripts/process_documents.py
```

Run more only after checking the output in `translated/`:

```bash
LIMIT_DOCS=3 LIMIT_PARAGRAPHS=20 scripts/process_documents.py
```

Full run:

```bash
LIMIT_DOCS=0 LIMIT_PARAGRAPHS=0 scripts/process_documents.py
```

The pipeline caches each paragraph translation in `.translation-cache/`, so interrupted runs can resume without paying again for completed paragraphs.

## Notes

- `glossary.json` controls preferred Lacanian terms.
- `raw-documents/` and `extracted-text/` are generated locally and ignored by git.
- The site reads `generated/translated-docs.js` to show local translation links and whether each one is manual or draft.
