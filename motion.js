let star= document.getElementById('star');
let moon= document.getElementById('moon');
let mountain= document.getElementById('mountain');
let mountaiin= document.getElementById('mountaiin');
let river= document.getElementById('river');
let boat= document.getElementById('boat');
let mountains7= document.getElementById('mountains7');
let main= document.getElementById('main');
//let star= document.getElementById('star');
window.onscroll=function(){
    let value=scrollY;
    star.style.left=value +'px';
    moon.style.top=value *4+'px';
    mountain.style.top=value*1.3+'px';
    mountaiin.style.top=value*1.1+'px';
    river.style.top=value+'px';
    boat.style.top=value+'px';
    boat.style.left=value *4+'px';
    main.style.fontSize=value+'px';
    if(scrollY>=100){
        main.style.fontSize=100+'px';
        main.style.position='fixed';
        if(scrollY>=622){
            main.style.position='none';
        }else{
            main.style.position='block';
        }
        if(scrollY>= 159){
            document.querySelector('.main').style.background='linear-gradient(rgb(29, 175, 211), rgb(17, 69, 82)';
        }
        else{
            document.querySelector('.main').style.background='linear-gradient(rgb(32, 23, 42),rgb(81, 43, 165)';
        
        }
    }

}