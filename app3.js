//filtering even numbers only
var array = [1,2,3,4,5,6,8,9,10];
function evenOnly(array){
    return array.filter((i)=>i%2==0)
}

console.log(evenOnly(array));