var getModule = require('./filter');

// console.log(getModule.test);

//	// FILTERED LS

	// var fs = require("fs");

	// var path = require("path");

	// var userExtension = "." + process.argv[3];

	// fs.readdir(process.argv[2], function doneReading(err, list){

	// 	if( err ) {

	// 		console.log( err );

	// 	} else {

	// 		for (i = 0; i < list.length ; i++) { 

	// 			var fileExtensions = path.extname( list[i] );

	// 			if ( userExtension == fileExtensions ) {

	// 				console.log( list[i] );

	// 			}
	// 		}
	// 	}

	// });


//	// MY FIRST ASYNC I/O

	// var fs = require("fs");

	// fs.readFile(process.argv[2], function doneReading(err, data){
		
	// 	if( !err ) {
	// 		console.log( data.toString().split( "\n" ).length - 1 );
	// 	} else {
	// 		console.log( err );
	// 	}

	// });

// var str = buf.toString();

// var arr = str.split( "\n" );

// console.log( arr.length - 1 );



//	// MY FIRST I/O

	// var fs = require("fs");

	// var buf = fs.readFileSync(process.argv[2]);

	// var str = buf.toString();

	// var arr = str.split( "\n" );

	// console.log( arr.length - 1 );



//	// BABY STEPS

	// var total = 0;

	// for (i = 2; i < process.argv.length ; i++) { 

	// 	total += parseInt(process.argv[i]);

	// }

	// console.log( total );