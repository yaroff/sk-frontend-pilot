# Configuration: A Glossary

* `.editorconfig`: Sets default configuration for certain files across editors. (e.g. indentation)

* `.gitattributes`: Normalizes how `git`, version control system this boilerplate uses, handles certain files.

* `.gitignore`: Tells `git` to ignore certain files and folders which don't need to be version controlled, like build folder.

* `package.json`: Our `npm` configuration file has three functions:

  1. It's where Babel and ESLint are configured
  1. It's API for project: a consistent interface for all its controls
  1. It lists project's package dependencies

## `./internals` folder

This is where bulk of tooling configuration lives, broken out into
recognizable units of work.

Feel free to change anything you like but don't be afraid to [ask upfront](https://gitter.im/mxstbr/react-boilerplate)
whether you should: build systems are easy to break!
