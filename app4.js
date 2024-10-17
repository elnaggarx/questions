//for finding the greatest number
array = [1,2,3,10,100 , 5];

function theGreatest(array){
    var greater=-1000000000;
    for(var i=0;i<array.length;i++){
        if(array[i]>greater){
            greater=array[i];
        }
    }
    return greater;
}
console.log(theGreatest(array));