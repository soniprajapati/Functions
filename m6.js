function multiplesOfNumbers(limit){
    var i=0;
    var sum=0;
    while (i<=limit){
        if (i%3==0 || i%5==0){
            sum=sum+i;
        }
        i++
    }
    console.log("sum:",sum);
}
multiplesOfNumbers(10)