//This is for reversing string
var text  = "Mohamed Amr";
var textArray = text.split("");
length = textArray.length;
var temp;
for(var i =0; i< length / 2; i++){
    temp = textArray[i ];
    textArray[i] = textArray[length - i - 1];
    textArray[length - i - 1] = temp;
}
text = textArray.join("");
console.log(text);
