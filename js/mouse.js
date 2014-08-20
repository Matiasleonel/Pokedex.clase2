//<![CDATA[
var blimgcursor=["img/pokedex.png", , ]
var blimgespacio=[12,12]
var blimgcursor_cuant=0

if (document.getElementById || document.all)
document.write('<div id="blimgcursorid" style="position:absolute;visibility:visible;left:0px;top:100px;width:1px;height:1px"><img border="0" src="'+blimgcursor[0]+'"></div>')
function blimgcur_activo(){
if (document.getElementById)
return document.getElementById("blimgcursorid").style
else if (document.all)
return document.all.trailimagid.style
}
function blcentro(){
return (!window.opera && document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
}
function blinvis_img(){
blimgcur_activo().visibility="hidden"
document.onmousemove=""
}
function blimg_curseg(e){
var xcoord=blimgespacio[0]
var ycoord=blimgespacio[1]
if (typeof e != "undefined"){
xcoord+=e.pageX
ycoord+=e.pageY
}
else if (typeof window.event !="undefined"){
xcoord+=blcentro().scrollLeft+event.clientX
ycoord+=blcentro().scrollTop+event.clientY
}
var docwidth=document.all? blcentro().scrollLeft+blcentro().clientWidth : pageXOffset+window.innerWidth-15
var docheight=document.all? Math.max(blcentro().scrollHeight, blcentro().clientHeight) : Math.max(document.body.offsetHeight, window.innerHeight)
if (xcoord+blimgcursor[1]+3>docwidth || ycoord+blimgcursor[2]> docheight)
blimgcur_activo().display="none"
else
blimgcur_activo().display=""
blimgcur_activo().left=xcoord+"px"
blimgcur_activo().top=ycoord+"px"
}
document.onmousemove=blimg_curseg
if (blimgcursor_cuant>0)
setTimeout("blinvis_img()", blimgcursor_cuant*1000)
//]]>