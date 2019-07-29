/*
Floating Menu script-  Roy Whittle (http://www.javascript-fx.com/)
Script featured on/available at http://www.dynamicdrive.com/
This notice must stay intact for use
*/

//Enter "frombottom" or "fromtop"
var verticalpos="fromtop"

function ietruebody(){
return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body;
}

function JSFX_FloatTopDiv()
{
	var startX = 5,
	startY =15;
	var PX='px', d = document;
	function ml(id)
	{
		var el=d.getElementById?d.getElementById(id):d.all?d.all[id]:d.layers[id];
		if(d.layers){el.style=el,PX='';}
		el.sP=function(x,y){el.style.left=x+PX;el.style.top=y+PX;};
		el.x = startX;
		if (verticalpos=="fromtop")
		el.y = startY;
		else{
		el.y = window.innerHeight ? pageYOffset + window.innerHeight : ietruebody().scrollTop + ietruebody().clientHeight;
		el.y -= startY;
		}
		return el;
	}
	window.stayTopLeft=function()
	{
		if (verticalpos=="fromtop"){
		var pY = window.innerHeight ? pageYOffset : ietruebody().scrollTop;
		ftlObj.y += (pY + startY - ftlObj.y)/6;
		}
		else{
		var pY = window.innerHeight ? pageYOffset + window.innerHeight : ietruebody().scrollTop + ietruebody().clientHeight;
		ftlObj.y += (pY - startY - ftlObj.y)/6;
		}
		ftlObj.sP(ftlObj.x, ftlObj.y);
		setTimeout("stayTopLeft()", 10);
	}
	ftlObj = ml("divStayTopLeft");
	stayTopLeft();
}
JSFX_FloatTopDiv();