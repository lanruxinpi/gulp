var gulp = require('gulp');
var less= require('gulp-less');
var concat=require('gulp-concat');
var cleancss=require('gulp-clean-css');
var uglify=require('gulp-uglify');
var imagemin=require('gulp-imagemin')
var htmlmin=require('gulp-htmlmin');

//复制输出
/*gulp.task('copy', function () {
    gulp.src('./src/!**!/!*')
        .pipe(gulp.dest('./build'))
})*/
//监视
/*gulp.task('watchfile', function () {
    gulp.watch('./src/index.html', ['task1', 'task2'], function () {
    })
})*/
/*//将less转换为css
gulp.task('less',function () {
    gulp.src('src/less/!*.less')
        .pipe(less())
        .pipe(gulp.dest('src/css'))
})*/
/*//合并css/js
gulp.task('concat',function () {
    gulp.src('./src/css/!*.css')
        .pipe(concat('all.css'))
        .pipe(gulp.dest('./build/css'))
})*/
//压缩css
gulp.task('clean',function () {
    gulp.src('src/css/*.css')
        .pipe(concat('all.css'))
        .pipe(cleancss())
        .pipe(gulp.dest('./build/css'))
})
// 压缩js
gulp.task('js1',function () {
    gulp.src('src/js/*.js')
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./build/js'))
})

//压缩图片
gulp.task('image',function () {
    gulp.src('src/images/**.*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
})
//压缩html文件
gulp.task('htmls',function () {
    gulp.src('src/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./build'))
})