document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', summarizeThis, false);
}, false);

document.addEventListener('DOMContentLoaded', function() {
  var checkUrlButton = document.getElementById('checkUrl');
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
    f.submit();
  });
}

//Summarize current page
function summarizeThis() {

  chrome.tabs.getSelected(null, function(tab) {
    d = document;

    var f = d.createElement('form');
    f.action = 'http://textsummarization.net/text-summarizer';
    f.method = 'post';
    var i = d.getElementById('url');
    console.log(i);
    i.type = 'hidden';
    i.value = tab.url;
    f.appendChild(i);
    f.submit();
  });
// for(var i=0; i<500; i++)
// {
//   console.log(document.readyState);
// }   
} 