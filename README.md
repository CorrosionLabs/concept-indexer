# Concept Indexer

Mechanical concept indexer for Obsidian.

Concept Indexer searches for a concept across your Markdown vault, creates wikilinks, generates master pages with contextual references, and maintains a global concept index.

## Features

- Search concepts across the entire vault or selected folders
- Process folders together or separately
- Create wikilinks automatically
- Generate master pages for concepts
- Create a global concept index
- Add optional hashtags
- Create direct links to headings and block references
- Show contextual excerpts for each reference
- Ignore selected folders
- Persistent settings
- Multilingual interface

## Languages

- English
- Español
- Français
- Deutsch
- Português (Brasil)
- Polski
- 日本語
- 简体中文

## Installation

### Manual installation

1. Download the latest release.
2. Copy the plugin folder to:

```text
<your-vault>/.obsidian/plugins/concept-indexer/
```

3. Make sure the folder contains:

```text
main.js
manifest.json
```

4. Restart Obsidian or reload the plugins.
5. Enable **Concept Indexer** in:

```text
Settings → Community plugins
```

## Usage

1. Open Concept Indexer from the ribbon.
2. Enter a concept or select text in a note and use **Use selection**.
3. Choose the search scope.
4. Click **Search**.
5. Review the results.
6. Select the desired processing options.
7. Click **Process concept**.

## Processing options

### Wikilinks

Converts matching concept references into Obsidian wikilinks.

### Master page

Creates or updates a master page containing links to every note where the concept appears.

References can point directly to:

- headings;
- stable block references.

Context excerpts are included when available.

### Hashtag

Optionally adds a normalized hashtag to matching notes.

## Global concept index

Concept Indexer maintains a compact global index linking processed concepts to their master pages.

Default file:

```text
Concept Index.md
```

Default master folder:

```text
Concept Indexer/
```

Both can be changed in the plugin settings.

## Settings

You can configure:

- interface language;
- master pages folder;
- global index filename;
- ignored folders.

## Privacy

Concept Indexer works locally inside your Obsidian vault.

It does not use:

- AI services;
- external APIs;
- cloud processing;
- telemetry.

## License

MIT

## Author

Corrosion Labs

## Support

If you find Concept Indexer useful and want to support its development:

<a href='https://ko-fi.com/Y5Y722A4J4' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi6.png?v=6' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
