let inString = prompt("Enter a message you wan to encrypt");
let shift = prompt("How many letters across do you want to shift?");
shift = Number(shift);

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

function decimalShift(unicodeDecimalArray) {
    updatedDecimalArray = [];
    counter2 = 0;
    while (counter2 < unicodeDecimalArray.length) {
        if (unicodeDecimalArray[counter2] >= 65 && unicodeDecimalArray[counter2] < 90){
            updatedDecimalArray[counter2] = unicodeDecimalArray[counter2]+shift;
        }
        if (unicodeDecimalArray[counter2] >= 97 && unicodeDecimalArray[counter2] < 112){
            updatedDecimalArray[counter2] = unicodeDecimalArray[counter2]+shift;
        }
        counter2+=1
    }
    console.log("Encrypted Decimal Array:",updatedDecimalArray);
}
decimalShift(unicodeDecimalArray)