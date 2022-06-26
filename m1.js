function addNumbers(num1,num2){
    var a=0;
while (a < num1.length){
    var b=0;
    while (b < num2.length){
        if (num1[a]%2===0 && num2[b]%2===0){
            console.log("Dono even hai.")
        }
        else if (num1[a]%2!==0 && num2[b]%2!==0){
            console.log("Dono odd hai.")
        }
        else{
            console.log("ek even hai ek odd hai")
        }b++
    }a++
    break
}
}
addNumbers( [2, 6, 18, 10, 3, 75], [6, 19, 24, 12, 3, 87] )
