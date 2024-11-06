/*  1. click a button and show the content with 60px fontSize and bgColor red and bordeRadius 50% */

var ss = document.getElementsByClassName("h1tag")[0]
var cc= ss.textContent = "Iam your Laptop"
var rr = document.getElementById("btn")
rr.onclick = function tt() {
    ss.style.backgroundColor ="black"
    ss.style.color = "white"
    ss.style.borderRadius = "30px"
    ss.style.padding = "20px"
    ss.style.margin = "30px"
    ss.textContent = "Welcome !, Ram"
    image.innerHTML=`How can i help you ?`
    image1.innerHTML=`<img src="" />`
    image2.innerHTML=`<img src="" />`
    image.style.color="orange"
    image.style.display="block"
    image1.style.display="block"
    image2.style.display="block"
}


/*2. click the button and display three images on clicking the button ft img should be of border radius 30px ,
second img should be border radius 100px , third img should be of borderradius 50%
*/
var image= document.getElementsByClassName("ptag")[0]
var image1=document.getElementsByClassName("p1tag")[0]
var image2=document.getElementsByClassName("p2tag")[0]
var yy=document.getElementById("btn1")
yy.onclick=function aa(){
    ss.textContent="Its an Image.......!"
    ss.style.backgroundColor="blue"
    ss.style.borderRadius="30px"
    ss.style.padding = "20px"
    ss.style.margin = "30px"
    ss.style.color="white"
    image.innerHTML=`<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF32V4p_7Pzslf8BxTahhErkfk-TGJN8nZvQ&s" 
    style=border-radius:30px />`
    image1.innerHTML=`<img src="https://gratisography.com/wp-content/uploads/2024/01/gratisography-covered-in-confetti-800x525.jpg" width="400px" 
    style=border-radius:100px />`
    image2.innerHTML=`<img src="https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1.jpeg " width
    ="300px" style=border-radius:50% />`
    image.style.display="inline"
    image1.style.display="inline"
    image2.style.display="inline"
}
