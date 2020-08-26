console.log('loaded from file');

const WIFI_PARAMS = {
  ssid: '',
  psk: 'WPA/WPA2 PSK'
};

const pane = new Tweakpane();

// ssid: ssid

pane.addInput(WIFI_PARAMS, 'ssid', {
	options: {
		dark: 'path/to/dark.json',
		light: 'path/to/Light.json'
	}
});

pane.addInput(WIFI_PARAMS, 'psk').on('change', (value) => {
	console.log('wifi psk: ' + String(value));
});