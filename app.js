var express = require('express');
var wifi = require("node-wifi");
const bodyParser = require('body-parser');

var HTTP_PORT = 4000;

var app = express();
var server = app.listen(HTTP_PORT);

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Initialize wifi module
// Absolutely necessary even to set interface to null
wifi.init({
  iface: null // network interface, choose a random wifi interface if set to null
});



app.post('/scan', function(req, res) {
    console.log("browser has loaded, now scanning networks\n");

    // Scan networks
    wifi.scan((error, networks) => {
	  if (error) {
	    console.log(error);
	  } else {
	  	ssids = [];
	    for(var id=0; id<networks.length; id++){
	    	ssids.push(String(networks[id].ssid));
	    }
	    console.log(ssids);

	    // send the data to browser
	    data = {"ssids": ssids};
    	res.status(200).send(ssids);
	  }
	});
});


if (server) {
  console.log("\nhttp  server running at port: " + HTTP_PORT);
}


