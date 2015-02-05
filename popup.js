//alert("popup.js is running")
//var uetq = uetq || [];

// var timeOut = 1;
// var counter = 0;
//|| (counter > timeOut))
function checkUETLoad() {
  //alert("checkUETLOad was called")
  //counter ++;
  if (uetq.domain === "bat.bing.com" && uetq)  {
    //alert(uetq);
    //alert("checking if uetq exists with bat.bing.com");
     // clearInterval(handle);
     return true
     //renderStatus(true);
  }
  return false;
}

function renderStatus(statusText) {
  alert("renderStatus is called")
  document.getElementById("status").textContent = statusText;
}

//DOMContentLoaded fires when 
//html is rendered, does not wait for JS or css
document.addEventListener('DOMContentLoaded',function() {
  //alert("DomContentLoaded")
if(checkUETLoad()) {
    //alert("calling render status true from DOM")
    renderStatus('Boom! Your UET tag is working properly')

} 
else {
  //alert("calling render status false from DOM")
    renderStatus('Bummer... your UET tag is not working correctly')

}
});


//var handle = setInterval(checkUETLoad, 0);

// var script = document.createElement("script");
// script.src = chrome.extension.getURL("popup.js");
// document.documentElement.appendChild(script);
