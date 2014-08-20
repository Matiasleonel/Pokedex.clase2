function Pokemon(numero) {

	this.pokemonNumero = numero;
};

var poke1 = new pokemon(1);
var poke2 = new pokemon(4);
var poke3 = new pokemon(7);
var poke4 = new pokemon(16);
var poke5 = new pokemon(43);
var poke6 = new pokemon(120);


var id;

function grito (id)
{

	var numeroG= id;

	if (numeroG < 10)
		{
			document.getElementById('grito').innerHTML = '<audio autoplay> <source src="audio/00'+numeroG+'.mp3" type="audio/mpeg">'+
						'			<source src="audio/00'+numeroG+'.ogg" type="audio/ogg"> </audio>';
		}
		else 
		{
			document.getElementById('grito').innerHTML = '<audio autoplay> <source src="audio/0'+numeroG+'.mp3" type="audio/mpeg">'+
						'			<source src="audio/0'+numeroG+'.ogg" type="audio/ogg"> </audio>';
		}
}

function pokedex(id)
{
	var Numpokedex= id;
	var cursor=["img/pokedex"+Numpokedex+".png", , ]

	if (Numpokedex==120)
		{
			document.getElementById('grito').innerHTML = '<audio autoplay> <source src="audio/pokedex'+Numpokedex+'.mp3" type="audio/mpeg">'+
						'			<source src="audio/pokedex'+Numpokedex+'.ogg" type="audio/ogg"> </audio>';

			document.getElementById('blimgcursorid').innerHTML='<div id="blimgcursorid" style="position:absolute;visibility:visible;left:-200px;;width:1px;height:1px"><img border="0" src="'+cursor[0]+'"></div>'
		}

		else {
			document.getElementById('grito').innerHTML = '<audio autoplay> <source src="audio/pokedex'+Numpokedex+'.mp3" type="audio/mpeg">'+
						'			<source src="audio/pokedex'+Numpokedex+'.ogg" type="audio/ogg"> </audio>';

			document.getElementById('blimgcursorid').innerHTML='<div id="blimgcursorid"><img border="0" src="'+cursor[0]+'"></div>'
			}
}

function abordar ()
{

	var cursor=["img/pokedex.png", , ]

	document.getElementById('grito').innerHTML= '<div id="grito" style="display:none">';
	document.getElementById('blimgcursorid').innerHTML='<div id="blimgcursorid"><img border="0" src="'+cursor[0]+'"></div>'
}
