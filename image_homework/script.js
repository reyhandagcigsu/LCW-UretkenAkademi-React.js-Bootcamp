const imgGallery = document.querySelector('.container');  
const imgURL ="https://source.unsplash.com/random/300*300";  
const rows = 5;                                                   
for (let i = 0; i < rows * 3;i++){         // 3 image for each row
    const img = document.createElement('img');  // variable caled img described as bloke scope
    img.src= `${imgURL}${getRandomSize()}`;   // getting image from the source of the desired sze. 
    imgGallery.appendChild(img);            //adding img to the gallery using appendChild method.
}


function getRandomSize(){
    return `${getRandomNum()}x${getRandomNum()}`;    //having the matrix of the images.
  
}

 
function getRandomNum(){
return Math.floor(Math.random() * 5);   //used math random function and render number between 1 and 5
 
}
