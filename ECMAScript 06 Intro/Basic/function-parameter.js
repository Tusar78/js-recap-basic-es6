function defaultParameter(a, b) {
    // if (a == undefined) {
    //     a = 20;
    // } 
    
    // if (b == undefined){
    //     b = 10;      
    // }

    a = a || 10;
    b = b || 20;

    console.log(a+b);
}
defaultParameter();