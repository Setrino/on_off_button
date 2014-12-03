function setBack(){
    var buttons = document.getElementsByClassName('submit_b');
    for(var b in buttons){
        buttons[b].style.background = "url('images/off.png')";
    }
}

function changeImage(event){
    var event = event || window.event;
    var elm = event.srcElement;
    var image = elm.style.background;
    if(image.match(/off.png/g)){
        elm.style.background = "url('images/on.png')";
    }else{
        elm.style.background = "url('images/off.png')";
    }
}