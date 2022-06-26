// function calling other function

function calcfruit(fruit){
    return fruit*4
}

function fruit_procceser(apple,orange){
    const apple_p=calcfruit(apple);
    const orange_p=calcfruit(orange);

    console.log("juice with",apple_p,"picecs of apple and juice with",orange_p,"picecs of orange.")
}

fruit_procceser(2,3);