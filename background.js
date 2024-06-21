chrome.app.runtime.onLaunched.addListener(function () {
  chrome.app.window.create('webview.html', {state: "maximized", frame: "none"},
  	function(win) {
  		window.globwin = win;
		win.contentWindow.onload = function() {
			var wv = this.document.querySelector('webview');
			// loadcommit instead of contentload:
			wv.addEventListener('loadcommit', function(e) {
				var customCSS = `
				.notice-3bPHh- {
					display: none;
				}`;
			  	this.insertCSS({
			    	code: customCSS,
			    	runAt: 'document_start'  // and added this
			  	});
			  	var customJS = `
			  	var newNoti = Notification;
			  	Notification = function() {
				    console.log(arguments)
				};
			  	`;
			  	this.executeScript({
			    	code: customJS,
			    	runAt: 'document_start'  // and added this
			  	});
			});
			wv.addEventListener('newwindow', e => {
				e.preventDefault();
				console.log(e);
				window.open(e.targetUrl);
			});
			this.exec
		}
    });
});