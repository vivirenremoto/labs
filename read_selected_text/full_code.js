var lang = "en";

var text = "";
if (typeof window.getSelection != "undefined") {
    text = window.getSelection().toString();
} else if (typeof document.selection != "undefined" && document.selection.type == "Text") {
    text = document.selection.createRange().text;
}

if (text) {
    var iFrame = document.getElementById('ttsiframe');
    if (!iFrame) {
        var m = document.createElement("iframe");
        m.setAttribute("id", "ttsiframe");
        document.body.appendChild(m);
        iFrame = document.getElementById('ttsiframe');
    }
    iFrame.removeAttribute('sandbox');
    var iFrameBody;
    if (iFrame.contentDocument) { // FF
        iFrameBody = iFrame.contentDocument.getElementsByTagName('body')[0];
    }
    else if (iFrame.contentWindow) { // IE
        iFrameBody = iFrame.contentWindow.document.getElementsByTagName('body')[0];
    }
    else {
        iFrameBody = iFrame.contentDocument.body;
    }
    var rand = Math.random() * 50000000;
    var link = 'https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=' + lang + '&q=' + text.replace(/ /g, '+').replace(/[.]/g, '') + '&rd=' + rand;
    iFrameBody.innerHTML = '<embed src="' + link + '" id="TTS">';
    iFrame.setAttribute('sandbox', '');
}