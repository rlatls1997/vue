let arr = []

for(let i = 0; i<100; i++){
    arr[i] = Math.floor(Math.random()*100+1);
}
console.log(arr)
for(let i = 0; i<100; i++){
    if(arr[i] % 10 > 5){
        arr.splice(i,1);
    }
}
console.log(arr)