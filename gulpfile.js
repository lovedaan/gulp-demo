/*
1.less编译压缩合并
2.js压缩合并
3.img图片复制
4.html压缩
 */

//首先载入gulp模块

var gulp = require('gulp');

var less = require('gulp-less');  //less编译

var cssnano = require('gulp-cssnano'); //css压缩

var concat = require('gulp-concat');  //js合并

var uglify = require('gulp-uglify');  //js压缩混淆

var imagemin = require('gulp-imagemin');

var htmlmin = require('gulp-htmlmin');

var browserSync = require('browser-sync').create();


//1.less编译压缩合并
gulp.task('style',function(){
    //找到我们要编译的文件路径
    //执行什么操作
    //复制到什么路径下
    gulp.src(['src/styles/*.less','!src/styles/_*.less'])
    .pipe(less())
    .pipe(cssnano())
    .pipe(gulp.dest('dist/styles/'));
});

//2.js压缩合并
gulp.task('script',function(){
    gulp.src('src/script/*.js')
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/script/'));
});

//3.图片压缩合并
gulp.task('image',function(){
    gulp.src('src/images/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images/'));
});

//4.html压缩
gulp.task('html',function(){
    gulp.src('src/*.html')
    .pipe(htmlmin({
        collapseWhitespace : true,
        removeComments : true
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "dist/"
        }
    });

    gulp.watch('src/styles/*.less',['style']);
      gulp.watch('src/scripts/*.js',['script']);
      gulp.watch('src/images/*.*',['image']);
      gulp.watch('src/*.html',['html']);
});