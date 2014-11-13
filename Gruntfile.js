module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    less: {
      development: {
        files: {
          "pages/styles/main-less-generated.css": "pages/styles/main-less.less"
        }
      }
    },
    sass: {
      development: {
        files: {
          "pages/styles/main-sass-generated.css": "pages/styles/main-sass.scss"
        }
      }
    },
    watch: {
      less: {
        files: ['pages/styles/*.less'],
        tasks: ['less:development']
      },
      sass: {
        files: ['pages/styles/*.scss'],
        tasks: ['sass:development']
      }
    },
    nodemon: {
      dev: {
        script: './server.js'
      }
    },
    concurrent: {
      tasks: ['nodemon', 'watch'],
      options: {
        logConcurrentOutput: true
      }
    }
  });

  grunt.registerTask('force', ['less:development','sass:development']);
  grunt.registerTask('default', ['concurrent']);
};