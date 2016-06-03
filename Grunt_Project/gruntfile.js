module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'public/src/main.js',
        dest: 'public/bin/main.min.js'
      }
    },

    less: {
      development: {
        options: {
          paths: ['public/styles/less']
        },
        files: {
          'public/styles/css/main.css' : 'public/styles/less/main.less'
        }
      }
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Load the plugin that compiles less to css
  grunt.loadNpmTasks('grunt-contrib-less');
  // Default task(s).
  grunt.registerTask('default', ['uglify', 'less']);

};