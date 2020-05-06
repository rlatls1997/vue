let a = [ "hello.html", "world.js", "readme.txt" ];

function getExtension(fileName){
    let start = fileName.indexOf(".")
    return fileName.substring(start,fileName.length)
}

for(let i = 0; i<a.length; i++){
   
    console.log(getExtension(a[i]))
}