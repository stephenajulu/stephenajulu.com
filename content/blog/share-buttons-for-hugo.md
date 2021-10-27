---
authors:
- Stephen Ajulu
title: Share Buttons For Hugo
excerpt: Do you have a hugo blog? Need some share buttons? Here are some i made and
  use.
date: 2021-06-14T14:26:00+03:00
hero: "/images/share1img.png"

---
Here's code for ordinary social share buttons. Can be copied as is.

```html
<!--from https://www.buttons.social-->
	<a href="https://www.facebook.com/sharer/sharer.php?u={{ .Permalink }}&quote={{ .Title }}%20-%20{{ .Site.Title }}" target="_blank" title="Share on Facebook" style="display:inline-block;vertical-align:middle;width:2em;height:2em;border-radius:50%;box-shadow:.1em .1em 0.5em rgba(0,0,0,.3);background:#3b5998;">
		<svg style="display:block;fill:#fff;height:44%;margin:28% auto;" viewBox="0 -256 864 1664">
			<path transform="matrix(1,0,0,-1,-95,1280)" d="M 959,1524 V 1260 H 802 q -86,0 -116,-36 -30,-36 -30,-108 V 927 H 949 L 910,631 H 656 V -128 H 350 V 631 H 95 v 296 h 255 v 218 q 0,186 104,288.5 104,102.5 277,102.5 147,0 228,-12 z" />
		</svg>
	</a>
	<a href="https://twitter.com/intent/tweet/?text={{ .Title }}&amp;url={{ .Permalink }}&via=stephenajulu&amp;hashtags={{ .Params.tags }}" target="_blank" title="Tweet on Twitter" style="display:inline-block;vertical-align:middle;width:2em;height:2em;border-radius:50%;box-shadow:.1em .1em 0.5em rgba(0,0,0,.3);background:#1b95e0;">
		<svg style="display:block;fill:#fff;height:36%;margin:32% auto;" viewBox="0 -256 1576 1280">
			<path transform="matrix(1,0,0,-1,-44,1024)" d="m 1620,1128 q -67,-98 -162,-167 1,-14 1,-42 0,-130 -38,-259.5 Q 1383,530 1305.5,411 1228,292 1121,200.5 1014,109 863,54.5 712,0 540,0 269,0 44,145 q 35,-4 78,-4 225,0 401,138 -105,2 -188,64.5 -83,62.5 -114,159.5 33,-5 61,-5 43,0 85,11 Q 255,532 181.5,620.5 108,709 108,826 v 4 q 68,-38 146,-41 -66,44 -105,115 -39,71 -39,154 0,88 44,163 Q 275,1072 448.5,982.5 622,893 820,883 q -8,38 -8,74 0,134 94.5,228.5 94.5,94.5 228.5,94.5 140,0 236,-102 109,21 205,78 -37,-115 -142,-178 93,10 186,50 z" />
		</svg>
	</a>
	<a href="https://reddit.com/submit/?url={{.Permalink}}&amp;resubmit=true&amp;title={{.Title}}" target="_blank" title="Submit to Reddit" style="display:inline-block;vertical-align:middle;width:2em;height:2em;border-radius:50%;box-shadow:.1em .1em 0.5em rgba(0,0,0,.3);background:#ff4500;">
		<svg style="display:block;fill:#fff;height:46%;margin:26% auto;" viewBox="0 -256 1792 1692">
			<path transform="matrix(1,0,0,-1,0,1280)" d="m 1792,690 q 0,-58 -29,-105.5 -30,-47.5 -80,-72.5 12,-46 12,-96 0,-155 -106,-287 Q 1482,-3 1298,-79.5 1114,-156 898,-156 682,-156 498.5,-79.5 315,-3 208.5,129 102,261 102,416 q 0,47 11,94 Q 62,535 31,583.5 0,632 0,690 q 0,82 58,140.5 58,58.5 141,58.5 85,0 145,-63 218,152 515,162 l 116,521 q 3,13 15,21 12,8 26,5 l 369,-81 q 18,37 54,60 36,22 79,22 62,0 106,-43 44,-44 44,-106 0,-62 -44,-106 -44,-44 -106,-44 -62,0 -105,44 -44,43 -44,105 l -334,74 -104,-472 q 300,-9 519,-160 58,61 143,61 83,0 141,-58.5 58,-58.5 58,-140.5 z M 418,491 q 0,-62 43.5,-106 43.5,-44 105.5,-44 62,0 106,44 44,44 44,106 0,62 -44,105.5 Q 629,640 567,640 506,640 462,596 418,552 418,491 z m 810,-355 q 11,11 11,26 0,15 -11,26 -10,10 -25,10 -15,0 -26,-10 -41,-42 -121,-62 -80,-20 -160,-20 -80,0 -160,20 -80,20 -121,62 -11,10 -26,10 -15,0 -25,-10 Q 553,178 553,162.5 553,147 564,136 607,93 682.5,68 758,43 805,38.5 852,34 896,34 q 44,0 91,4.5 47,4.5 123,29.5 75,25 118,68 z m -3,205 q 62,0 106,44 43,44 43,106 0,61 -44,105 -44,44 -105,44 -62,0 -106,-43.5 -44,-43.5 -44,-105.5 0,-62 44,-106 44,-44 106,-44 z" />
		</svg>
	</a>
	<a href="whatsapp://send?text={{.Title}}%0D%0A{{ .Summary | truncate 170 }}%0D%0AWritten%20by%20{{.Params.authors}}%0D%0ASource%20{{.Permalink}}" title="Send via WhatsApp" style="display:inline-block;vertical-align:middle;width:2em;height:2em;border-radius:50%;box-shadow:.1em .1em 0.5em rgba(0,0,0,.3);background:#43d854;">
		<svg style="display:block;fill:#fff;height:44%;margin:28% auto;" viewBox="0 -256 1536 1548">
			<path transform="matrix(1,0,0,-1,0,1158)" d="m 985,562 q 13,0 98,-44 84,-44 89,-53 2,-5 2,-15 0,-33 -17,-76 -16,-39 -71,-65.5 -55,-26.5 -102,-26.5 -57,0 -190,62 -98,45 -170,118 -72,73 -148,185 -72,107 -71,194 v 8 q 3,91 74,158 24,22 52,22 6,0 18,-1 12,-2 19,-2 19,0 26.5,-6 7.5,-7 15.5,-28 8,-20 33,-88 25,-68 25,-75 0,-21 -34.5,-57.5 Q 599,735 599,725 q 0,-7 5,-15 34,-73 102,-137 56,-53 151,-101 12,-7 22,-7 15,0 54,48.5 39,48.5 52,48.5 z M 782,32 q 127,0 244,50 116,50 200,134 84,84 134,200.5 50,116.5 50,243.5 0,127 -50,243.5 -50,116.5 -134,200.5 -84,84 -200,134 -117,50 -244,50 -127,0 -243.5,-50 Q 422,1188 338,1104 254,1020 204,903.5 154,787 154,660 154,457 274,292 L 195,59 437,136 Q 595,32 782,32 z m 0,1382 q 153,0 293,-60 139,-60 240,-161 101,-101 161,-240.5 Q 1536,813 1536,660 1536,507 1476,367.5 1416,228 1315,127 1214,26 1075,-34 935,-94 782,-94 587,-94 417,0 L 0,-134 136,271 Q 28,449 28,660 q 0,153 60,292.5 60,139.5 161,240.5 101,101 240.5,161 139.5,60 292.5,60 z" />
		</svg>
	</a>
	<a href="https://telegram.me/share/url?text={{.Title}}%0D%0A{{ .Summary | truncate 170 }}}%0D%0AWritten%20by%20{{.Params.authors}}&amp;url={{.Permalink}}" target="_blank" title="Send via Telegram" style="display:inline-block;vertical-align:middle;width:2em;height:2em;border-radius:50%;box-shadow:.1em .1em 0.5em rgba(0,0,0,.3);background:#39a7da;">
		<svg style="display:block;fill:#fff;height:42%;margin:29% auto;" viewBox="0 -256 1150 817.4">
			<path d="m 824.4,511.7 147,-693 c 6,-29.3 3,-50.3 -10,-63 -13,-12.7 -31,-15 -52,-7 L 45.45,81.65 c -19.3,7.3 -32.5,15.7 -39.504,25.05 -7,9.3 -7.8,18.2 -2.5,26.5 5.3,8.3 16.004,14.8 32.004,19.5 l 220.95,69 513,-323 c 14,-9.3 25,-11.3 32,-6 5,3.3 3,8.25 -4,14.95 l -415,375.05 0,0 0,0 -16,228 c 15.3,0 30.3,-7 45,-22 l 108,-104 224,165 c 43,24 70,11 81,-38 z" />
		</svg>
	</a>
	<a href="https://www.linkedin.com/shareArticle?mini=true&amp;url={{.Permalink}}&amp;title={{.Title}}&amp;summary={{ .Summary }}&amp;source={{.Permalink}}" target="_blank" title="Share on LinkedIn" style="display:inline-block;vertical-align:middle;width:2em;height:2em;border-radius:50%;box-shadow:.1em .1em 0.5em rgba(0,0,0,.3);background:#0077b5;">
		<svg style="display:block;fill:#fff;height:42%;margin:29% auto;" viewBox="0 -256 1536 1468">
			<path transform="matrix(1,0,0,-1,0,1132)" d="M 349,911 V -80 H 19 v 991 h 330 z m 21,306 q 1,-73 -50.5,-122 Q 268,1046 184,1046 h -2 q -82,0 -132,49 -50,49 -50,122 0,74 51.5,123 51.5,48 134.5,48 83,0 133,-48 50,-49 51,-123 z M 1536,488 V -80 h -329 v 530 q 0,105 -40,164.5 Q 1126,674 1040,674 977,674 934.5,639.5 892,605 871,554 860,524 860,473 V -80 H 531 q 2,399 2,647 0,248 -1,296 l -1,48 H 860 V 767 h -2 q 20,32 41,56 21,24 56.5,52 35.5,28 87.5,43.5 51,15.5 114,15.5 171,0 275,-113.5 Q 1536,707 1536,488 z" />
		</svg>
	</a>
	<a href="https://mix.com/add?url={{.Permalink}}" target="_blank" title="Add to Mix" style="display:inline-block;vertical-align:middle;width:2em;height:2em;border-radius:50%;box-shadow:.1em .1em 0.5em rgba(0,0,0,.3);background:#F3782B;">
		<svg style="display:block;fill:#fff;height:38%;margin:31% auto;" viewBox="0 0 448 512">
			<path d="M0 64v348.9c0 56.2 88 58.1 88 0V174.3c7.9-52.9 88-50.4 88 6.5v175.3c0 57.9 96 58 96 0V240c5.3-54.7 88-52.5 88 4.3v23.8c0 59.9 88 56.6 88 0V64H0z" />
		</svg>
	</a>
	<a href="https://pinterest.com/pin/create/button/?url={{.Permalink}}&amp;media={{ .Params.hero | absURL }}&amp;description={{.Description}}" target="_blank" title="Pin on Pinterest" style="display:inline-block;vertical-align:middle;width:2em;height:2em;border-radius:50%;box-shadow:.1em .1em 0.5em rgba(0,0,0,.3);background:#E60023;">
  		<svg style="display:block;fill:#fff;height:36%;margin:32% auto;" viewBox="0 0 384 512">
      			<path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"/>
  		</svg>
  	</a>
	<a href="https://news.ycombinator.com/submitlink?u={{.Permalink}}&t={{.Title}}-{{.Site.Title}}" target="_blank" title="Submit to HackerNews" style="display:inline-block;vertical-align:middle;width:2em;height:2em;border-radius:50%;box-shadow:.1em .1em 0.5em rgba(0,0,0,.3);background:#ff4000;">
  		<svg style="display:block;fill:#fff;height:36%;margin:32% auto;" viewBox="0 0 140 140">
      			<path d="M60.94 82.314L17 0h20.08l25.85 52.093c.397.927.86 1.888 1.39 2.883.53.994.995 2.02 1.393 3.08.265.4.463.764.596 1.095.13.334.262.63.395.898.662 1.325 1.26 2.618 1.79 3.877.53 1.26.993 2.42 1.39 3.48 1.06-2.254 2.22-4.673 3.48-7.258 1.26-2.585 2.552-5.27 3.877-8.052L103.49 0h18.69L77.84 83.308v53.087h-16.9v-54.08z"/>
  		</svg>
  	</a>
	<a href="mailto:?subject={{.Title}}%20%3A%20{{.Permalink}}&amp;body={{ .Summary | truncate 170 }}%0D%0AWritten%20by%20{{.Params.authors}}%0D%0ARead More%3A%20{{.Permalink}}" target="_blank" title="Send via Email" style="display:inline-block;vertical-align:middle;width:2em;height:2em;border-radius:50%;box-shadow:.1em .1em 0.5em rgba(0,0,0,.3);background:#555;">
		<svg style="display:block;fill:#fff;height:36%;margin:32% auto;" viewBox="0 -256 1792 1408">
			<path transform="matrix(1,0,0,-1,0,1024)" d="M 1792,826 V 32 q 0,-66 -47,-113 -47,-47 -113,-47 H 160 Q 94,-128 47,-81 0,-34 0,32 V 826 Q 44,777 101,739 463,493 598,394 655,352 690.5,328.5 726,305 785,280.5 844,256 895,256 h 1 1 q 51,0 110,24.5 59,24.5 94.5,48 35.5,23.5 92.5,65.5 170,123 498,345 57,39 100,87 z m 0,294 q 0,-79 -49,-151 -49,-72 -122,-123 -376,-261 -468,-325 -10,-7 -42.5,-30.5 -32.5,-23.5 -54,-38 Q 1035,438 1004.5,420 974,402 947,393 q -27,-9 -50,-9 h -1 -1 q -23,0 -50,9 -27,9 -57.5,27 -30.5,18 -52,32.5 -21.5,14.5 -54,38 Q 649,514 639,521 548,585 377,703.5 206,822 172,846 110,888 55,961.5 0,1035 0,1098 q 0,78 41.5,130 41.5,52 118.5,52 h 1472 q 65,0 112.5,-47 47.5,-47 47.5,-113 z" />
		</svg>
	</a>
	<a onclick="window.print()" target="_blank" title="Print this" style="display:inline-block;vertical-align:middle;width:2em;height:2em;border-radius:50%;box-shadow:.1em .1em 0.5em rgba(0,0,0,.3);background:#555;">
		<svg style="display:block;fill:#fff;height:36%;margin:32% auto;" viewBox="0 0 512 512">
      			<path d="M448 192V77.25c0-8.49-3.37-16.62-9.37-22.63L393.37 9.37c-6-6-14.14-9.37-22.63-9.37H96C78.33 0 64 14.33 64 32v160c-35.35 0-64 28.65-64 64v112c0 8.84 7.16 16 16 16h48v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-96h48c8.84 0 16-7.16 16-16V256c0-35.35-28.65-64-64-64zm-64 256H128v-96h256v96zm0-224H128V64h192v48c0 8.84 7.16 16 16 16h48v96zm48 72c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"/>
  		</svg>
  	</a>
	<a onclick="CopyLink()" target="_blank" title="Copy Link" style="display:inline-block;vertical-align:middle;width:2em;height:2em;border-radius:50%;box-shadow:.1em .1em 0.5em rgba(0,0,0,.3);background:#555;">
  		<svg style="display:block;fill:#fff;height:36%;margin:32% auto;" viewBox="0 0 512 512">
      			<path d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"/>
  		</svg>
  	</a>
<!--end buttons.social-->
<script>
    function copyTextToClipboard(text) {
  var textArea = document.createElement("textarea");

  //
  // *** This styling is an extra step which is likely not required. ***
  //
  // Why is it here? To ensure:
  // 1. the element is able to have focus and selection.
  // 2. if element was to flash render it has minimal visual impact.
  // 3. less flakyness with selection and copying which **might** occur if
  //    the textarea element is not visible.
  //
  // The likelihood is the element won't even render, not even a flash,
  // so some of these are just precautions. However in IE the element
  // is visible whilst the popup box asking the user for permission for
  // the web page to copy to the clipboard.
  //

  // Place in top-left corner of screen regardless of scroll position.
  textArea.style.position = 'fixed';
  textArea.style.top = 0;
  textArea.style.left = 0;

  // Ensure it has a small width and height. Setting to 1px / 1em
  // doesn't work as this gives a negative w/h on some browsers.
  textArea.style.width = '2em';
  textArea.style.height = '2em';

  // We don't need padding, reducing the size if it does flash render.
  textArea.style.padding = 0;

  // Clean up any borders.
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';

  // Avoid flash of white box if rendered for any reason.
  textArea.style.background = 'transparent';


  textArea.value = text;

  document.body.appendChild(textArea);

  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying link command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy link');
  }

  document.body.removeChild(textArea);
}

function CopyLink() {
  copyTextToClipboard(location.href);
}
  </script>
```