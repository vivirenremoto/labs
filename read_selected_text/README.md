# Read the selected text on browser

**Intructions**

1- Grab the following link into browser bookmark toolbar [read me](javascript:var lang="en",text="";if(void 0!==window.getSelection?text=window.getSelection().toString():void 0!==document.selection&&"Text"==document.selection.type&&(text=document.selection.createRange().text),text){var iFrameBody,iFrame=document.getElementById("ttsiframe");if(!iFrame){var m=document.createElement("iframe");m.setAttribute("id","ttsiframe"),document.body.appendChild(m),iFrame=document.getElementById("ttsiframe")}iFrame.removeAttribute("sandbox"),iFrameBody=iFrame.contentDocument?iFrame.contentDocument.getElementsByTagName("body")[0]:iFrame.contentWindow?iFrame.contentWindow.document.getElementsByTagName("body")[0]:iFrame.contentDocument.body;var rand=5e7*Math.random(),link="https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl="+lang+"&q="+text.replace(/ /g,"+").replace(/[.]/g,"")+"&rd="+rand;iFrameBody.innerHTML='<embed src="'+link+'" id="TTS">',iFrame.setAttribute("sandbox","")}).

2- Select a text in any website.

3- Click the bookmark to read it using Google Translate API.

**Need another language**

Change the variable lang to another language for example:

- es (spanish)
- it (italan)
- fr (french)
- de (german)

**Sources**

- [Get selected text](https://stackoverflow.com/questions/5379120/get-the-highlighted-selected-text)

- [Embed Google Transalte in Iframe](https://stackoverflow.com/questions/35002003/how-to-use-google-translate-tts-with-the-new-v2-api) 