module.exports = function (grunt) {
	grunt.registerTask('syncAssets', [
		'jst:dev',
		'less:dev',
		'stylus:dev',
		'stylus:devOUT',
		'sync:dev',
		'coffee:dev'
	]);
};
