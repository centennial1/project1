$(function() {
    $('#dg-container').gallery();
});

//Remove image from list
var favImages = document.getElementById('fav-images');
favImages.onclick = function(evt) {
    var removeLink = document.getElementById('remove-link');
    if(!evt.target.parentNode.contains(removeLink)){
        a = document.createElement('a');
        a.textContent = "Remove image from list";
        a.setAttribute("style", "cursor: pointer");
        a.setAttribute("id", "remove-link");
        evt.target.parentNode.append(a);
        console.log(evt.target.parentNode);
    } else {
        evt.target.parentNode.remove();
        alert("The image is removed from your list.")
    }
}

function openWindow(imagePath){

    //Create new window
    var newWindow = window.open("", "newWindow", "width=1000, height=850");
    newWindow.document.write(`<img src="${imagePath}" width=100%>`)

    //Add CSS to  new window
    var cssLink = document.createElement('link');
    cssLink.href = './assets/window.css';
    cssLink.rel = 'stylesheet'

    //Add JS to new Window
    var script = document.createElement('script');
    script.src = './assets/js/index.js';

    //Create container
    div = document.createElement('div');

    //Close btn
    aClose = document.createElement('a');
    aClose.textContent = "Close Window";
    aClose.setAttribute("onclick", "closeWindow()");
    aClose.setAttribute("style", "cursor: pointer");

    //Add fav btn
    aFav = document.createElement('a');
    aFav.textContent = "Add to Favorites";
    aFav.setAttribute("onclick", `addFavorite("${imagePath}")`);
    aFav.setAttribute("style", "cursor: pointer");

    //Append
    div.append(aClose);
    div.append(aFav);
    newWindow.document.body.append(div);
    newWindow.document.body.append(script);
    newWindow.document.head.append(cssLink);


}

function closeWindow(){
    window.close();
}

function addFavorite(filePath){
    //Create new img
    a = document.createElement('a');
    img = document.createElement('img');
    img.src = filePath;
    a.setAttribute("style", "cursor: pointer");

    //Get the number of image in favourite list
    numberImage = window.opener.document.getElementById('fav-images').childElementCount;

    if(numberImage < 6){
        a.append(img);
        window.opener.document.getElementById('fav-images').append(a);
    } else {
        alert("There are 5 images in your favourite list. Please remove one from the list to add this image.")
    }
}
