var img = [];
for (var i = 1 ; i < 4 ; i++) {
    img[i] = new Image();
    img[i].style.width = "300px"
    img[i].src = "img/" +i+ ".png";
    img[i].style.width = "400px"
}

setInterval(next,2000);

var index = 1;
function next(){
    index ++;
    if(index >= img.length){
        index = 1;
    }
    var anh = document.getElementById("anh");
    anh.src = img[index].src;
    min.innerHTML = index;
}

function prev(){
    index --;
    if (index < 1){
        index = img.length -1;
    }
    var anh = document.getElementById("anh");
    anh.src = img[index].src;
    min.innerHTML = index;    
}