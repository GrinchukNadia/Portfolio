const fileinclude  = require('gulp-file-include');

let project_folder ="dist";
let source_folder  ="#src";

let path = {
    build:{
        html: project_folder+ "/",
        css: project_folder+"/assets/css/",
        js: project_folder+"/assets/js/",
        img: project_folder+"/assets/img/",
        fonts: project_folder+"/assets/fonts/"
    },
    src:{
        html: [source_folder + "/*.html", "!" + source_folder + "/_*.html"],
        css: source_folder+"/assets/scss/style.scss",
        js: source_folder+"/assets/js/script.js",
        img: source_folder+"/assets/img/**/*.{jpg, png, svg,gif,ico,webp}",
        fonts: source_folder+"/assets/fonts/*.ttf"
    },
    watch:{
        html: source_folder+ "/**/*.html",
        css: source_folder+"/assets/scss/**/*.scss",
        js: source_folder+"/assets/js/**/*.js",
        img: source_folder+"/assets/img/**/*.{jpg,png,svg,gif,ico,webp}"
    },
    clean: "./" + project_folder + "/"
}

let {src, dest}  = require('gulp'),
    gulp         = require('gulp'),
    browsersync  = require("browser-sync").create(),
    del          = require("del"),
    scss         = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    group_media  = require("gulp-group-css-media-queries"),
    clean_css    = require("gulp-clean-css"),
    rename       = require("gulp-rename"),
    uglify       = require("gulp-uglify-es").default;

function browserSync(params){
    browsersync.init({
        server: {
            baseDir: "./" + project_folder + "/"
        },
        port: 3000,
        notify:false
    });
}

function html(){
    return src(path.src.html)
    .pipe(fileinclude())
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream())
}

function css(){
    return src(path.src.css)
    .pipe(scss({
            outputStyle: "expanded"
        })
    )
    .pipe(group_media())
    .pipe(autoprefixer({
            overrideBrowserslist: ["last 5 versions"],
            cascade: true
        })
    )
    .pipe(dest(path.build.css))
    .pipe(clean_css())
    .pipe(rename({
            extname: ".min.css"
        })
    )
    .pipe(dest(path.build.css))
    .pipe(browsersync.stream())
}

function js(){
    return src(path.src.js)
    .pipe(fileinclude())
    .pipe(dest(path.build.js))
    .pipe(uglify())
    .pipe(rename({
        extname: ".min.js"
    })
    )
    .pipe(dest(path.build.js))
    .pipe(browsersync.stream())
}

function watchFiles(params){
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
}

function clean(params){
    return del(path.clean);
}

let build = gulp.series(clean, gulp.parallel(js, css, html));
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.js      = js;
exports.css     = css;
exports.html    = html;
exports.build   = build;
exports.watch   = watch;
exports.default = watch;