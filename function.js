
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


function letScope() {
    // let a = 4;
    // console.log("inside fun", a)

    {
        const a = 4;
        //const a = 5;
        console.log("inside blk", a)
    }

    // console.log("inside function it self", a)

}
// console.log("outside function it self", a)

letScope();

// console.log("out side of function", a)

varScope()

var x = () => {
    console.log("hello")
}
x()