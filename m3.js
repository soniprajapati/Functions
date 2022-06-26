function perfect(num){
    var i=1;
    var sum=0;
    while (i<num){
        if (num%i==0){
            sum=sum+i;
        }
        i++
    }
    if (sum===num){
        console.log(num,"is a perfect number")
    }
    else{
        console.log(num,"is not a perfect number")
    }
}
perfect(8)