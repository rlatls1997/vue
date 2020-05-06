let a1 = []

function copy(a, b){
    for(let i in b){
        a[i] = b[i]
    }
}
for(let i = 0; i<3; i++){
    a1[i] = [i, i+1];
}
let a2 = []
copy(a2,a1);
a1[0][0] = 10;
console.log(a2)
