import { src, dest, watch, series } from 'gulp'

import * as dartSass from 'sass' 

import gulpSass from 'gulp-sass'

// export function helloWorld (done) { //Exporting and creating the function 'Hello World', the 'done' parameter will be usefull later.
//     console.log('Hello World from Gulp'); //Printing hello world.
//     done(); //Like a return 0 in C, this makes sure that the program does not go on infinetly.
// }

const sass = gulpSass(dartSass);

export function js ( done ){

    src( 'src/js/app.js' ).pipe( dest( 'build/js' ) )

    done()
}

export function css( done ) {

    src( 'src/scss/app.scss', {sourcemaps: true} )
    .pipe( sass().on('error', sass.logError)).pipe( dest( 'dist/css', {sourcemaps: true} ) )


    done()
}

export function dev() {
    watch( 'src/scss/**/*.scss', css)
    watch( 'src/js/**/*.js', js)
}

export default series( js, css, dev )