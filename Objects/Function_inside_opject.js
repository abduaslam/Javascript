let mahama={
    vilages:18,
    refugee:65,
    market:function(price){
        return price*10;
    }
}

console.log(mahama.market(20));
mahama.market=function greetings(){
    return "hello";
}
console.log(mahama)