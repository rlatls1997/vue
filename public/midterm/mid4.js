let arr = []
let num = 0;

function f(a,b){
    if(b%2 == 0)
        num++;
}
for(let i = 0; i<5; i++){
    arr[i] = Math.floor(Math.random()*100+1);
}
arr.reduce(f,0)

console.log(num);