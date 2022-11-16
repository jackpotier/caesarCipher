function caesar(inString,shift){
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
    
    
    function hexToDecimal(unicodeHexArray) {
        unicodeDecimalArray = [];
        counter=0;
        while (counter < unicodeHexArray.length){
            unicodeDecimalArray.push(parseInt(unicodeHexArray[counter],16));
            counter+=1
        }
        console.log("Decimal array:",unicodeDecimalArray);
    }
    
    
    function decimalShift(unicodeDecimalArray) {
        updatedDecimalArray = []
        for (let i=0; i < unicodeDecimalArray.length; i++){
            //For capital letter wrapping
            if (unicodeDecimalArray[i]+shift>90 && unicodeDecimalArray[i]<=90 && unicodeDecimalArray[i]>=65){
                var wrapValue = 90-unicodeDecimalArray[i];
                updatedDecimalArray[i] = 65 + shift - wrapValue -1;
            }
            //For lowercase letter wrapping
            else if (unicodeDecimalArray[i]+shift>122 && unicodeDecimalArray[i]<=122 && unicodeDecimalArray[i]>=97){
                var wrapValue = 122-unicodeDecimalArray[i];
                updatedDecimalArray[i] = 97 + shift - wrapValue -1;
            }
            //For capital and lowercase encryption without wrapping
            else if ((unicodeDecimalArray[i]+shift<=90 && unicodeDecimalArray[i]>=65) || (unicodeDecimalArray[i]+shift<=122 && unicodeDecimalArray[i]>=97)){
                updatedDecimalArray[i] = unicodeDecimalArray[i] + shift;
            }
            //For spaces & punctuation
            else {
                updatedDecimalArray[i] = unicodeDecimalArray[i];
            }
        }
        console.log("Encrypted Decimal Array:",updatedDecimalArray);
    }

    function newDecimalToHex(updatedDecimalArray){
        updatedHexArray = [];
        for (let i =0; i <updatedDecimalArray.length; i++){
            updatedHexArray[i] = updatedDecimalArray[i].toString(16);
                while (updatedHexArray[i].length < 4) {
                    updatedHexArray[i] = '0' + updatedHexArray[i];
                }
                updatedHexArray[i] = "\\u" + updatedHexArray[i];
            }
        console.log("Encrypted Hex Array:",updatedHexArray);
    }
    
    
    function hex_to_string(updatedHexArray){
        outHex = updatedHexArray.join("");
        outString = unescape(outHex.replace(/\\/g, "%"));
        console.log("String Output:",outString);
    }

    toUnicodeHex(inString);
    hexToDecimal(unicodeHexArray);
    decimalShift(unicodeDecimalArray);
    newDecimalToHex(updatedDecimalArray);
    hex_to_string(updatedHexArray);
}


caesar('ABCD efgh', 1)
