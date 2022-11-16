function caesar(inString,shift){

    //Converting the characters in the input into their unicode hex values
    function toUnicodeHex(inString) {
        console.log("Input:",inString);
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
    

    //Converting the unicode hex values into decimal to do operations on
    function hexToDecimal(unicodeHexArray) {
        unicodeDecimalArray = [];
        counter=0;
        while (counter < unicodeHexArray.length){
            unicodeDecimalArray.push(parseInt(unicodeHexArray[counter],16));
            counter+=1
        }
        console.log("Decimal Array:",unicodeDecimalArray);
    }
    
    
    //Encrypting the decimal unicode values of the original input
    function decimalShift(unicodeDecimalArray) {
        updatedDecimalArray = []
        //Encryption code for positive values of shifting (to the right)
        if (shift>=0){
            for (let i=0; i < unicodeDecimalArray.length; i++){
                //For capital letter wrapping and encryption
                if (unicodeDecimalArray[i]+shift>90 && unicodeDecimalArray[i]<=90 && unicodeDecimalArray[i]>=65){
                    var wrapValue = 90-unicodeDecimalArray[i];
                    updatedDecimalArray[i] = 65 + shift - wrapValue -1;
                }
                //Lowercase letter wrapping and encryption
                else if (unicodeDecimalArray[i]+shift>122 && unicodeDecimalArray[i]<=122 && unicodeDecimalArray[i]>=97){
                    var wrapValue = 122-unicodeDecimalArray[i];
                    updatedDecimalArray[i] = 97 + shift - wrapValue -1;
                }
                //Capital and lowercase encryption without wrapping
                else if ((unicodeDecimalArray[i]+shift<=90 && unicodeDecimalArray[i]>=65) || (unicodeDecimalArray[i]+shift<=122 && unicodeDecimalArray[i]>=97)){
                    updatedDecimalArray[i] = unicodeDecimalArray[i] + shift;
                }
                //Keep all non-alphabet characters the same
                else {
                    updatedDecimalArray[i] = unicodeDecimalArray[i];
                }
            }
        }
        else if (shift<0){
            for (let i=0; i < unicodeDecimalArray.length; i++)
            {
                //Capital letter wrapping in the opposite direction
                if (unicodeDecimalArray[i]+shift<65 && unicodeDecimalArray[i]<=90 && unicodeDecimalArray[i]>=65){
                    var wrapValue = unicodeDecimalArray[i]-65;
                    updatedDecimalArray[i] = 90 + shift + wrapValue +1;
                }
                //Lowercase letter wrapping in the opposite direction
                else if (unicodeDecimalArray[i]+shift<97 && unicodeDecimalArray[i]<=122 && unicodeDecimalArray[i]>=97){
                    var wrapValue = unicodeDecimalArray[i]-97;
                    updatedDecimalArray[i] = 122 + shift + wrapValue +1;
                }
                //Capital and lowercase encryption to the left without wrapping
                else if ((unicodeDecimalArray[i]+shift>=65 && unicodeDecimalArray[i]<=90) || (unicodeDecimalArray[i]+shift>=97 && unicodeDecimalArray[i]<=122)){
                    updatedDecimalArray[i] = unicodeDecimalArray[i] + shift;
                }
                //Keep all non-alphabet characters the same
                else {
                    updatedDecimalArray[i] = unicodeDecimalArray[i];
                }
            }
        }
        
        console.log("Encrypted Decimal Array:",updatedDecimalArray);
    }


    //Converting the encrypted decimal values back into hex
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
    
    
    //Reforming and displaying the original string as an encrypted output
    function hex_to_string(updatedHexArray){
        outHex = updatedHexArray.join("");
        outString = unescape(outHex.replace(/\\/g, "%"));
        console.log("Output:",outString);
    }


    //Calling the subfunctions to run
    toUnicodeHex(inString);
    hexToDecimal(unicodeHexArray);
    decimalShift(unicodeDecimalArray);
    newDecimalToHex(updatedDecimalArray);
    hex_to_string(updatedHexArray);
}


//Calling the Caesar Cipher with 'input' and 'shift' values
caesar('This is an example of the Caesar Cipher', -3);