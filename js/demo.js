window.onscroll=function(){
    var t =document.documentElement.scrollTop||document.body.scrollTop; //变量t就是滚动条滚动时，到顶部的距离

    var img = document.getElementById('target');

    

    var imgRight = img.offsetTop;

    
    
    
   /* if(t >= videoT){
        document.getElementById('er').classList.remove("do");
    }
    if(t < videoT){
        document.getElementById('er').classList.add("do");
    } */
    if( t >= imgRight){
        document.getElementById('no').classList.remove("yes");
    }if(t < imgRight){
        document.getElementById('no').classList.add("yes");
    }
    }