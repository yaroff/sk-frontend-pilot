# Deployment

## Heroku

### Easy 5-Step Deployment Process. For any our next frontend project / creating new version from scratch

*Step 1:* Create a _Procfile_ with following line: `web: npm run start:prod`. We do this because Heroku runs `npm run start` by default, so we need this setting to override default run command.

*Step 2:* Install Node.js buildpack for Heroku app by running following command: `heroku buildpacks:set https://github.com/heroku/heroku-buildpack-nodejs#v110 -a [appname]`. Make sure to replace `#110` with whatever latest buildpack is, which you can [find here](https://github.com/heroku/heroku-buildpack-nodejs/releases). Currently used version is released on Jul 26 and added to instruction at 28.08.2017

*Step 3:* Add this line to our `package.json` file in scripts area: `"heroku-postbuild": "npm run build",`. This is so Heroku can build production assets when deploying (more of which you can [read about here](https://devcenter.heroku.com/articles/nodejs-support#heroku-specific-build-steps)). Then, adjust _prebuild_ script in `package.json` file so it looks like this: `"prebuild": "npm run build:clean",` to avoid having Heroku attempt to run Jest tests (which are unsupported with this buildpack).

*Step 4:* Run `heroku config:set NPM_CONFIG_PRODUCTION=false` so that Heroku can compile NPM modules included in _devDependencies_ (since many of these packages are required for build process).

*Step 5:* Follow standard Heroku deploy process:

1. `git add .`
2. `git commit -m 'Made some epic changes as per usual'`
3. `git push heroku master`
