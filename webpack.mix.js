const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/app.js', 'public/js');

mix.styles([
    'resources/css/layouts/header.css',
    'resources/css/layouts/main.css',
    'resources/css/layouts/aside.css',
    'resources/css/layouts/footer.css',
], 'public/css/all.css');
