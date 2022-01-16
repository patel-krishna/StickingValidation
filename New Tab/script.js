

//Send Message To Background
chrome.runtime.sendMessage({name: "fetch"}, (response) => {
    //Wait for Response
  
    console.log(response);


    //Update Display on Content Script
    document.querySelector('h2').innerHTML=response.title;
    document.querySelector('p').innerHTML=response.text;
    document.getElementById('sticker').src=response.stickers;
    document.getElementById('graphic').src=response.images;
    //these don't work
    //document.body.style.backgroundColor=response.colours;
    //document.body.style.background=response.colours;
    //this on works
    //document.body.style.backgroundColor="#d6c6f5";
    document.body.style.backgroundColor=response.colours;
  
  });