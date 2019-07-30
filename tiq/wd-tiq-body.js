

loadTiQBody('//tags.tiqcdn.com/utag/wd/westerndigital/qa/utag.js');

function loadTiQBody (url){
  var script = document.createElement('script');
  script.src = url;
  script.type = 'text/javascript';
  script.async = true;
  var location = document.getElementsByTagName("body");
  location.insertBefore(script, list.childNodes[0]);

}
