
var _AnalyticsCode = 'UA-63442458-2';

var _gaq = _gaq || [];
_gaq.push(['_setAccount', _AnalyticsCode]);
_gaq.push(['_trackPageview']);
	(function() {
	  var ga = document.createElement('script');
	  ga.type = 'text/javascript';
	  ga.async = true;
	  ga.src = 'https://ssl.google-analytics.com/ga.js';
	  var s = document.getElementsByTagName('script')[0];
	  s.parentNode.insertBefore(ga, s);
	})();

	function trackButtonClick(e) {
		_gaq.push(['_trackEvent', e.target.id, 'clicked']);
	}
/**
41	 * Now set up your event handlers for the popup's `button` elements once the
42	 * popup's DOM has loaded.
43	 */
document.addEventListener('DOMContentLoaded', function () {
	var buttons = document.querySelectorAll('button');
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', trackButtonClick);
	}});