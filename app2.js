//for removing dupicates from array
array = [1,2,2,3,4,5,5,6];
for(var i=0;i<array.length ; i++){
    for(var j=i+1;j<array.length;j++){
        if(array[i]===array[j]){
            array.splice(j,1)
        }
    }
}
console.log(array);