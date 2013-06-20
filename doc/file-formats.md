# Formatos de archivo - Versión 1.0 #

Para gestionar las piezas del juego, así como los niveles, vamos a usar los siguientes objetos JSON:

## Piezas ##

Los objetos JSON para las piezas tendrán 5 atributos, la ID, el norte, este, sur y oeste, de la siguiente manera:

	{
		id: "",
		n: 0,
		e: 0,
		s: 0,
		w: 0
	}
La ID será cualquier string, mientras que las posibilidades para el resto serán un entero de 0 a 3, que significan lo siguiente, en binario:

* 00 -> cerrado
* 01 -> entrada
* 10 -> salida
* 11 -> puede ser entrada o salida

Los sprites serán un array de este tipo de objetos.

## Niveles ##

Los niveles tendrán un archivo para cada uno, y serán un objeto JSON con la siguiente estructura:

	{
		w: 2,
		h: 2,
		data:
		{
			{{"id1", 90}, {"id2", 0}},
			{{"id2", 270}, {"id3, 90}}
		}
	}

Donde w será el ancho, h el alto, y el data será un array bidimensional de IDs de piezas, cada uno con su orientación, en grados.
