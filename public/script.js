// console.log('loaded from file');

const WIFI_PARAMS = {
  WIFI_SSID: '',
  WIFI_PSWD: 'WPA/WPA2 PSK'
};



const pane = new Tweakpane({
  title: 'CONFIGURE WIFI',
});



function fillSSID(SSIDARRAY){

	ssidlist = {};

	wifiCreds = {
		'ssid': '',
		'psk': ''
	};
	
	// generating self key value pair of ssids from returned ssid array into an object
	for (id=0; id< SSIDARRAY.length; id++){
		ssidlist[String(SSIDARRAY[id])] = String(SSIDARRAY[id]);
	}

	console.log(ssidlist);

	// populate the pane with list of SSID
	pane.addInput(WIFI_PARAMS, 'WIFI_SSID', {
		options: ssidlist
	}).on('change', (ssid) => {
		console.log('wifi ssid: ' + String(ssid));
		wifiCreds.ssid = String(ssid);
	}); 

	// create a fild for wifi password
	pane.addInput(WIFI_PARAMS, 'WIFI_PSWD').on('change', (psk) => {
		console.log('wifi psk: ' + String(psk));
		wifiCreds.psk = String(psk);
	});
	

	pane.addButton({title: 'CONNECT'}).on('click', () => {
		// send the wifi data
		if (wifiCreds.ssid.length != 0  && wifiCreds.psk.length != 0){
			console.log(wifiCreds);

			// send this data to server
			$.ajax({
				type: "POST",
        		url: "/validWIFICreds",
        		data: wifiCreds,
        		success: function(data){
        			if(data === 'OK'){
        				console.log('wifi data received on server side succfully!');

        				// change the background banner gif
        				$(".background_img").attr("src","assets/connecting.webp");
        			}
        		},
        		error: function(err){
		        	console.log(err);
		        }
			});
		}
  	});
}




window.addEventListener('load', function() {
    console.log('Server is scanning wifi networks..\n');
    
    $.ajax({
        type: "POST",
        url: "/scan",
        data: "clean",
        success: function(ssidList){
        	console.log('WIFI SSIDS available:\n');
        	fillSSID(ssidList);
        },
        error: function(err){
        	console.log(err);
        }
    });
})