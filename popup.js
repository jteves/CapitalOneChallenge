document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', summarizeThis, false);
}, false);

document.addEventListener('DOMContentLoaded', function() {
  var checkUrlButton = document.getElementById('checkUrl');
  // console.log("URL Tester: " + document.getElementById('url').value);
  checkUrlButton.addEventListener('click', summarizeURL, false);
}, false);

//Summarize input URL
function summarizeURL(){
  chrome.tabs.getSelected(null, function(tab) {
    d = document;

    var f = d.createElement('form');
    f.action = 'http://textsummarization.net/text-summarizer';
    f.method = 'post';
    var i = d.createElement('input');
    i.type = 'hidden';
    i.name = 'url';
    i.value = d.getElementById('url').value;
    f.appendChild(i);
    d.body.appendChild(f);
    f.submit();
  });
}

//Summarize current page
function summarizeThis() {

  chrome.tabs.getSelected(null, function(tab) {
    d = document;
// var xhr = new XMLHttpRequest();
// xhr.open("GET", "http://textsummarization.net/text-summarizer", false);
// xhr.send();
// console.log(xhr.status);
    var f = d.createElement('form');
    f.action = 'http://textsummarization.net/text-summarizer';
    f.method = 'post';
    var i = d.createElement('input');
    i.type = 'hidden';
    i.name = 'url';
    i.value = tab.url;
    f.appendChild(i);
    d.body.appendChild(f);
    if (f.onsubmit())  f.submit();

  });
}