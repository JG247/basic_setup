module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                background: false
            }
        },
        watch: {
            // sass: {
            //     files: ['sass/**/*.{scss,sass}','sass/_partials/**/*.{scss,sass}'],
            //     tasks: ['sass:dist']
            // },
            livereload: {
                files: ['*.html', '*.php', 'js/**/*.{js,json}', 'css/*.css','img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
                options: {
                    livereload: true
                }
            },
            karma: {
                files: ['js/**/*.js', 'js/**/*spec.js'],
                tasks: ['karma:unit:run'] //NOTE the :run flag
            }
        }
  });
    grunt.registerTask('default', ['watch']);
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');

};