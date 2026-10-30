# sogo-darktheme
A dark theme for the SoGo email client. Based on the material design theme "grey" I made this very basic, mostly monochrome theme.
While at it I took the liberty to make a couple of layout elements slightly more compact without taking anything away. 

There might be visual bugs.

It is built for SOGo 5.12 (checked against 5.12.12) on mailcow-dockerized, but should work on any installation. The side navigation and top bar are the darkest, the message list is a step lighter and the reading pane lighter again; the date in the top bar and the address under your name are hidden.

## Screenshots
Mockups with made-up names and messages.

![Inbox](inbox1.png "Inbox")
![New email](inbox2.png "New email")
![Calendar](calendar.png "Calendar")
![Peferences](preferences.png "Peferences")

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
