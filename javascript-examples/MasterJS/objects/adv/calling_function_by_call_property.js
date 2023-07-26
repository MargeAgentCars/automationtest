/*
Calling a Function by fun.call()
*/


let account = {
    name:"Ganesh",
    number:1234,
    amount:100,
    addAmt:function(amt){
        this.amount += amt
    }
}

let accountMananger = {
    name:"Tom",
    managingAccountFor:account.name,
    addAmt:account.addAmt
}

accountMananger.addAmt.call(account,500)

console.log(account)
console.log(accountMananger)