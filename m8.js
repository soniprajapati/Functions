function equal(name1,name2){
    var sum=name1.length;
    var sum2=name2.length;
    
    if (sum>sum2){
        console.log(name1);
    }
    else if (sum<sum2){
        console.log(name2);
    }
    else{
        console.log("both are same")
    }
}
equal("soni","manpreet")