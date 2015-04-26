module.exports = function (grunt) {
	'use strict';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		version: grunt.file.readJSON('package.json').version,
		banner: '/*! <%= pkg.title || pkg.name %> - v<%= version %>\n' +
			'<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
			'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
			' Licensed <%= pkg.license %> */\n',

		less: {
			production: {
				files: { 'assets/css/bundle.css': 'static/less/main.less' },
				options: { compress: true },
				plugins: [
					new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]}),
					new (require('less-plugin-clean-css'))({})
				],
			},
		},
		watch: {
			options: {
				atBegin: true,
			},
			less: {
				files: ['static/less/**/*.less'],
				tasks: ['less'],
				options: { spawn: true },
			},
		},
		browserify: {
			prod: {
				files: { "assets/js/prod.js": "static/js/app/app.js" },
				options: {
					preBundleCB: function (b) {
						b.plugin('minifyify', {
							compressPath: function (p) {
								return require('path').relative(__dirname, p);
							},
							map: '/static/js/prod.map?',
							output: "assets/js/prod.map"
						});
						return b;
					},
					watch: false,
					browserifyOptions: {
						debug: true,
					},
				},
			},
			dev: {
				files: { "assets/js/dev.js": "static/javascript/main.js" },
			},
			options: {
				transform: [],
				watch: true,
				keepAlive: true,
				browserifyOptions: {
					debug: true,
				},
			}
		},
		concurrent: {
			server: {
				tasks: ['nodemon:server', 'nodemon:consumer']
			},
			watch: {
				tasks: ['browserify:dev', 'watch'],
				options: {
					logConcurrentOutput: true
				}
			}
		},
	});

	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-nodemon');

	grunt.registerTask('serve', ['nodemon:server']);
	grunt.registerTask('watchy', ['concurrent:watch']);
	grunt.registerTask('build', ['browserify:prod']);
	grunt.registerTask('deploy', ['s3:deploy']);
};
