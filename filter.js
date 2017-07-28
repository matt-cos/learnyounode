// FILTERED LS

var fs = require("fs");

var path = require("path");

var userExtension = "." + process.argv[3];

fs.readdir(process.argv[2], function doneReading(err, list){

	if( err ) {

		console.log( err );

	} else {

		for (i = 0; i < list.length ; i++) { 

			var fileExtensions = path.extname( list[i] );

			if ( userExtension == fileExtensions ) {

				console.log( list[i] );

			}
		}
	}

});