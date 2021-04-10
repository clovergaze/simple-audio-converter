'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        tslint: {
            options: {
                configuration: 'tslint.json'
            },
            default: ['index.ts']
        },
        ts: {
            default: {
                options: {
                    verbose: false
                },

                // specifying tsconfig as a boolean will use the 'tsconfig.json' in same folder as Gruntfile.js
                tsconfig: true
            }
        },
        clean: {
            default: {
                src: [
                    '.tscache',
                    'node_modules',
                    'index.js',
                    'index.js.map'
                ]
            }
        },
        watch: {
            start: {
                files: [],
                tasks: ['build'],
                options: {
                    atBegin: true
                }
            },
            config: {
                files: ['Gruntfile.js'],
                options: {
                    reload: true
                }
            },
            default: {
                files: ['index.ts', 'tsconfig.json', 'tslint.json'],
                tasks: ['build']
            }
        }
    });

    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-tslint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', ['tslint', 'ts']);

    grunt.registerTask('default', ['build']);
};
