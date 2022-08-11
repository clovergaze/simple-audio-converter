"use strict";

module.exports = function (grunt) {
  grunt.initConfig({
    tslint: {
      files: [
        "src/**/*.ts"
      ],
      options: {
        configuration: "tslint.json"
      }
    },
    ts: {
      default: {
        options: {
          verbose: false
        },
        tsconfig: true
      }
    },
    uglify: {
      default: {
        files: {
          "bin/convert.js": [
            "src/**/*.js"
          ]
        }
      }
    },
    clean: {
      default: {
        src: [
          ".tscache",
          "src/*.js",
          "src/*.js.map"
        ]
      }
    },
    watch: {
      start: {
        files: [
          "src/**/*.ts"
        ],
        options: {
          atBegin: true
        },
        tasks: ["build"]
      },
      config: {
        files: [
          "Gruntfile.js",
          "tsconfig.json",
          "tslint.json"
        ],
        options: {
          reload: true
        },
        tasks: ["build"]
      }
    }
  });

  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks("grunt-tslint");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("build", ["tslint", "ts", "uglify"]);

  grunt.registerTask("default", ["build"]);
};
