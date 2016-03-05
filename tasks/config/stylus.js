module.exports = function(grunt) {

grunt.config.set('stylus', {
    dev: {
        files: [{
            expand: true,
            cwd: 'assets/IN/styles/',
            src: ['importer.styl'],        //Edit this to match your files
            dest: '.tmp/public/IN/styles/',
            ext: '.css'
        }]
    },
    devOUT: {
        files: [{
            expand: true,
            cwd: 'assets/OUT/styles/',
            src: ['importer.styl'],        //Edit this to match your files
            dest: '.tmp/public/OUT/styles/',
            ext: '.css'
        }]
    }
});

grunt.loadNpmTasks('grunt-contrib-stylus');

};