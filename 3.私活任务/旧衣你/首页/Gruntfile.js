module.exports = function(grunt) {
  // 配置
  var global = grunt.initConfig({
    pkg : grunt.file.readJSON('package.json'),
    meta: {
      basePath: './',
      srcPath: './sass/',
      deployPath: './css/',
      cssSvnPath: '../../../static/css/activity2/',
      jsSvnPath: '../../../static/src/activity2/',
      imgSvnPath: '../../../static/img/activity2/<%= pkg.name %>/',
      cssSvnAbsPath: 'F://workspace/weimob/static/css/activity2/<%= pkg.name %>/',
      jsSvnAbsPath: 'F://workspace/weimob/static/src/activity2/<%= pkg.name %>/',
      imgSvnAbsPath: 'F://workspace/weimob/static/img/activity2/<%= pkg.name %>/',
      htmlSvnAbsPath: 'F://workspace/weimob/html/activity2/<%= pkg.name %>/'
    },
    concat : {
      js : {
        src: ['js/**/*.js'],
        dest: 'dest/<%= pkg.name %>.js'
      },
      css : {
        src: ['css/**/*.css'],
        dest: 'dest/<%= pkg.name %>.css'
      }
    },
    uglify : {
      options : {
        banner : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> \n * 作者：<%= pkg.author.name %> \n * 版本：<%= pkg.version %> \n * 主页：<%= pkg.homepage %> \n */'
      },
      dist: {
        files: {
          'release/js/<%= pkg.name %>.min.js': ['<%= concat.js.dest %>']
        }
      },
      svn:{
        files:{
          '<%= meta.jsSvnAbsPath %><%= pkg.name %>_min.js': ['<%= concat.js.dest %>']
        }
      }
    },
    cssmin: {
      options : {
        banner : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> \n * 作者：<%= pkg.author.name %> \n * 版本：<%= pkg.version %> \n * 主页：<%= pkg.homepage %> \n */'
      },
      dist: {
        src: '<%= concat.css.dest %>',
        dest: 'release/css/<%= pkg.name %>.min.css'
      },
      svn: {
        src: '<%= concat.css.dest %>',
        dest: '<%= meta.cssSvnAbsPath %><%= pkg.name %>_min.css'
      }
    },

    clean: {
      options:{
        force: true
      },
      dist: ["dest/*", "!dest/jquery-**.js",".sass-cache/**","release/*"],
      svn: ['<%= meta.cssSvnAbsPath %>**','<%= meta.jsSvnAbsPath %>**','<%= meta.imgSvnAbsPath %>**','<%= meta.htmlSvnAbsPath %>**']
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          src: ['*.html','*.php'],
          dest: 'release/'
        },
        {
          expand: true, 
          src: ['img/**'], 
          dest: 'release/'
        },
        {
          expand: true,
          cwd:'dest/',
          src: ['jquery-**.js'], 
          dest: 'release/js/'
        }]
      },
      svn:{
        files: [{
          expand: true, 
          src: ['*.html','*.php'], 
          dest: '<%= meta.htmlSvnAbsPath %>'
        },
        // {
        //   expand: true,
        //   cwd:'img/',
        //   src: ['**'], 
        //   dest: '<%= meta.imgSvnAbsPath %>'
        // }
        ]
      }
    },
    // useminPrepare: {
    //   html: 'release/*.html',
    //   svnHtml: '<%= meta.htmlSvnAbsPath %>*.html'
    // },
    usemin: {
      dist: {
        src: 'release/*.html',
        options: {
          blockReplacements: {
            css: function (block) {
              if(block.dest)
              return '<link rel="stylesheet" href="css/' + global.pkg.name + '.min.css">';
            },
            js: function (block) {
              return '<script src="js/' + global.pkg.name + '.min.js"></script>';
            },
            jq: function(block) {
              return '<script src="'+ block.dest +'"></script>';
            }
          }
        }
      },
      svn: {
        src: '<%= meta.htmlSvnAbsPath %>*.html',
        options: {
          blockReplacements: {
            css: function (block) {
              if(block.dest)
              return '<link rel="stylesheet" href="' + global.meta.cssSvnPath + global.pkg.name + '/' + global.pkg.name + '_min.css">';
            },
            js: function (block) {
              return '<script src="' + global.meta.jsSvnPath + global.pkg.name + '/' + global.pkg.name + '_min.js"></script>';
            },
            jq: function(block) {
              return '<script src="'+ global.meta.jsSvnPath +'zepto_min.js"></script>';
            }
          }
        }
      }
    },
    replace: {
      svn: {
        options: {
          patterns: [
            {
              match: /"img\//g,
              replacement: '"<%= meta.imgSvnPath %>'
            }
          ]
        },
        files: [
          {
            expand: true, 
            flatten: true, 
            src: '<%= meta.htmlSvnAbsPath %>*.html',
            dest:'<%= meta.htmlSvnAbsPath %>'
          }
        ]
      }
    },
    imagemin: {
      options: {
        optimizationLevel: 3,
        // svgoPlugins: [{ removeViewBox: false }],
        // use: [mozjpeg()]
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'img/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'release/img/'
        }]
      },
      svn:{
        files: [{
          expand: true,
          cwd: 'img/',
          src: ['**/*.{png,jpg,gif}'],
          dest: '<%= meta.imgSvnAbsPath %>'
        }]
      }
    },
    sass: {
      dist: {
        files: {
          '<%= meta.deployPath %>style.css':'<%= meta.srcPath %>style.scss'
        },
        options: {
          style: 'nested'
        }
      }
    },
    watch: {
      sass:{
        files: ['<%= meta.srcPath %>/**/*.scss','./**/*.css','./js/**/*.js'],
        tasks: ['sass']
      },
      dist:{
        files: ['<%= meta.srcPath %>/**/*.scss','./**/*.css','./js/**/*.js'],
        tasks: ['sass','concat','uglify:dist','cssmin:dist','copy:dist','imagemin:dist','usemin:dist']
      },
      svn:{
        files: ['<%= meta.srcPath %>/**/*.scss','./**/*.css','./js/**/*.js'],
        tasks: ['sass','concat','uglify:svn','cssmin:svn','copy:svn','imagemin:svn','usemin:svn','replace:svn']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-css');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-replace');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask('w', ['watch:sass']);
  grunt.registerTask('c', ['clean']);
  grunt.registerTask('all', ['clean','sass','concat','uglify','cssmin','copy','imagemin','usemin','replace']);
  grunt.registerTask('svn', ['concat','uglify:svn','cssmin:svn','copy:svn','imagemin:svn','usemin:svn','replace:svn']);
  grunt.registerTask('default', ['concat','uglify:dist','cssmin:dist','copy:dist','usemin:dist']);
  // grunt.registerTask('default', ['concat','uglify:dist','cssmin:dist','copy:dist','imagemin:dist','usemin:dist']);
};