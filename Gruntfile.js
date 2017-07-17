'use strict';
module.exports= function(grunt){

	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);
    

	var serveStatic = require('serve-static');
	var modRewrite = require('connect-modrewrite');
    const path = require('path');
    const webpack = require('webpack');
	var config = {
		app:'app',
		dist:'dist',
		bower: 'bower_components',
        react:'react',
	};
	grunt.initConfig({
		config:config,
		pkg:grunt.file.readJSON('package.json'),
        webpack:{

        webapp:{
            devtool: "source-map",
            entry: {
                client:__dirname+"/<%= config.react %>/web/app-web.jsx"
            },
            resolve: {
                 extensions: ['.jsx','.js', '.json','.less' , '.css'],
            },
        
            output: {
                path:__dirname+"/<%= config.app %>/scripts",
                filename: "[name]-bundle.js",
            },
             

            module:{
                loaders:[
                    {
                        test:  /(\.jsx|\.js)$/,
                        loader: 'babel-loader',
                        include: __dirname,
                        exclude: /(node_modules|bower_components)/,
                        query: {
                        cacheDirectory: true,
                            presets: ['es2015','stage-1', 'react']
                        },
                    }
                ]
            },
            plugins:[
                new webpack.DefinePlugin({
                 'process.env': {
                 NODE_ENV: JSON.stringify('production')
                 }
                }),
                new webpack.optimize.UglifyJsPlugin()

            ]
            
        }

    },
		watch:{
			bower:{
				files:['bower.json'],
				tasks:['bowerInstall']
			},
			simple_include:{
				files:['<%= config.app %>/**/*.{html,tpl}'],
				tasks:['simple_include:server']
			},
			js:{
				//files: ['<%= config.app %>/scripts/**/*.js'],
                files: ['<%= config.app %>/scripts/**/*.js', 
                '<%= config.react %>/web/*.jsx',
                '<%= config.react %>/web/**/*.jsx', 
                '!source/<%= config.app %>/scripts/build/app.js'],
				tasks: ['webpack:webapp','compass:server','autoprefixer'],
				options: {
					 livereload: true
				}
			},
			gruntfile: {
                files: ['Gruntfile.js']
            },
            compass: {
                files: ['<%= config.app %>/**/*.{scss,sass}'],
                tasks: ['compass:server','autoprefixer']
            },
            styles: {
                files: ['<%= config.app %>/**/*.css'],
                tasks: ['newer:copy:server', 'autoprefixer']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>',
                    keepalive: true
                },
                files: [
                    '<%= config.app %>/**/*.{html,tpl}',
                    '.tmp/styles/{,*/}*.css',
                    '<%= config.app %>/images/{,*/}*'
                ]
            }
		},
		connect:{
			
				options: {
					//hostname: 'localhost',
					port: 9999,
					livereload: 32759,
					open: true,
                    hostname: '127.0.0.1'
				},
				livereload: {
                options: {
                    middleware: function(connect) {
                        return [
                            modRewrite(['^[^\\.]*$ /index.html [L]']),
                            serveStatic('.tmp'),
                            connect().use('/bower_components', serveStatic('./bower_components')),
                            serveStatic(config.app)
                        ];
                    }
                }
            },
             dist: {
                options: {
                    base: '<%= config.dist %>',
                    livereload: false
                }
            }

			
		},
		clean: {
            dist: {
                files: [{
                    dot: true,
                    src: ['dist']
                }]
            },
            server: {
                files: [{
                    dot: true,
                    src: [ '.tmp', '.sass-cache']
                }]
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish'),
            },
            all: []// ['<%= config.app %>/scripts/{,*/}*.js', '<%= config.app %>/angularjs/**/*.js']
        },
		 simple_include: {
            server: {
                src: ['<%= config.app %>/**/*.html'],
                dest: '.tmp/'
            },
            dist: {
                src: ['<%= config.app %>/**/*.html'],
                dest: '<%= config.dist %>/'
            }
        },
        compass: {
            options: {
                cssDir: '.tmp/styles',
                sassDir: '<%= config.app %>/styles',
                imagesDir: '<%= config.app %>/images',
                fontsDir: '<%= config.app %>/fonts',
                generatedImagesDir: '<%= config.app %>/images/generated',
                generatedImagesPath:'<%= config.app %>/images/generated',
                javascriptsDir: '<%= config.app %>/scripts',
                httpGeneratedImagesPath:'../images/generated',
                httpImagesPath: '../images',
                httpFontsPath: '../fonts',
                relativeAssets: false,
                assetCacheBuster: false,
                noLineComments: false
            },
            dist: {
                options: {
                    generatedImagesDir: '<%= config.dist %>/images/generated'
                }
            },
            server: {
                options: {
                    debugInfo: false
                }
            }
        },
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
         bowerInstall: {
            app: {
                src: [
                    '<%= config.app %>/commom/head-bundle.tpl',
                    '<%= config.app %>/commom/script-bundle.tpl'
                ],
                exclude: ['bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js', ]
            },
            sass: {
                src: ['<%= config.app %>/styles/{,*/}*.{scss,sass}']
            }
        },

       


        rev: {
            dist: {
                files: {
                    src: [
                        '<%= config.dist %>/scripts/{,*/}*.js',
                        '<%= config.dist %>/styles/{,*/}*.css',
                        '<%= config.dist %>/images/{,*/}*.*',
                        '<%= config.dist %>/styles/fonts/{,*/}*.*',
                        '<%= config.dist %>/*.{ico,png}'
                    ]
                }
            }
        },
        useminPrepare: {
            options: {
                dest: '<%= config.dist %>'
            },
            html: [
                '<%= config.app %>/commom/head-bundle.tpl',
                '<%= config.app %>/commom/script-bundle.tpl'
            ]
        },
        usemin: {
            options: {
                assetsDirs: [
                    '<%= config.dist %>',
                    '<%= config.dist %>/images'
                ]
            },
            html: ['<%= config.dist %>/{,*/}*.html'],
            css: ['<%= config.dist %>/styles/{,*/}*.css']
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/fonts',
                    src: '{,*/}*.svg',
                    dest: '<%= config.dist %>/fonts'
                }]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    conservativeCollapse: true,
                    removeAttributeQuotes: true,
                    removeCommentsFromCDATA: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= config.dist %>',
                    src: '{,*/}*.html',
                    dest: '<%= config.dist %>'
                }]
            }
        },
        copy: {
            dist:{
                files:
                [{
                    expand: true,
                    dot: true,
                    cwd: '<%= config.app %>',
                    dest: '<%= config.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        'web.config',
                        'sitemap.xml',
                        '{,*/}*.html',
                        'fonts/{,*/}*.*'
                    ]
                },{
                    expand: true,
                    dot: true,
                    cwd: '<%= config.app %>/data/',
                    dest: '<%= config.dist %>/data/',
                    src: '**'
                },{
                    expand: true,
                    dot: true,
                    cwd: '<%= config.app %>/scripts/libs/',
                    dest: '<%= config.dist %>/scripts/libs/',
                    src: '**'
                },{
                    expand: true,
                    dot: true,
                    cwd: '<%= config.app %>/images/',
                    dest: '<%= config.dist %>/images/',
                    src: '**'
                },{
                    expand: true,
                    dot: true,
                    cwd: '<%= config.app %>/angularjs/',
                    dest: '<%= config.dist %>/angularjs/',
                    src: '**/*.tpl'
                }]
            },
            server:{
                files:
                [{
                    expand: true,
                    dot: true,
                    cwd: '<%= config.app %>',
                    dest: '.tmp/',
                    src: [
                        'styles/{,*/}*.css',
                        'fonts/{,*/}*.*'
                    ]
                }]
            }
        },
        concurrent: {
            server: [
                'simple_include:server',
                'compass:server',
                //'typescript',
                //'jade:server',
                'copy:server'
            ],
            dist: [
                'compass',
                //'typescript',
                //'jade:dist',
                'copy:dist'
            ]
        }

	});
    
	grunt.loadNpmTasks('grunt-webpack');
	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.registerTask('serve', ['browserify', 'connect', 'watch']);

	 grunt.registerTask('serve', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }
        grunt.task.run([
            'clean:server',
            'bowerInstall',
            'webpack:webapp',
            //'uglify',
            //'browserify',
            'concurrent:server',
            'autoprefixer',
            'connect:livereload',
            'watch'
        ]);
    });

	  grunt.registerTask('build', [
        'clean:dist',
        'bowerInstall',
        'webpack:webapp',
        'concurrent:dist',
        'simple_include:dist',
        //'browserify',
        'useminPrepare',
        'concat',
        //'ngAnnotate',
        'cssmin',
        'uglify',
        'usemin',
        'autoprefixer'
    ]);

	grunt.registerTask('default', 'serve');
};