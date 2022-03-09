
var a = 5;

function varScope() {
    var a = 5;
    var a = 6;
    console.log("inside function it self", a)
    {
        // var a = 5
        console.log("inside blk", a)
    }
}