var express = require('express');
// var wifi = require("node-wifi");
const bodyParser = require('body-parser');
const fs = require('fs-extra')
var shell = require('shelljs');

var HTTP_PORT = 4000;

var app = express();
var server = app.listen(HTTP_PORT);

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Initialize wifi module
// wifi.init({
//   iface: null // network interface, choose a random wifi interface if set to null
// });



// var child = exec('wifi scanner code', {async:true});
// child.stdout.on('data', function(data) {
//   /* ... do something with data ... */
// });


app.post('/scan', function(req, res) {
    console.log("browser has loaded, now scanning networks\n");

    // Scan networks
    // scan the wifi and save the data in a file
	shell.exec('sudo iwlist wlan0 scan | grep ESSID >> .rawssid', function(code, stdout, stderr) {
		console.log('Exit code:', code);
		console.log('Program output:', stdout);
		console.log('Program stderr:', stderr);
	});

 	// wifi.scan((error, networks) => {
	//   if (error) {
	//     console.log(error);
	//   } else {
	//   	ssids = [];
	//     for(var id=0; id<networks.length; id++){
	//     	ssids.push(String(networks[id].ssid));
	//     }
	//     console.log('network scanned: \n');
	//     console.log(ssids);

	//     // send the data to browser
	//     data = {"ssids": ssids};
 //    	res.status(200).send(ssids);
	//   }
	// });
});


app.post('/validWIFICreds', function(req, res) {
	wifiData = req.body;
	console.log(wifiData);

	if(wifiData.ssid.length != 0 && wifiData.psk.length != 0){
		res.status(200).send('OK');
		console.log("SSID: " + wifiData.ssid);
		console.log("PSK: " + wifiData.psk);
	}
	
});


if (server) {
  console.log("\nhttp  server running at port: " + HTTP_PORT);
}


