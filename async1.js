//calcualting execution time:
let start = process.hrtime();

function add(getX,getY,cb) {
    var x, y;
    getX( function(xVal){                
        x = xVal;
        if (y != undefined){
            cb( x + y );
        }
    } );
    getY( function(yVal){
    y = yVal;
    if (x != undefined){
    cb( x + y );
    }
    });
}
 // fetchX()` and `fetchY()` are  async functions
fetchX = function(callback){
    setTimeout(function(){
        callback(2);
    },2000);
}
fetchY = function(callback){
    setTimeout(function(){
        callback(7);
    },2500);
}
add( fetchX, fetchY, function(sum){
    console.log( sum ); // that was easy, huh?
    let end = process.hrtime(start);
    console.log("Execution time: %d s %d ms",end[0],end[1]/1000000);
} );
