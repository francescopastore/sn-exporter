# Exporter

Deployed on [Heroku](http://sn-exporter.herokuapp.com/)

A Standard Notes action to export notes into different file types.

Actually, only to pdf and txt formats.

Notes are completely deleted from server after 15 minutes.

## How to install

Use this url as extension link in import extension

```
https://sn-exporter.herokuapp.com/action
```

## For development

### Global dependencies

This global deps are used through cli commands, so they must be installed separately.

- [md-to-pdf](https://github.com/simonhaenisch/md-to-pdf)

```
npm i -g md-to-pdf
```

### Run local

- `yarn run dev` to start dev server
- App can be installed at this address

```
https://localhost:3000/action
```

### Changelog

See `changelog.md` file

## Contributing

Please submit issues if you find bugs or other errors.

Feel free to submit a PR for new functionalities or bugfixes.
