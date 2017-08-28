# Command Line Commands

## Development

```Shell
npm run start
```

Starts development server running on `http://localhost:3000`
> Note: To select [custom port / hostname see]  (#Host and Port)

## Generators

```Shell
npm run generate
```

Allows to auto-generate boilerplate code for common parts of
application, specifically `component`s, and `container`s. You can
also run `npm run generate <part>` to skip first selection. (e.g. `npm run
generate container`)

## Server

### Development

```Shell
npm start
```

Starts development server  at `localhost:3000`. Tunnels that server with
`ngrok`, which means website accessible anywhere! Changes in application
 code will be hot-reloaded.

### Production

```Shell
npm run start:production
```

 * Runs tests (see `npm test`)
 * Builds app (see `npm run build`)
 * Starts production server (see `npm run start:prod`)

App is built for optimal performance: assets are
minified and served gzipped.

### Host and Port

To change host and/or port app is accessible at, pass `--host` and/or `--port` option to command
with `--`. E.g. to make app visible at `my-local-hostname:5000`, run following:
`npm start -- --host my-local-hostname --port 5000`

## Building

```Shell
npm run build
```

Preps your app for deployment (does not run tests). Optimizes and minifies all files, piping them to `build` folder.

## Testing

See [testing documentation](../testing/README.md) for detailed information
about our testing setup!

## Unit testing

```Shell
npm test
```

Tests application with unit tests specified in `**/tests/*.js` files
throughout application.  
All `test` commands allow an optional `-- [string]` argument to filter
tests run by Jest. Useful if you need to run a specific test only.

```Shell
# Run only Button component tests
npm test -- Button
```

### Watching

```Shell
npm run test:watch
```

Watches application changes and re-runs tests whenever a file changes.

### Remote testing

```Shell
npm run start:tunnel
```
Starts development server and tunnels it with `ngrok`, making website
available on entire world. Useful for testing on different devices in different locations!

### Dependency size test

```Shell
npm run analyze
```

This command will generate a `stats.json` file from production build, which
you can upload to [webpack analyzer](https://webpack.github.io/analyse/). This
analyzer will visualize your dependencies and chunks with detailed statistics
about bundle size.

## Linting

```Shell
npm run lint
```
