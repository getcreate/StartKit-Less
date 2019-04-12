module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch(['./source/pages/**/*.pug','./source/blocks/**/*.pug'], $.gulp.series('pug'));
        $.gulp.watch(['./source/styles/**/*.less','./source/blocks/**/*.less'], $.gulp.series('styles'));
        $.gulp.watch(['./source/pictures/images/**/*.{png,jpg,gif,svg}',
            './source/pictures/content/**/*.{png,jpg,gif,svg}'], $.gulp.series('images'));
        $.gulp.watch('./source/pictures/svg/*.svg', $.gulp.series('svg'));
        $.gulp.watch('./source/fonts/**/*.*', $.gulp.series('fonts'));
        $.gulp.watch('./source/scripts/**/*.js', $.gulp.series('scripts'));
    });
};