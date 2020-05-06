let a = [ "hello.html", "world.js", "readme.txt" ];

function getExtension(fileName){
    let start = fileName.indexOf(".")
    console.log(fileName.substring(start,fileName.length))
}

for(let i = 0; i<a.length; i++){
    getExtension(a[i])
}