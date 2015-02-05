function loadscript(name) {
  var s = document.createElement('script');
  s.src = chrome.extension.getURL(name);
  s.onload = function() {
      this.parentNode.removeChild(this);
  };
  (document.head||document.documentElement).appendChild(s);
}


loadscript('clientside.js')