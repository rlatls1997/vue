let arr = []

function f(a,b){
    if(b%2 == 0)
        return a+1;
    else
        return a;
}
for(let i = 0; i<100; i++){
    arr[i] = Math.floor(Math.random()*100+1);
}

console.log(arr.reduce(f,0));