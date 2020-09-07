# MENÚ DE UN RESTAURANTE EN FORMATO AUDIO ACCESIBLE CON UN MÓVIL VIA NFC

1- escribir menú en el traductor de google, separar por espacios y poner un punto al final de cada línea para que vaya más lento.

[traductor de google](https://translate.google.es/?hl=es)

[ejemplo de menu](https://github.com/vivirenremoto/labs/blob/master/menu_restaurante_audio/menu.txt)

2- abrir el inspector de chrome y pulsar el botón de escuchar en el traductor de google.

3- en el inspector de chrome - red, copiar las urls que tengan "translate_tts".

4- descargamos los audios mp3.

5- combinar los audios mp3 en uno solo con [esta herramienta online](https://clideo.com/es/merge-audio)

6- subir el mp3 en internet por ejemplo en un repositorio de github.

7- en github podemos obtener la ruta del fichero si pulsamos en el botón "raw".

[ejemplo de menú en formato audio](https://raw.githubusercontent.com/vivirenremoto/labs/master/menu_restaurante_audio/menu.mp3)

8- compramos etiquetas nfc en [amazon](https://www.amazon.es/s?k=nfc+etiqueta&__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&ref=nb_sb_noss_2).

9- con la app "nfc tools" podemos asignar la url del audio a una etiqueta NFC.

[android](https://play.google.com/store/apps/details?id=com.wakdev.wdnfc&hl=es)

[iphone](https://apps.apple.com/es/app/nfc-tools/id1252962749)

10- para abrir el menú en formato audio, pasamos el móvil por encima de la etiqueta nfc.

## otra forma de generar audio con traductor de google

[https://vivirenremoto.github.io/labs/texto_audio/](https://vivirenremoto.github.io/labs/texto_audio/)
