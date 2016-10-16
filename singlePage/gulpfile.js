const gulp = require("gulp");
const cssnano = require("gulp-cssnano"); //css压缩
const uglify = require("gulp-uglify");    //js压缩
const image = require("gulp-image");     //图片压缩
const _if = require("gulp-if");
const useref = require("gulp-useref");   //合并js文件、css文件
const sequence = require('gulp-sequence');


gulp.task('html',() =>{
    gulp.src('app/index.html')
    .pipe(useref())
    .pipe(_if('*.js',uglify()))
    .pipe(_if('*.css',cssnano()))
    .pipe(gulp.dest('dist/'));
});

gulp.task('image',()=>{
    gulp.src('app/images/*.*')
    .pipe(image())
    .pipe(gulp.dest('dist/images/'));
});

gulp.task('move',() =>{
    gulp.src('app/*/*.html')
    .pipe(gulp.dest('dist/'));
});

gulp.task('default',sequence(['html'],'image','move'));
