let btn=document.querySelector('.colorGen');
let randomNumRed=Math.floor((Math.random()*256));
let randomNumGreen=Math.floor((Math.random()*256));
let randomNumBlue=Math.floor((Math.random()*256));
let desc=document.querySelector('.colorDesc');


let generateColor=function(){
    document.body.style.backgroundColor=`rgb(${randomNumRed},${randomNumGreen},${randomNumBlue})`;
};

// generateColor()


btn.addEventListener("click",function(){
    generateColor();
    document.body.textContent=`rgb(${randomNumRed},${randomNumGreen},${randomNumBlue})`;
});

