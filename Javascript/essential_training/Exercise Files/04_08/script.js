// const MYCONSTANT = 5;
// console.log(MYCONSTANT);
// MYCONSTANT = 6;

function logScope() {
    let localVar = 2;

    if(localVar) {
        let localVar = "I'm different";
        console.log("nested localVar: ", localVar);
    }
    console.log("logScope localVar: ", localVar);
}

logScope();