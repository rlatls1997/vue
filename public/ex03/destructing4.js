let a ,b;
[a,b] = [5,6];
console.log(a,b);

[a,b] = [b,a]; //구조분해문법, 두 값을 swap할 때 값을 임시저장할
                //변수를 생성할 필요가 없다
console.log(a,b);