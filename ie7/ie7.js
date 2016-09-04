/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-book': '&#xf007;',
		'icon-bookmark': '&#xf07b;',
		'icon-chevron-left': '&#xf0a4;',
		'icon-chevron-right': '&#xf078;',
		'icon-cloud-download': '&#xf00b;',
		'icon-database': '&#xf096;',
		'icon-device-desktop': '&#xf27c;',
		'icon-keyboard': '&#xf00d;',
		'icon-mail-reply': '&#xf051;',
		'icon-mortar-board': '&#xf0d7;',
		'icon-octoface': '&#xf008;',
		'icon-puzzle': '&#xf0c0;',
		'icon-rocket': '&#xf033;',
		'icon-squirrel': '&#xf0b2;',
		'icon-telescope': '&#xf088;',
		'icon-office': '&#xe603;',
		'icon-pencil3': '&#xe605;',
		'icon-pencil2': '&#xe606;',
		'icon-image': '&#xe60d;',
		'icon-images': '&#xe60e;',
		'icon-qrcode': '&#xe638;',
		'icon-coin-yen': '&#xe63e;',
		'icon-clock3': '&#xe64e;',
		'icon-clock2': '&#xe64f;',
		'icon-display': '&#xe656;',
		'icon-mobile': '&#xe658;',
		'icon-mobile2': '&#xe659;',
		'icon-tablet': '&#xe65a;',
		'icon-cloud-download2': '&#xe6c2;',
		'icon-happy': '&#xe6df;',
		'icon-smile': '&#xe6e1;',
		'icon-wink': '&#xe6e7;',
		'icon-grin': '&#xe6e9;',
		'icon-cool': '&#xe6eb;',
		'icon-hipster': '&#xe6f9;',
		'icon-paperplane': '&#xe600;',
		'icon-fire': '&#xe601;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
