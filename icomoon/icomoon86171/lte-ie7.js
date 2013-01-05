/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-imgletras' : '&#x4c;',
			'icon-imglogo' : '&#x49;',
			'icon-logo' : '&#x65;',
			'icon-me' : '&#x76;',
			'icon-untitled' : '&#x28;',
			'icon-untitled-2' : '&#x29;',
			'icon-untitled-3' : '&#x2f;',
			'icon-facebook' : '&#x66;',
			'icon-facebook-2' : '&#x2c;',
			'icon-twitter' : '&#x74;',
			'icon-twitter-2' : '&#x54;',
			'icon-twitter-3' : '&#x3b;',
			'icon-facebook-3' : '&#x46;',
			'icon-mail' : '&#x4d;',
			'icon-mail-2' : '&#x2e;',
			'icon-untitled-4' : '&#x3c;',
			'icon-untitled-5' : '&#x3e;',
			'icon-untitled-6' : '&#x3a;',
			'icon-mail-3' : '&#x6d;',
			'icon-imglogo1' : '&#x69;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};