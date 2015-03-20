System.registerModule("../dev/my-generator.js", [], function() {
  "use strict";
  var __moduleName = "../dev/my-generator.js";
  var WholeSquareGenerator = $traceurRuntime.initGeneratorFunction(function $__0(number) {
    var a,
        b,
        $__1,
        $__2;
    return $traceurRuntime.createGeneratorInstance(function($ctx) {
      while (true)
        switch ($ctx.state) {
          case 0:
            $ctx.state = 2;
            return number;
          case 2:
            $__1 = $ctx.sent;
            $ctx.state = 4;
            break;
          case 4:
            a = 1 * $__1;
            $ctx.state = 10;
            break;
          case 10:
            $ctx.state = 6;
            return number;
          case 6:
            $__2 = $ctx.sent;
            $ctx.state = 8;
            break;
          case 8:
            b = $__2;
            $ctx.state = 12;
            break;
          case 12:
            $ctx.returnValue = (Math.pow(a, 2) + Math.pow(b, 2) + 2 * a * b);
            $ctx.state = -2;
            break;
          default:
            return $ctx.end();
        }
    }, $__0, this);
  });
  var squareGenerator = WholeSquareGenerator(1),
      messageElement = document.getElementById("message"),
      yieldResult1 = squareGenerator.next(),
      yieldResult2 = squareGenerator.next(2),
      result = squareGenerator.next(3);
  console.log("Last result return: ", result);
  var h1Element = document.createElement('h1');
  h1Element.innerText = result.value;
  messageElement.appendChild(h1Element);
  return {};
});
System.get("../dev/my-generator.js" + '');
