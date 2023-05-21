// Your code goes here

document.addEventListener("DOMContentLoaded", function(){
    //console.log("The DOM has loaded");
    let newText = document.createElement('p');
    //console.log(newText);
    newText.textContent = 'This is really cool!';
    document.querySelector('#text').remove();
    document.querySelector('body').appendChild(newText);
})

//console.log("The DOM hasn't loaded")