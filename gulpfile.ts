/// <reference path="gulp-clean-css.d.ts" />
import gulp, {series, watch, src, dest} from "gulp";
import sass from "gulp-sass";
import tildeImport from "node-sass-tilde-importer";
import concat from "gulp-concat";
import cleanCss from "gulp-clean-css";
import webpack from "webpack";
// @ts-ignore
import webpackConfig from "./webpack.config";

export function compileSass() {
    return src('assets/scss/**/*.scss')
        .pipe(sass({
            importer: tildeImport
        }).on('error', sass.logError))
        .pipe(concat('all.css'))
        .pipe(cleanCss())
        .pipe(dest('public/css'));
}

export function watchSass() {
    watch('assets/scss/**/*.scss', compileSass);
}

export function watchJs() {
    watch('assets/js/**/*.ts', runWebpack);
}

export function runWebpack() {
    return new Promise((resolve, reject) => {
        webpack(webpackConfig, ((err, stats) => {
            if(err)
                return reject(err);
            if(stats.hasErrors())
                return reject(new Error(stats.compilation.errors.join('\n')));
            resolve();
        }));
    });
}

export const watchAll = series(watchSass);
