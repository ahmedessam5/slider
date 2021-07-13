

// var myimg = document.querySelectorAll(".card img");
// var mybox = document.querySelector(".boxcover");
// var myexit= document.getElementById("ex");
// var myboximg= document.querySelector(".boximg");
// var myleft= document.getElementById("le");
// var myright= document.getElementById("ri");

// var fun = (ev)=>{
//     var mybath=ev.target.src;
//     myboximg.style.backgroundImage="url("+mybath+")";
//     mybox.classList.add("boxshow");
// }

// myimg[0].addEventListener("click",fun);
// myimg[1].addEventListener("click",fun);
// myimg[2].addEventListener("click",fun);
// myimg[3].addEventListener("click",fun);
// myimg[4].addEventListener("click",fun);
// myimg[5].addEventListener("click",fun);

var imgs=[];
var imgindexof;

var myimg = document.querySelectorAll(".card img");
var mybox = document.querySelector(".boxcover");
var myexit= document.getElementById("ex");
var myboximg= document.querySelector(".boximg");
var myleft= document.getElementById("le");
var mynext= document.getElementById("next");

for(var i=0;i<myimg.length;i++){
    imgs.push(myimg[i]);
    myimg[i].addEventListener("click",function(ev){
        
       imgindexof =imgs.indexOf(ev.target);

        var mybath=ev.target.src;
        myboximg.style.backgroundImage="url("+mybath+")" ;
        mybox.classList.add("boxshow");
    })
}
myleft.addEventListener("click",function(){
    imgindexof--;
    if(imgindexof == -1){
        imgindexof=myimg.length-1;
    } 
    myboximg.style.backgroundImage="url("+myimg[imgindexof].src+")" ;
        mybox.classList.add("boxshow");
})
mynext.addEventListener("click",function(){

    imgindexof++;
    if(imgindexof == myimg.length)
    {imgindexof=0}
    myboximg.style.backgroundImage="url("+myimg[imgindexof].src+")" ;
        mybox.classList.add("boxshow");
})
myexit.addEventListener("click",function(){
    mybox.classList.remove("boxshow");
})

