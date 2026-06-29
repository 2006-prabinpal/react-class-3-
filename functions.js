// Function Declaration
function sum(a, b) {
    return a + b;
}

console.log(sum(2, 3)); 


// Function Expression
const fun2 = function (a, b) {
    return a + b;
};

console.log(fun2(4, 6)); 



(function () {
    console.log("life", 6 + 7);
    return 6 + 7;
})();
