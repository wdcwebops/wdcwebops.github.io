


var utag_data = {"analyticsTrackingID":"","eventName":"PAGE_LOAD",
"pageLocale":"en-US"};
loadTiQHeader('//tags.tiqcdn.com/utag/wd/westerndigital/qa/utag.sync.js');


function loadTiQHeader(url) {
   var script = document.createElement('script');
   script.src = url;
   var head = document.getElementsByTagName("head")[0];
   head.appendChild(script);
}
