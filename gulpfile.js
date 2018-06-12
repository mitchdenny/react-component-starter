var gulp = require('gulp');
var exec = require('child_process').exec;
var minimist = require('minimist');
var semver = require('semver');
var fs = require('fs');
var glob = require('glob');

// Default version data. Should be replaced as soon as the get-version task runs.
var version = "0.0.1";

var args = minimist(process.argv);

gulp.task('get-version', function (callback) {
    if (args.overrideversion && semver.valid(args.overrideversion)) {
        console.log("Using override to get version numbers.");
        version = args.overrideversion;
        console.log(version);
        callback();
    }
    else {
        console.log("Using default version 0.0.1");
        callback();
    }
});

gulp.task('stamp-package', ['get-version'], function (callback) {
    var packageContents = fs.readFileSync('package.json', 'utf8');
	var package = JSON.parse(packageContents);

	package.version = version;

	packageContents = JSON.stringify(package, null, '\t');
	fs.writeFileSync('package.json', packageContents);
    
    callback();
});

gulp.task('stamp', ['stamp-package'], function(callback) {
    callback();
});

gulp.task('build', ['stamp'], function(callback) {
    exec('node_modules/.bin/nwb build-react-component', function (err, stdout, stderr) {
        if (err) {
            console.log(stderr);
            callback(err);
        } else {
            console.log(stdout);
            callback();            
        }
    });
});

gulp.task('test', ['build'], function(callback) {
    exec('node_modules/.bin/nwb test-react', function (err, stdout, stderr) {
        if (err) {
            console.log(stderr);
            callback(err);
        } else {
            console.log(stdout);
            callback();            
        }
    });
});

gulp.task('default', ['test']);