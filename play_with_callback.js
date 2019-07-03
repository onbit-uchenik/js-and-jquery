//example of chaining of callbacks.....

let x  = 0;
let start = process.hrtime();
let getX = function(callback1,callback2){
    setTimeout(function(){
        x =2;
        callback1(callback2);
    },2000);
}

let updateX = function(callback){
    setTimeout(function(){
        x++;
        callback(x);
    },2000);
}

let printX = function(){
    let end = process.hrtime(start);
    console.log("The value of x is %d",x);
    console.log("Execution time is %d s %d ms",end[0],end[1]/1000000);
}

getX(updateX,printX);