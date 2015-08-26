// Generated on 2015-08-26 using generator-da-angular 0.1.9
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
  var _ = require('lodash');
  var bowerDeps = require('wiredep')();

  var url = require('url');
  var proxy = require('proxy-middleware');
  var Domo = require('domoapps-client');
  var fs = require('fs-extra');
  var glob = require("glob");
  var home = Domo.getHomeDir();

  function getMostRecentLogin(){
    var logins = glob.sync(home + "/login/*.json");
    if (logins.length === 0) return;

    var mostRecent = logins.reduce(function(prev, next){
      return fs.statSync(prev).mtime > fs.statSync(next).mtime ? prev : next;
    });
    return fs.readJsonSync(mostRecent);
  }
  var mostRecent = getMostRecentLogin();

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Configurable paths for the application
  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist',
    deploy: 'deploy'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: appConfig,
    version: require('./package.json').version,
    // Automatically pick open ports to serve content on.
    portPick: {
      livereload: {
          options: {
            port: 1337,
            name: 'livereload'
          },
          targets: [
            'connect.options.livereload'
          ]
      },
      server: {
        options: {
          port: 9000,
          name: 'server'
        },
        targets: [
          'connect.options.port',
          'connect.test.options.port'
        ]
      }
    },
    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      js: {
        files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
        tasks: ['newer:jshint:all'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      jsTest: {
        files: ['test/spec/{,*/}*.js'],
        tasks: ['newer:jshint:test'], // ['newer:jshint:test', 'karma'] // When you're ready to test.
      },
      compass: {
        files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
        tasks: ['compass:server', 'autoprefixer'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/{,*/}*.html',
          '.tmp/styles/{,*/}*.css',
          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      open: {
        options: {
          open: true,
          middleware: function (connect) {
            var proxyOptions = url.parse('https://'+mostRecent.instance+'/api');
            proxyOptions.headers = {
              'Content-Type': 'application/json',
              'X-Domo-Authentication': mostRecent.sid
            };
            return [
              connect.static('.tmp'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.app),
              connect().use('/api/data/v2/datasources', function (req) {
                return proxy(proxyOptions).apply(this, arguments);
              }),
            ];
          }
        }
      },
      livereload: {
        options: {
          open: false,
          middleware: function (connect) {
            var proxyOptions = url.parse('https://'+mostRecent.instance+'/api');
            proxyOptions.headers = {
              'Content-Type': 'application/json',
              'X-Domo-Authentication': mostRecent.sid
            };
            return [
              connect.static('.tmp'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.app),
              connect().use('/api', function (req) {
                return proxy(proxyOptions).apply(this, arguments);
              })
            ];
          }
        }
      },
      test: {
        options: {
          port: 9001,
          middleware: function (connect) {
            var proxyOptions = url.parse('https://'+mostRecent.instance+'/api');
            proxyOptions.headers = {
              'Content-Type': 'application/json',
              'X-Domo-Authentication': mostRecent.sid
            };
            return [
              connect.static('.tmp'),
              connect.static('test'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.app),
              connect().use('/api/data/v2/datasources', function () {
                return proxy(proxyOptions).apply(this, arguments);
              })
            ];
          }
        }
      },
      dist: {
        options: {
          open: true,
          base: '',
          middleware: function (connect) {
            var proxyOptions = url.parse('https://'+mostRecent.instance+'/api');
            proxyOptions.headers = {
              'Content-Type': 'application/json',
              'X-Domo-Authentication': mostRecent.sid
            };
            return [
              connect().use('/api', function (req) {
                return proxy(proxyOptions).apply(this, arguments);
              })
            ];
          }
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          '<%= yeoman.app %>/scripts/{,*/}*.js'
        ]
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/spec/{,*/}*.js']
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/{,*/}*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      deploy: {
        files: [{
          dot: true,
          src: [
            '<%= yeoman.deploy %>/{,*/}*',
            '!<%= yeoman.deploy %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    // Automatically inject Bower components into the app
    wiredep: {
      app: {
        src: ['<%= yeoman.app %>/index.html'],
        ignorePath:  /\.\.\//
      },
      sass: {
        src: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
        ignorePath: /(\.\.\/){1,2}bower_components\//
      }
    },

    // Compiles Sass to CSS and generates necessary files if requested
    compass: {
      options: {
        sassDir: '<%= yeoman.app %>/styles',
        cssDir: '.tmp/styles',
        generatedImagesDir: '.tmp/images/generated',
        imagesDir: '<%= yeoman.app %>/images',
        javascriptsDir: '<%= yeoman.app %>/scripts',
        fontsDir: '<%= yeoman.app %>/styles/fonts',
        importPath: './bower_components',
        httpImagesPath: '/images',
        httpGeneratedImagesPath: '/images/generated',
        httpFontsPath: '/styles/fonts',
        relativeAssets: false,
        assetCacheBuster: false,
        raw: 'Sass::Script::Number.precision = 10\n'
      },
      dist: {
        options: {
          generatedImagesDir: '<%= yeoman.dist %>/images/generated'
        }
      },
      server: {
        options: {
          debugInfo: true
        }
      }
    },

    // Renames files for browser caching purposes
    filerev: {
      dist: {
        src: [
          '<%= yeoman.dist %>/scripts/{,*/}*.js',
          '<%= yeoman.dist %>/styles/{,*/}*.css',
          '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          '<%= yeoman.dist %>/styles/fonts/*'
        ]
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= yeoman.app %>/index.html',
      options: {
        dest: '<%= yeoman.dist %>',
        flow: {
          html: {
            steps: {
              js: ['concat', 'uglifyjs'],
              css: ['cssmin']
            },
            post: {}
          }
        }
      }
    },

    // Performs rewrites based on filerev and the useminPrepare configuration
    usemin: {
      html: ['<%= yeoman.dist %>/{,*/}*.html'],
      css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
      options: {
        assetsDirs: ['<%= yeoman.dist %>','<%= yeoman.dist %>/images']
      }
    },

    // The following *-min tasks will produce minified files in the dist folder
    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    // cssmin: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/styles/main.css': [
    //         '.tmp/styles/{,*/}*.css'
    //       ]
    //     }
    //   }
    // },
    // uglify: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/scripts/scripts.js': [
    //         '<%= yeoman.dist %>/scripts/scripts.js'
    //       ]
    //     }
    //   }
    // },
    concat: {
      options: {
        separator: ';\n',
      },
      js: {
        src: ['<%= yeoman.dist %>/domo/AutoWidgets.js', '<%= yeoman.dist %>/scripts/vendor{,*/}*.js', '<%= yeoman.dist %>/scripts/scripts{,*/}*.js'],
        dest: '<%= yeoman.deploy %>/app.js',
      },
      css: {
        separator: '\n',
        src: ['<%= yeoman.dist %>/styles/vendor{,*/}*.css', '<%= yeoman.dist %>/styles/main{,*/}*.css'],
        dest: '<%= yeoman.deploy %>/app.css',
      }
    },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: ['*.html', 'views/{,*/}*.html'],
          dest: '<%= yeoman.dist %>'
        }]
      }
    },

    // ng-annotate tries to make the code safe for minification automatically
    // by using the Angular long form for dependency injection.
    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: ['*.js', '!oldieshim.js', '!vendor.js'],
          dest: '.tmp/concat/scripts'
        }]
      }
    },

    // Replace Google CDN references
    cdnify: {
      dist: {
        html: ['<%= yeoman.dist %>/*.html']
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            '*.html',
            'views/{,*/}*.html',
            'images/{,*/}*.{webp}',
            'fonts/{,*/}*.*',
            'domo/{,*/}*.js'
          ]
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= yeoman.dist %>/images',
          src: ['generated/*']
        }, {
          expand: true,
          cwd: '.',
          src: 'bower_components/bootstrap-sass-official/assets/fonts/bootstrap/*',
          dest: '<%= yeoman.dist %>'
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= yeoman.app %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'compass:server'
      ],
      test: [
        'compass'
      ],
      dist: [
        'compass:dist',
        'imagemin',
        'svgmin'
      ]
    },

    // Generate Docs
    ngdocs: {
      all: ['app/**/*.js']
    },
    'gh-pages': {
      options: {
        base: 'docs'
      },
      src: ['**']
    },

    // Test settings
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: true
      }
    },
    /*jshint camelcase: false */
    inline_angular_templates: {
      dist: {
        options: {
          base: 'dist', // (Optional) ID of the <script> tag will be relative to this folder. Default is project dir.
          prefix: '',            // (Optional) Prefix path to the ID. Default is empty string.
          selector: '#appContainer',       // (Optional) CSS selector of the element to use to insert the templates. Default is `body`.
          method: 'prepend',       // (Optional) DOM insert method. Default is `prepend`.
          unescape: {             // (Optional) List of escaped characters to unescape
            '&lt;': '<',
            '&gt;': '>',
            '&apos;': '\'',
            '&amp;': '&'
          }
        },
        files: {
          'deploy/app.html': ['<%= yeoman.dist %>/views/*.html']
        }
      }
    },
    release: {
      options: {
        bump: true,
        changelog: true,
        changelogText: '# <%= version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n', //default: '### <%= version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n'
        file: 'package.json',
        additionalFiles: ['bower.json'],
        npm: false, //default: true
        npmtag: false, //default: no tag
        tagName: 'v<%= version %>'
      }
    }
  });

  grunt.registerTask('getBody', 'This will extract the body from angular template.', function () {

    var index = grunt.file.read('app/index.html', {
      encoding: 'utf8'
    });

    var body = index.match(/<!-- extract:[^>]*>((.|\n)*)<!-- endextract -->/g);
    var appName = require('./bower.json').appName;
    var prefix = '<div id="appContainer" ng-app="'+appName+'">\n';
    var postfix = '\n</div>';

    grunt.file.write('deploy/app.html', (prefix + body[0] + postfix), {
      encoding: 'utf8'
    });

  });

  grunt.registerTask('serve', 'Compile then start a connect web server', function (target, arg2) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    var open = 'livereload';
    if (target === 'open' || arg2 === 'open') {
      open = 'open';
    }

    grunt.task.run([
      'clean:server',
      'wiredep',
      'concurrent:server',
      'autoprefixer',
      'portPick:livereload',
      'portPick:server',
      'connect:' + open,
      'watch'
    ]);
  });

  grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve:' + target]);
  });

  grunt.registerTask('test', [
    'clean:server',
    'concurrent:test',
    'autoprefixer',
    'connect:test',
    'karma'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'wiredep',
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'concat',
    'ngAnnotate',
    'copy:dist',
    'cdnify',
    'cssmin',
    'uglify',
    'filerev',
    'usemin',
    //'htmlmin' //This doesn't work well with SVG so we're going to skip it.
  ]);

  grunt.registerTask('docs', [
    'ngdocs',
    'gh-pages'
  ]);

  grunt.registerTask('deploy', [
    'newer:jshint',
    'clean:deploy',
    'clean:dist',
    'wiredep',
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'concat',
    'ngAnnotate',
    'copy:dist',
    'cssmin',
    'uglify',
    'usemin',
    'concat:js',
    'concat:css',
    'getBody',
    'inline_angular_templates'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    // 'test', // Turn this on once you write your unit tests.
    'build'
  ]);
};
