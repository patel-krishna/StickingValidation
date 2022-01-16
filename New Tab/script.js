
document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('button');
    // onClick's logic below:
    link.addEventListener('click', function() {
            addSticker();
        });
    });


function addSticker() {
    
    let entries = []
    let sticker =  document.getElementById("sticker").src; 
 
  

  if(localStorage.getItem('saved-sticker')){
  	entries = JSON.parse(localStorage.getItem('saved-sticker')) 
    entries.push(sticker)
    localStorage.setItem('saved-sticker',JSON.stringify(entries))
   }else{
    entries.push(sticker)
    localStorage.setItem('saved-sticker',JSON.stringify([sticker]))
   }

}



//Send Message To Background
chrome.runtime.sendMessage({name: "fetch"}, (response) => {
    //Wait for Response
  
    console.log(response);


    //Update Display on Content Script
    document.querySelector('h2').innerHTML=response.title;
    document.querySelector('p').innerHTML=response.text;
    document.getElementById('sticker').src=response.stickers;
    document.getElementById('graphic').src=response.images;
  
  });

  