var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var browserSync = require("browser-sync").create();
var concat = require("gulp-concat");
var babel = require("gulp-babel");
var imagemin = require("gulp-imagemin");

gulp.task(
  "default",
  ["copy-html", "copy-images", "styles", "scripts"],
  function() {
    gulp.watch("./src/sass/**/*.scss", ["styles"]);
    gulp.watch("./src/js/**/*.js", ["scripts"]);
    gulp.watch("./dist/js/**/*.js").on("change", browserSync.reload);
    gulp.watch("./src/index.html", ["copy-html"]);
    gulp.watch("./dist/index.html").on("change", browserSync.reload);
    gulp.watch("./src/tpl/**/*.html", ["copy-html"]);
    gulp.watch("./dist/tpl/**/*.html").on("change", browserSync.reload);

    browserSync.init({
      server: "./dist"
    });
  }
);

gulp.task("scripts", function() {
  gulp
    .src("./src/js/**/*.js")
    .pipe(babel())
    .pipe(concat("main.bundle.js"))
    .pipe(gulp.dest("./dist/js"));
});

gulp.task("copy-html", function() {
  gulp.src("./src/tpl/**/*.html").pipe(gulp.dest("./dist/tpl"));
  gulp.src("./src/index.html").pipe(gulp.dest("./dist"));
});

gulp.task("copy-images", function() {
  gulp
    .src("./src/img/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/img"));
});

gulp.task("styles", function() {
  gulp
    .src("./src/sass/**/*.scss")
    .pipe(
      sass({
        outputStyle: "compressed"
      }).on("error", sass.logError)
    )
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"]
      })
    )
    .pipe(gulp.dest("./dist/css"))
    .pipe(browserSync.stream());
});
