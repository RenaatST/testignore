var jspaths = ['_js/classes/*.js','_js/helpers.js','_js/app.js'];
var csspaths = ["_scss/*.scss"];
var hbspaths = ["_hbs/*.hbs"];

var concatpaths = ["_js/templates.js"].concat(jspaths); // ["_js/templates.js", '_js/classes/*.js','_js/app.js']

module.exports = function(grunt) {

  grunt.initConfig({

    concat: {
      options: {
        banner: "(function(){\n\n",
        footer: "\n\n})();",
        separator: '\n\n'
      },
      dist: {
        src: concatpaths,
        dest: 'js/app.js'
      }
    },

    watch: {
      js:{
        files: jspaths,
        tasks: ['jshint','handlebars','concat','clean']
      },
      scss:{
        files: csspaths,
        tasks:['compass:development']
      },

      hbs:{
          files: hbspaths,
          tasks: ['handlebars','concat','clean']
      }

    },

    uglify: {
      default: {
        options: {
          wrap: true
        },
        files: {
          'js/app.js': concatpaths
        }
      }
    },

    compass: {
      development: { 
        options: {
          sassDir: '_scss',
          cssDir: 'css',
          environment: 'development',
          force: true
        }
    },


    production: {
        options: {
          sassDir: '_scss',
          cssDir: 'css',
          environment: 'production',
          outputStyle: 'compressed',
          force: true
        }
      }
    },

    jshint:{

      default:{
        options: {
          curly: true,
          eqeqeq: true,
          immed: true,
          latedef: true,
          newcap: true,
          noarg: true,
          sub: true,
          undef: true,
          eqnull: true,
          browser: true,
          noempty: true,
          trailing: true,
          globals:{
              $: true,
              console:true,
              tpl:true
          }
        },
        files:{
          src: jspaths
        }
      }

    },

    handlebars:{

        default:{
            options:{
                namespace: 'tpl',
                processName: function(filePath){
                    var pieces = filePath.split("/");
                    return pieces[pieces.length-1].split(".")[0];
                },
                partialUseNamespace: true
            },
            files:{
                '_js/templates.js': hbspaths
            }
        }

    },

    clean: ['_js/templates.js']





  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['jshint','handlebars','concat','compass:development','clean','watch']);
  grunt.registerTask('production', ['jshint','handlebars','uglify','compass:production','clean']);

};