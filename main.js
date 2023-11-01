let n=parseInt(prompt("Enter the number"));

for(let i=1;i<=n;i++){
    for(let j=2;j<=i;j++){
        document.write("&nbsp&nbsp");
    }
    for(let k=n;k>=i;k--){
        document.write("*&nbsp&nbsp")
    }
    document.write("<br>");
}