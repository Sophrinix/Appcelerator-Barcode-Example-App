Ti.Barcode = require('ti.barcode');

var showBarcodeResult = function(event){
  var contentType;
  switch(event.contentType){
    case Ti.Barcode.URL: contentType = 'URL'; break;
    case Ti.Barcode.SMS: contentType = 'SMS'; break;
    case Ti.Barcode.TELEPHONE: contentType = 'TELEPHONE'; break;
    case Ti.Barcode.TEXT: contentType = 'TEXT'; break;
    case Ti.Barcode.CALENDAR: contentType = 'CALENDAR'; break;
    case Ti.Barcode.GEOLOCATION: contentType = 'GEOLOCATION'; break;
    case Ti.Barcode.EMAIL: contentType = 'EMAIL'; break;
    case Ti.Barcode.CONTACT: contentType = 'CONTACT'; break;
    case Ti.Barcode.BOOKMARK: contentType = 'BOOKMARK'; break;
    default: contentType = 'UNKNOWN';
  };
	
	var a = Ti.UI.createAlertDialog({title: contentType, message: event.result});
	a.addEventListener('click', function(){ openBarcodeScanner(); });
	a.show();	
};

var openBarcodeScanner = function(){
  Ti.Barcode.capture({
		success: function(event){ showBarcodeResult(event); },
		cancel: function(event){ alert("cancelled. Restart App now to re-open scanner"); },
		error: function(event){ alert("Error. "+event.message); }
	});  
};

exports.createScanWindow = function(){
  var w = Titanium.UI.createWindow({
    title:'Awesome Empty Background Window', backgroundColor:'#fff',
  });
  openBarcodeScanner();
  return w;
};

