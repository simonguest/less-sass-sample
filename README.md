less-sass-sample
================

An example of using the [grunt-contrib-less](https://github.com/gruntjs/grunt-contrib-less), [grunt-contrib-sass](https://github.com/gruntjs/grunt-contrib-sass), and [grunt-contrib-watch ](https://github.com/gruntjs/grunt-contrib-watch) tasks to automatically watch for file changes in a project, and compile LESS and SASS templates when modified.

##Installation

Perform an npm install in order to install the required dependencies:

    npm install

##Usage

To force compilation of the LESS and SASS templates, use the grunt force command:

    grunt force

To run nodemon, while watching for file changes, use the default grunt command and open a browser to http://localhost:4000:

    grunt