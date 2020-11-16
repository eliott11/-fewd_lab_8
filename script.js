var Planets = ["Mercure","Venus","Earth","Mars","Jupiter"];

let n = 0;

while (n < 5) {
    console.log(Planets[n]);        //print planet
    n++;                            //n=n+1
}


var a = 5, b = "Hello ", c = "World!", d = 10;

console.log(a + b, b + c, a + d);   

var a = 5, b = 10, c = "5";
var x = a;

console.log(typeof a, typeof c);    //display the variable type
console.log(a == c, a === c, a == x, a != b, a > b, a < b, a >= b, a <= b, a >= c, a <= c);
// display if the comparison is true or false (boolean)

var hello = function() {
    return 'Hello world!';
};

var result = hello();
console.log(result); //display Hello world!

// 9. The variable x is equals to 'Hi!'