# sogo-darktheme
A dark theme for the SoGo email client. Based on the material design theme "grey" I made this very basic, mostly monochrome theme.
While at it I took the liberty to make a couple of layout elements slightly more compact without taking anything away. 

There might be visual bugs.

It is built for SOGo 5.12 (checked against 5.12.12) on mailcow-dockerized, but should work on any installation. The side navigation and top bar are the darkest, the message list is a step lighter and the reading pane lighter again; the date in the top bar and the address under your name are hidden.

## Screenshots
![Inbox](inbox1.png "Inbox")
![New email](inbox2.png "New email")
![Calendar](calendar.png "Calendar")
![Peferences](preferences.png "Peferences")

## v2 theme
`v2-theme.css` applies the v2 design system ("Night") to SOGo 5.12 (checked against 5.12.12):

- three surface depths in warm soot: the side navigation and top bar are the darkest, the list column is lighter and the reading column lighter again, with v2 film grain everywhere and paper wear on the navigation, top bar and sign-in page
- bone text, heat accents: magenta → ember → amber on the main action buttons and switches, heat-gradient hover and active rows, amber focus rings, magenta links, checkboxes and radios
- the clean v2 logo in place of the user avatar and the SOGo logo on the sign-in page
- Bricolage Grotesque for titles and Instrument Sans for everything else, served from your own server (no Google Fonts request)
- the email itself sits on a light paper sheet, so HTML mail that assumes a white background stays readable

`v2-theme.js` is the matching colour palette. SOGo paints some colours from its JavaScript palette at runtime (the selected folder, the selected message, today in the calendar, the quota text, the "no message selected" area), and these would otherwise stay in the stock SOGo colours. The CSS covers those places too, so the theme mostly works without it, but install both.

### Mailcow
Put these files in `./data/conf/sogo/`:

| file | from this repo |
| --- | --- |
| `v2-theme.css` | `v2-theme.css` |
| `v2-theme.js` | `v2-theme.js` |
| `BricolageGrotesque-Variable.woff2` | `v2-fonts/` |
| `InstrumentSans-Variable.woff2` | `v2-fonts/` |

Then add to `docker-compose.override.yml` (no `SOGoUIxDebugEnabled` change needed):

```
services:
  sogo-mailcow:
    volumes:
      - ./data/conf/sogo/v2-theme.css:/usr/local/lib/GNUstep/SOGo/WebServerResources/css/theme-default.css:z
      - ./data/conf/sogo/v2-theme.js:/usr/local/lib/GNUstep/SOGo/WebServerResources/js/theme.js:z
      - ./data/conf/sogo/BricolageGrotesque-Variable.woff2:/usr/local/lib/GNUstep/SOGo/WebServerResources/fonts/BricolageGrotesque-Variable.woff2:z
      - ./data/conf/sogo/InstrumentSans-Variable.woff2:/usr/local/lib/GNUstep/SOGo/WebServerResources/fonts/InstrumentSans-Variable.woff2:z
```

The `js/theme.js` line replaces mailcow's own mount of `custom-theme.js` (Compose keeps the override's mount for the same target), so you don't have to edit that file. Run `docker compose up -d`, then `docker compose restart memcached-mailcow`, and hard-reload the browser.

The fonts are licensed under the SIL Open Font License 1.1; the licence texts are in `v2-fonts/`.

## Installation
### Mailcow
Put `custom-theme.css` and `dark-theme.js` from this repo in `./data/conf/sogo/`, then add to `docker-compose.override.yml`:

```
services:
  sogo-mailcow:
    volumes:
      - ./data/conf/sogo/custom-theme.css:/usr/local/lib/GNUstep/SOGo/WebServerResources/css/theme-default.css:z
      - ./data/conf/sogo/dark-theme.js:/usr/local/lib/GNUstep/SOGo/WebServerResources/js/theme.js:z
```

Then run `docker compose up -d`, then `docker compose restart memcached-mailcow`, and hard-reload the browser.

`dark-theme.js` is the matching colour palette. SOGo paints some colours from its JavaScript palette at runtime (the selected folder and message, today in the calendar, the quota text), and these would otherwise stay in the stock SOGo colours. Its mount replaces mailcow's own mount of `custom-theme.js` (Compose keeps the override's mount for the same target), so you don't have to edit that file.

Current SOGo images install to `/usr/local/lib/GNUstep`. Older guides (and older versions of this README) mount to `/usr/lib/GNUstep`, which newer SOGo versions no longer read, so the theme silently doesn't load.
