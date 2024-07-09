var  bulb = 0;

function findbulb() {
    if(bulb==0)
    {
    document.getElementById("img").src="bulb on.jpeg";
    bulb=1;
    }

    else{
    document.getElementById("img").src= "bulub off.jpg";
    bulb=0;
    }
}