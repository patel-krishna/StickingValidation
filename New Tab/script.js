

//Send Message To Background
chrome.runtime.sendMessage({name: "fetch"}, (response) => {
    //Wait for Response
  
    console.log(response);


    //Update Display on Content Script
    document.querySelector('h2').innerHTML=response.title;
    document.querySelector('p').innerHTML=response.text;
    document.getElementById('sticker').src=response.stickers;
  
  });