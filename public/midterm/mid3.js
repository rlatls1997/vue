let a1 = []

function copy(a, b){
    for(let i=0; i<b.length; i++){
        let tmp = []
        tmp[0] = b[i][0]
        tmp[1] = b[i][1]
        a[i] = tmp
    }
}
for(let i = 0; i<3; i++){
    a1[i] = [i*2, i*2+1];
}
let a2 = []
copy(a2,a1);
a1[0][0] = 100;
console.log(a1)
console.log(a2)
