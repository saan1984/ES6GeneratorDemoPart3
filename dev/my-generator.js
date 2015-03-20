var WholeSquareGenerator = function*(number){
   var a= 1 * (yield number),
       b= yield number;
    return (Math.pow(a,2)+Math.pow(b,2)+2*a*b);
};

// a=2, b=3 => a+b = 5 => result = 25
var squareGenerator = WholeSquareGenerator(1),
    messageElement = document.getElementById("message"),
    yieldResult1 = squareGenerator.next(),
    yieldResult2 = squareGenerator.next(2),
    result = squareGenerator.next(3);

console.log("Last result return: ",result);

var h1Element = document.createElement('h1');
h1Element.innerText = result.value;
messageElement.appendChild(h1Element);