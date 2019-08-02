

window.utag_data = window.utag_data || {};

// call Tealium TiQ analytics
loadTiQBody('//tags.tiqcdn.com/utag/wd/westerndigital/qa/utag.js');
function loadTiQBody (url){
  var script = document.createElement('script');
  script.src = url;
  script.type = 'text/javascript';
  script.async = true;
  var location = document.getElementsByTagName("body");
  location.insertBefore(script, list.childNodes[0]);

}

// call GTM analytics
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MB43D4S');
