let inString = prompt("Enter a message you wan to encrypt");


function toUnicodeHex(inString) {
    console.log("String Input:",inString);
    unicodeHexArray = []
    for (var i=0; i < inString.length; i++) {
      var theUnicode = inString.charCodeAt(i).toString(16).toUpperCase();
      while (theUnicode.length < 4) {
        theUnicode = '0' + theUnicode;
      }
      unicodeHexArray.push(theUnicode);
    }
    console.log("Hex Array:",unicodeHexArray);
}
toUnicodeHex(inString)

function hexToDecimal(unicodeHexArray) {
    unicodeDecimalArray = [];
    counter=0;
    while (counter < unicodeHexArray.length){
        unicodeDecimalArray.push(parseInt(unicodeHexArray[counter],16));
        counter+=1
    }
    console.log("Decimal array:",unicodeDecimalArray);
}
hexToDecimal(unicodeHexArray)
