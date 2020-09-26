javascript: (function () {
    var voice = "es-ES_EnriqueVoice";
    var text = "";
    if (typeof window.getSelection != "undefined") {
        text = window.getSelection().toString();
    } else if (typeof document.selection != "undefined" && document.selection.type == "Text") {
        text = document.selection.createRange().text;
    }
    if (text) {
        var ele = document.createElement("audio");
        ele.setAttribute("src", "https://text-to-speech-demo.ng.bluemix.net/api/v3/synthesize?text=" +
            text.replace(/ /g, "+") + "&voice=" + voice + "&download=true&accept=audio%2Fmp3");
        ele.setAttribute("autoplay", "autoplay");
        document.body.appendChild(ele);
    }
}());