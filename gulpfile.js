const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer');
// Imagenes
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
//cache bust
const cacheBust = require('gulp-cache-bust');
//pug
const pug = require('gulp-pug'); 
//js
const babel = require('gulp-babel');
const minify = require('gulp-babel-minify');
//svg
const svgmin = require('gulp-svgmin');

function babelJS() {
    return src('src/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(minify({
            mangle: {
                keepClassName: true
            }
        }))
        .pipe(dest('build/js'))
}

function views() {
    return src('src/views/**/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(cacheBust({
            type: 'timestamp'
        }))
        .pipe(dest('build/'))
}

function css() {
    return src('src/scss/app.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(postcss(
            [autoprefixer()]
        ))
        .pipe(dest('build/css'))
}

function versionWebp() {
    return src('src/img/**/*.{png,jpg,jpeg}')
        .pipe(imagemin({
            optimizationLevel: 3
        }))
        .pipe(webp())
        .pipe(dest('build/img'))
}

function svgMinify() {
    return src('src/img/**/*.svg')
        .pipe(svgmin())
        .pipe(dest('build/img'))
    
}

function dev() {
    watch('src/scss/**/*.scss', css);
    watch('src/views/**/*.pug', views);
    watch('src/js/**/*.js', babelJS);
}

exports.versionWebp = versionWebp;
exports.versionSVG = svgMinify;
exports.default = series( views, babelJS, css, dev );