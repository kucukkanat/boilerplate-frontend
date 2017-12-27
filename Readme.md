## Frontend Boilerplate

This is still a work in progress
## Contents
* [Dependencies](#dependencies)
* [Environment Variables](#env_variables)
* [NPM Scripts & Gulp Tasks](#tasks)

<a id='dependencies'></a>
#### Dependencies 

You can simply check the `package.json` what are you doing here?

<a id='env_variables'></a>
## Environment Variables 

Environment variables are set with [cross-env](https://github.com/kentcdodds/cross-env) package
git 
Used in `tasks/buildscss.js` `tasks/buildjs.js` and `webpack.config.js` 
for development and production builds

<a id='tasks'></a>
## NPM Scripts & Gulp Tasks 

To develop run `npm run dev` 

To Build run `npm run build`

Gulp tasks are self explanatory : 

* `npm run gulp -- new:component`
* `npm run gulp -- new:view`
* ~~`npm run gulp -- new:reducer`~~ DEPRECATED
* `npm run gulp -- new:action` Now action creators create their own reducers
* `npm run gulp -- new:shared` for new shared library for custom purposes
* `npm run gulp -- analyze` analyzes your webpack bundle and exports into `dist/statistics.html`
* `npm run gulp -- copy:assets` copies assets into `dist` folder
* `npm run gulp -- copy:index` copies `index.html` into `dist` folder
* `npm run gulp -- bitballoon` deploys to bitballoon.com
* `npm run gulp -- eslint` Lints your code and generates errors
* `npm run eslint:fix` Fixes auto fixable eslint errors
* `npm run gulp -- jsdoc` Creates documentation using jsdoc 

## TODO : 
- [ ] Add `redux-thunk` as middleware
- [ ] Add Licence
- [ ] Better readme (Cover everything in the repo)
- [ ] Add defaults for `new:component` and `new:view` tasks
- [ ] Remove `styled-jsx` it is not efficient

###### Notes : 
Dont forget to `npm run gulp -- --tasks` and update this documentation after you add a new task

