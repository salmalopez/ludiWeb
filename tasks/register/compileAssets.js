module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
		'clean:dev',
		'jst:dev',
		'less:dev',
		'stylus:dev',
		'stylus:devOUT',
		'copy:dev',
		'coffee:dev'
	]);
};
