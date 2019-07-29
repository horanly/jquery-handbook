window.google = window["google"] || {};google.friendconnect = google.friendconnect_ || {};if (!window['__ps_loaded__']) {/*http://www.a.friendconnect.gmodules.com/gadgets/js/rpc.js?c=1*/
var gadgets=gadgets||{},shindig=shindig||{};
;
gadgets.config=function(){var A=[];
var B;
return{register:function(E,D,C){var F=A[E];
if(!F){F=[];
A[E]=F
}F.push({validators:D||{},callback:C})
},get:function(C){if(C){return B[C]||{}
}return B
},init:function(E,L){B=E;
for(var C in A){if(A.hasOwnProperty(C)){var D=A[C],I=E[C];
for(var H=0,G=D.length;
H<G;
++H){var J=D[H];
if(I&&!L){var F=J.validators;
for(var K in F){if(F.hasOwnProperty(K)){if(!F[K](I[K])){throw new Error('Invalid config value "'+I[K]+'" for parameter "'+K+'" in component "'+C+'"')
}}}}if(J.callback){J.callback(E)
}}}}},EnumValidator:function(F){var E=[];
if(arguments.length>1){for(var D=0,C;
(C=arguments[D]);
++D){E.push(C)
}}else{E=F
}return function(H){for(var G=0,I;
(I=E[G]);
++G){if(H===E[G]){return true
}}}
},RegExValidator:function(C){return function(D){return C.test(D)
}
},ExistsValidator:function(C){return typeof C!=="undefined"
},NonEmptyStringValidator:function(C){return typeof C==="string"&&C.length>0
},BooleanValidator:function(C){return typeof C==="boolean"
},LikeValidator:function(C){return function(E){for(var F in C){if(C.hasOwnProperty(F)){var D=C[F];
if(!D(E[F])){return false
}}}return true
}
}}
}();;
gadgets.log=(function(){var E=1;
var A=2;
var F=3;
var C=4;
var D=function(I){B(E,I)
};
gadgets.warn=function(I){B(A,I)
};
gadgets.error=function(I){B(F,I)
};
gadgets.setLogLevel=function(I){H=I
};
function B(J,I){if(J<H||!G){return 
}if(J===A&&G.warn){G.warn(I)
}else{if(J===F&&G.error){G.error(I)
}else{if(G.log){G.log(I)
}}}}D.INFO=E;
D.WARNING=A;
D.NONE=C;
var H=E;
var G=window.console?window.console:window.opera?window.opera.postError:undefined;
return D
})();;
var tamings___=tamings___||[];
tamings___.push(function(A){___.grantRead(gadgets.log,"INFO");
___.grantRead(gadgets.log,"WARNING");
___.grantRead(gadgets.log,"ERROR");
___.grantRead(gadgets.log,"NONE");
caja___.whitelistFuncs([[gadgets,"log"],[gadgets,"warn"],[gadgets,"error"],[gadgets,"setLogLevel"]])
});;
if(window.JSON&&window.JSON.parse&&window.JSON.stringify){gadgets.json=(function(){var A=/___$/;
return{parse:function(C){try{return window.JSON.parse(C)
}catch(B){return false
}},stringify:function(C){try{return window.JSON.stringify(C,function(E,D){return !A.test(E)?D:null
})
}catch(B){return null
}}}
})()
}else{gadgets.json=function(){function f(n){return n<10?"0"+n:n
}Date.prototype.toJSON=function(){return[this.getUTCFullYear(),"-",f(this.getUTCMonth()+1),"-",f(this.getUTCDate()),"T",f(this.getUTCHours()),":",f(this.getUTCMinutes()),":",f(this.getUTCSeconds()),"Z"].join("")
};
var m={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};
function stringify(value){var a,i,k,l,r=/["\\\x00-\x1f\x7f-\x9f]/g,v;
switch(typeof value){case"string":return r.test(value)?'"'+value.replace(r,function(a){var c=m[a];
if(c){return c
}c=a.charCodeAt();
return"\\u00"+Math.floor(c/16).toString(16)+(c%16).toString(16)
})+'"':'"'+value+'"';
case"number":return isFinite(value)?String(value):"null";
case"boolean":case"null":return String(value);
case"object":if(!value){return"null"
}a=[];
if(typeof value.length==="number"&&!value.propertyIsEnumerable("length")){l=value.length;
for(i=0;
i<l;
i+=1){a.push(stringify(value[i])||"null")
}return"["+a.join(",")+"]"
}for(k in value){if(k.match("___$")){continue
}if(value.hasOwnProperty(k)){if(typeof k==="string"){v=stringify(value[k]);
if(v){a.push(stringify(k)+":"+v)
}}}}return"{"+a.join(",")+"}"
}}return{stringify:stringify,parse:function(text){if(/^[\],:{}\s]*$/.test(text.replace(/\\["\\\/b-u]/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){return eval("("+text+")")
}return false
}}
}()
};;
var tamings___=tamings___||[];
tamings___.push(function(A){___.tamesTo(gadgets.json.stringify,safeJSON.stringify);
___.tamesTo(gadgets.json.parse,safeJSON.parse)
});;
gadgets.util=function(){function G(L){var M;
var K=L;
var I=K.indexOf("?");
var J=K.indexOf("#");
if(J===-1){M=K.substr(I+1)
}else{M=[K.substr(I+1,J-I-1),"&",K.substr(J+1)].join("")
}return M.split("&")
}var E=null;
var D={};
var C={};
var F=[];
var A={0:false,10:true,13:true,34:true,39:true,60:true,62:true,92:true,8232:true,8233:true};
function B(I,J){return String.fromCharCode(J)
}function H(I){D=I["core.util"]||{}
}if(gadgets.config){gadgets.config.register("core.util",null,H)
}return{getUrlParameters:function(Q){if(E!==null&&typeof Q==="undefined"){return E
}var M={};
E={};
var J=G(Q||document.location.href);
var O=window.decodeURIComponent?decodeURIComponent:unescape;
for(var L=0,K=J.length;
L<K;
++L){var N=J[L].indexOf("=");
if(N===-1){continue
}var I=J[L].substring(0,N);
var P=J[L].substring(N+1);
P=P.replace(/\+/g," ");
M[I]=O(P)
}if(typeof Q==="undefined"){E=M
}return M
},makeClosure:function(L,N,M){var K=[];
for(var J=2,I=arguments.length;
J<I;
++J){K.push(arguments[J])
}return function(){var O=K.slice();
for(var Q=0,P=arguments.length;
Q<P;
++Q){O.push(arguments[Q])
}return N.apply(L,O)
}
},makeEnum:function(J){var L={};
for(var K=0,I;
(I=J[K]);
++K){L[I]=I
}return L
},getFeatureParameters:function(I){return typeof D[I]==="undefined"?null:D[I]
},hasFeature:function(I){return typeof D[I]!=="undefined"
},getServices:function(){return C
},registerOnLoadHandler:function(I){F.push(I)
},runOnLoadHandlers:function(){for(var J=0,I=F.length;
J<I;
++J){F[J]()
}},escape:function(I,M){if(!I){return I
}else{if(typeof I==="string"){return gadgets.util.escapeString(I)
}else{if(typeof I==="array"){for(var L=0,J=I.length;
L<J;
++L){I[L]=gadgets.util.escape(I[L])
}}else{if(typeof I==="object"&&M){var K={};
for(var N in I){if(I.hasOwnProperty(N)){K[gadgets.util.escapeString(N)]=gadgets.util.escape(I[N],true)
}}return K
}}}}return I
},escapeString:function(M){if(!M){return M
}var J=[],L,N;
for(var K=0,I=M.length;
K<I;
++K){L=M.charCodeAt(K);
N=A[L];
if(N===true){J.push("&#",L,";")
}else{if(N!==false){J.push(M.charAt(K))
}}}return J.join("")
},unescapeString:function(I){if(!I){return I
}return I.replace(/&#([0-9]+);/g,B)
}}
}();
gadgets.util.getUrlParameters();;
var tamings___=tamings___||[];
tamings___.push(function(A){caja___.whitelistFuncs([[gadgets.util,"escapeString"],[gadgets.util,"getFeatureParameters"],[gadgets.util,"getUrlParameters"],[gadgets.util,"hasFeature"],[gadgets.util,"registerOnLoadHandler"],[gadgets.util,"unescapeString"]])
});;
gadgets.rpctx=gadgets.rpctx||{};
if(!gadgets.rpctx.wpm){gadgets.rpctx.wpm=function(){var A;
return{getCode:function(){return"wpm"
},isParentVerifiable:function(){return true
},init:function(B,C){A=C;
var D=function(E){B(gadgets.json.parse(E.data))
};
if(typeof window.addEventListener!="undefined"){window.addEventListener("message",D,false)
}else{if(typeof window.attachEvent!="undefined"){window.attachEvent("onmessage",D)
}}A("..",true);
return true
},setup:function(C,B){if(C===".."){gadgets.rpc.call(C,gadgets.rpc.ACK)
}return true
},call:function(C,G,F){var E=gadgets.rpc._getTargetWin(C);
var D=gadgets.rpc.getRelayUrl(C)||gadgets.util.getUrlParameters()["parent"];
var B=gadgets.rpc.getOrigin(D);
if(B){E.postMessage(gadgets.json.stringify(F),B)
}else{gadgets.error("No relay set (used as window.postMessage targetOrigin), cannot send cross-domain message")
}return true
}}
}()
};;
gadgets.rpctx=gadgets.rpctx||{};
if(!gadgets.rpctx.frameElement){gadgets.rpctx.frameElement=function(){var E="__g2c_rpc";
var B="__c2g_rpc";
var D;
var C;
function A(G,K,J){try{if(K!==".."){var F=window.frameElement;
if(typeof F[E]==="function"){if(typeof F[E][B]!=="function"){F[E][B]=function(L){D(gadgets.json.parse(L))
}
}F[E](gadgets.json.stringify(J));
return 
}}else{var I=document.getElementById(G);
if(typeof I[E]==="function"&&typeof I[E][B]==="function"){I[E][B](gadgets.json.stringify(J));
return 
}}}catch(H){}return true
}return{getCode:function(){return"fe"
},isParentVerifiable:function(){return false
},init:function(F,G){D=F;
C=G;
return true
},setup:function(J,F){if(J!==".."){try{var I=document.getElementById(J);
I[E]=function(K){D(gadgets.json.parse(K))
}
}catch(H){return false
}}if(J===".."){C("..",true);
var G=function(){window.setTimeout(function(){gadgets.rpc.call(J,gadgets.rpc.ACK)
},500)
};
gadgets.util.registerOnLoadHandler(G)
}return true
},call:function(F,H,G){A(F,H,G)
}}
}()
};;
gadgets.rpctx=gadgets.rpctx||{};
if(!gadgets.rpctx.nix){gadgets.rpctx.nix=function(){var C="GRPC____NIXVBS_wrapper";
var D="GRPC____NIXVBS_get_wrapper";
var F="GRPC____NIXVBS_handle_message";
var B="GRPC____NIXVBS_create_channel";
var A=10;
var J=500;
var I={};
var H;
var G=0;
function E(){var L=I[".."];
if(L){return 
}if(++G>A){gadgets.warn("Nix transport setup failed, falling back...");
H("..",false);
return 
}if(!L&&window.opener&&"GetAuthToken" in window.opener){L=window.opener;
if(L.GetAuthToken()==gadgets.rpc.getAuthToken("..")){var K=gadgets.rpc.getAuthToken("..");
L.CreateChannel(window[D]("..",K),K);
I[".."]=L;
window.opener=null;
H("..",true);
return 
}}window.setTimeout(function(){E()
},J)
}return{getCode:function(){return"nix"
},isParentVerifiable:function(){return false
},init:function(L,M){H=M;
if(typeof window[D]!=="unknown"){window[F]=function(O){window.setTimeout(function(){L(gadgets.json.parse(O))
},0)
};
window[B]=function(O,Q,P){if(gadgets.rpc.getAuthToken(O)===P){I[O]=Q;
H(O,true)
}};
var K="Class "+C+"\n Private m_Intended\nPrivate m_Auth\nPublic Sub SetIntendedName(name)\n If isEmpty(m_Intended) Then\nm_Intended = name\nEnd If\nEnd Sub\nPublic Sub SetAuth(auth)\n If isEmpty(m_Auth) Then\nm_Auth = auth\nEnd If\nEnd Sub\nPublic Sub SendMessage(data)\n "+F+"(data)\nEnd Sub\nPublic Function GetAuthToken()\n GetAuthToken = m_Auth\nEnd Function\nPublic Sub CreateChannel(channel, auth)\n Call "+B+"(m_Intended, channel, auth)\nEnd Sub\nEnd Class\nFunction "+D+"(name, auth)\nDim wrap\nSet wrap = New "+C+"\nwrap.SetIntendedName name\nwrap.SetAuth auth\nSet "+D+" = wrap\nEnd Function";
try{window.execScript(K,"vbscript")
}catch(N){return false
}}return true
},setup:function(O,K){if(O===".."){E();
return true
}try{var M=document.getElementById(O);
var N=window[D](O,K);
M.contentWindow.opener=N
}catch(L){return false
}return true
},call:function(K,N,M){try{if(I[K]){I[K].SendMessage(gadgets.json.stringify(M))
}}catch(L){return false
}return true
}}
}()
};;
gadgets.rpctx=gadgets.rpctx||{};
if(!gadgets.rpctx.rmr){gadgets.rpctx.rmr=function(){var G=500;
var E=10;
var H={};
var B;
var I;
function K(P,N,O,M){var Q=function(){document.body.appendChild(P);
P.src="about:blank";
if(M){P.onload=function(){L(M)
}
}P.src=N+"#"+O
};
if(document.body){Q()
}else{gadgets.util.registerOnLoadHandler(function(){Q()
})
}}function C(O){if(typeof H[O]==="object"){return 
}var P=document.createElement("iframe");
var M=P.style;
M.position="absolute";
M.top="0px";
M.border="0";
M.opacity="0";
M.width="10px";
M.height="1px";
P.id="rmrtransport-"+O;
P.name=P.id;
var N=gadgets.rpc.getRelayUrl(O);
if(!N){N=gadgets.rpc.getOrigin(gadgets.util.getUrlParameters()["parent"])+"/robots.txt"
}H[O]={frame:P,receiveWindow:null,relayUri:N,searchCounter:0,width:10,waiting:true,queue:[],sendId:0,recvId:0};
if(O!==".."){K(P,N,A(O))
}D(O)
}function D(O){var Q=null;
H[O].searchCounter++;
try{var N=gadgets.rpc._getTargetWin(O);
if(O===".."){Q=N.frames["rmrtransport-"+gadgets.rpc.RPC_ID]
}else{Q=N.frames["rmrtransport-.."]
}}catch(P){}var M=false;
if(Q){M=F(O,Q)
}if(!M){if(H[O].searchCounter>E){return 
}window.setTimeout(function(){D(O)
},G)
}}function J(N,P,T,S){var O=null;
if(T!==".."){O=H[".."]
}else{O=H[N]
}if(O){if(P!==gadgets.rpc.ACK){O.queue.push(S)
}if(O.waiting||(O.queue.length===0&&!(P===gadgets.rpc.ACK&&S&&S.ackAlone===true))){return true
}if(O.queue.length>0){O.waiting=true
}var M=O.relayUri+"#"+A(N);
try{O.frame.contentWindow.location=M;
var Q=O.width==10?20:10;
O.frame.style.width=Q+"px";
O.width=Q
}catch(R){return false
}}return true
}function A(N){var O=H[N];
var M={id:O.sendId};
if(O){M.d=Array.prototype.slice.call(O.queue,0);
M.d.push({s:gadgets.rpc.ACK,id:O.recvId})
}return gadgets.json.stringify(M)
}function L(X){var U=H[X];
var Q=U.receiveWindow.location.hash.substring(1);
var Y=gadgets.json.parse(decodeURIComponent(Q))||{};
var N=Y.d||[];
var O=false;
var T=false;
var V=0;
var M=(U.recvId-Y.id);
for(var P=0;
P<N.length;
++P){var S=N[P];
if(S.s===gadgets.rpc.ACK){I(X,true);
if(U.waiting){T=true
}U.waiting=false;
var R=Math.max(0,S.id-U.sendId);
U.queue.splice(0,R);
U.sendId=Math.max(U.sendId,S.id||0);
continue
}O=true;
if(++V<=M){continue
}++U.recvId;
B(S)
}if(O||(T&&U.queue.length>0)){var W=(X==="..")?gadgets.rpc.RPC_ID:"..";
J(X,gadgets.rpc.ACK,W,{ackAlone:O})
}}function F(P,S){var O=H[P];
try{var N=false;
N="document" in S;
if(!N){return false
}N=typeof S.document=="object";
if(!N){return false
}var R=S.location.href;
if(R==="about:blank"){return false
}}catch(M){return false
}O.receiveWindow=S;
function Q(){L(P)
}if(typeof S.attachEvent==="undefined"){S.onresize=Q
}else{S.attachEvent("onresize",Q)
}if(P===".."){K(O.frame,O.relayUri,A(P),P)
}else{L(P)
}return true
}return{getCode:function(){return"rmr"
},isParentVerifiable:function(){return true
},init:function(M,N){B=M;
I=N;
return true
},setup:function(O,M){try{C(O)
}catch(N){gadgets.warn("Caught exception setting up RMR: "+N);
return false
}return true
},call:function(M,O,N){return J(M,N.s,O,N)
}}
}()
};;
gadgets.rpctx=gadgets.rpctx||{};
if(!gadgets.rpctx.ifpc){gadgets.rpctx.ifpc=function(){var E=[];
var D=0;
var C;
function B(H){var F=[];
for(var I=0,G=H.length;
I<G;
++I){F.push(encodeURIComponent(gadgets.json.stringify(H[I])))
}return F.join("&")
}function A(I){var G;
for(var F=E.length-1;
F>=0;
--F){var J=E[F];
try{if(J&&(J.recyclable||J.readyState==="complete")){J.parentNode.removeChild(J);
if(window.ActiveXObject){E[F]=J=null;
E.splice(F,1)
}else{J.recyclable=false;
G=J;
break
}}}catch(H){}}if(!G){G=document.createElement("iframe");
G.style.border=G.style.width=G.style.height="0px";
G.style.visibility="hidden";
G.style.position="absolute";
G.onload=function(){this.recyclable=true
};
E.push(G)
}G.src=I;
window.setTimeout(function(){document.body.appendChild(G)
},0)
}return{getCode:function(){return"ifpc"
},isParentVerifiable:function(){return true
},init:function(F,G){C=G;
C("..",true);
return true
},setup:function(G,F){C(G,true);
return true
},call:function(F,K,I){var J=gadgets.rpc.getRelayUrl(F);
++D;
if(!J){gadgets.warn("No relay file assigned for IFPC");
return 
}var H=null;
if(I.l){var G=I.a;
H=[J,"#",B([K,D,1,0,B([K,I.s,"","",K].concat(G))])].join("")
}else{H=[J,"#",F,"&",K,"@",D,"&1&0&",encodeURIComponent(gadgets.json.stringify(I))].join("")
}A(H);
return true
}}
}()
};;
if(!gadgets.rpc){gadgets.rpc=function(){var T="__cb";
var S="";
var G="__ack";
var R=500;
var J=10;
var B={};
var C={};
var X={};
var K={};
var N=0;
var i={};
var W={};
var D={};
var f={};
var L={};
var V={};
var M=(window.top!==window.self);
var O=window.name;
var g=(function(){function j(k){return function(){gadgets.log("gadgets.rpc."+k+"("+gadgets.json.stringify(Array.prototype.slice.call(arguments))+"): call ignored. [caller: "+document.location+", isChild: "+M+"]")
}
}return{getCode:function(){return"noop"
},isParentVerifiable:function(){return true
},init:j("init"),setup:j("setup"),call:j("call")}
})();
if(gadgets.util){f=gadgets.util.getUrlParameters()
}var a=(f.rpc_earlyq==="1");
function A(){return typeof window.postMessage==="function"?gadgets.rpctx.wpm:typeof window.postMessage==="object"?gadgets.rpctx.wpm:window.ActiveXObject?gadgets.rpctx.nix:navigator.userAgent.indexOf("WebKit")>0?gadgets.rpctx.rmr:navigator.product==="Gecko"?gadgets.rpctx.frameElement:gadgets.rpctx.ifpc
}function b(o,m){var k=c;
if(!m){k=g
}L[o]=k;
var j=V[o]||[];
for(var l=0;
l<j.length;
++l){var n=j[l];
n.t=Y(o);
k.call(o,n.f,n)
}V[o]=[]
}function U(k){if(k&&typeof k.s==="string"&&typeof k.f==="string"&&k.a instanceof Array){if(K[k.f]){if(K[k.f]!==k.t){throw new Error("Invalid auth token. "+K[k.f]+" vs "+k.t)
}}if(k.s===G){window.setTimeout(function(){b(k.f,true)
},0);
return 
}if(k.c){k.callback=function(l){gadgets.rpc.call(k.f,T,null,k.c,l)
}
}var j=(B[k.s]||B[S]).apply(k,k.a);
if(k.c&&typeof j!=="undefined"){gadgets.rpc.call(k.f,T,null,k.c,j)
}}}function e(l){if(!l){return""
}l=l.toLowerCase();
if(l.indexOf("//")==0){l=window.location.protocol+l
}if(l.indexOf("://")==-1){l=window.location.protocol+"//"+l
}var m=l.substring(l.indexOf("://")+3);
var j=m.indexOf("/");
if(j!=-1){m=m.substring(0,j)
}var o=l.substring(0,l.indexOf("://"));
var n="";
var p=m.indexOf(":");
if(p!=-1){var k=m.substring(p+1);
m=m.substring(0,p);
if((o==="http"&&k!=="80")||(o==="https"&&k!=="443")){n=":"+k
}}return o+"://"+m+n
}function I(k){if(typeof k==="undefined"||k===".."){return window.parent
}k=String(k);
var j=window.frames[k];
if(j){return j
}j=document.getElementById(k);
if(j&&j.contentWindow){return j.contentWindow
}return null
}var c=A();
B[S]=function(){gadgets.warn("Unknown RPC service: "+this.s)
};
B[T]=function(k,j){var l=i[k];
if(l){delete i[k];
l(j)
}};
function P(l,j){if(W[l]===true){return 
}if(typeof W[l]==="undefined"){W[l]=0
}var k=document.getElementById(l);
if(l===".."||k!=null){if(c.setup(l,j)===true){W[l]=true;
return 
}}if(W[l]!==true&&W[l]++<J){window.setTimeout(function(){P(l,j)
},R)
}else{L[l]=g;
W[l]=true
}}function F(k,n){if(typeof D[k]==="undefined"){D[k]=false;
var m=gadgets.rpc.getRelayUrl(k);
if(e(m)!==e(window.location.href)){return false
}var l=I(k);
try{D[k]=l.gadgets.rpc.receiveSameDomain
}catch(j){gadgets.error("Same domain call failed: parent= incorrectly set.")
}}if(typeof D[k]==="function"){D[k](n);
return true
}return false
}function H(k,j,l){C[k]=j;
X[k]=!!l
}function Y(j){return K[j]
}function E(j,k){k=k||"";
K[j]=String(k);
P(j,k)
}function Q(j){function l(o){var q=o?o.rpc:{};
var n=q.parentRelayUrl;
if(n.substring(0,7)!=="http://"&&n.substring(0,8)!=="https://"&&n.substring(0,2)!=="//"){if(typeof f.parent==="string"&&f.parent!==""){if(n.substring(0,1)!=="/"){var m=f.parent.lastIndexOf("/");
n=f.parent.substring(0,m+1)+n
}else{n=e(f.parent)+n
}}}var p=!!q.useLegacyProtocol;
H("..",n,p);
if(p){c=gadgets.rpctx.ifpc;
c.init(U,b)
}E("..",j)
}var k={parentRelayUrl:gadgets.config.NonEmptyStringValidator};
gadgets.config.register("rpc",k,l)
}function Z(l,j){var k=j||f.parent;
if(k){H("..",k);
E("..",l)
}}function d(j,n,p){if(!gadgets.util){return 
}var m=document.getElementById(j);
if(!m){throw new Error("Cannot set up gadgets.rpc receiver with ID: "+j+", element not found.")
}var k=n||m.src;
H(j,k);
var o=gadgets.util.getUrlParameters(m.src);
var l=p||o.rpctoken;
E(j,l)
}function h(j,l,m){if(j===".."){var k=m||f.rpctoken||f.ifpctok||"";
if(window.__isgadget===true){Q(k)
}else{Z(k,l)
}}else{d(j,l,m)
}}return{register:function(k,j){if(k===T||k===G){throw new Error("Cannot overwrite callback/ack service")
}if(k===S){throw new Error("Cannot overwrite default service: use registerDefault")
}B[k]=j
},unregister:function(j){if(j===T||j===G){throw new Error("Cannot delete callback/ack service")
}if(j===S){throw new Error("Cannot delete default service: use unregisterDefault")
}delete B[j]
},registerDefault:function(j){B[S]=j
},unregisterDefault:function(){delete B[S]
},forceParentVerifiable:function(){if(!c.isParentVerifiable()){c=gadgets.rpctx.ifpc
}},call:function(j,k,p,n){j=j||"..";
var o="..";
if(j===".."){o=O
}++N;
if(p){i[N]=p
}var m={s:k,f:o,c:p?N:0,a:Array.prototype.slice.call(arguments,3),t:K[j],l:X[j]};
if(j!==".."&&!document.getElementById(j)){gadgets.log("WARNING: attempted send to nonexistent frame: "+j);
return 
}if(F(j,m)){return 
}var l=L[j]?L[j]:c;
if(!l){if(!V[j]){V[j]=[m]
}else{V[j].push(m)
}return 
}if(X[j]){l=gadgets.rpctx.ifpc
}if(l.call(j,o,m)===false){L[j]=g;
c.call(j,o,m)
}},getRelayUrl:function(k){var j=C[k];
if(j&&j.indexOf("//")==0){j=document.location.protocol+j
}return j
},setRelayUrl:H,setAuthToken:E,setupReceiver:h,getAuthToken:Y,getRelayChannel:function(){return c.getCode()
},receive:function(j){if(j.length>4){U(gadgets.json.parse(decodeURIComponent(j[j.length-1])))
}},receiveSameDomain:function(j){j.a=Array.prototype.slice.call(j.a);
window.setTimeout(function(){U(j)
},0)
},getOrigin:e,init:function(){if(c.init(U,b)===false){c=g
}if(M){h("..")
}},_getTargetWin:I,ACK:G,RPC_ID:O}
}();
gadgets.rpc.init()
};;
var friendconnect_serverBase = "http://www.google.com";var friendconnect_loginUrl = "https://www.google.com/accounts";var friendconnect_gadgetPrefix = "http://www.a.friendconnect.gmodules.com/gadgets";
var friendconnect_serverVersion = "0.546.6";
var friendconnect_imageUrl = "http://www.google.com/friendconnect/scs/images";
var friendconnect_lightbox = true;
function fca(a){throw a;}var fcb=true,fcc=null,fcd=false,fce=gadgets,fcf=undefined,fcg=friendconnect_serverBase,fch=encodeURIComponent,fcaa=parseInt,fci=String,fcj=window,fcba=setTimeout,fcca=Object,fck=document,fcl=Math;function fcda(a,b){return a.toString=b}function fcea(a,b){return a.length=b}function fcfa(a,b){return a.className=b}function fcm(a,b){return a.width=b}function fcn(a,b){return a.innerHTML=b}function fco(a,b){return a.height=b}
var fcp="appendChild",fcq="push",fcga="toString",fcr="length",fcha="propertyIsEnumerable",fcia="stringify",fc="prototype",fcja="test",fcs="width",fct="round",fcu="slice",fcv="replace",fcw="document",fcka="data",fcx="split",fcy="getElementById",fcla="offsetWidth",fcz="charAt",fcA="location",fcB="getUrlParameters",fcC="indexOf",fcma="Dialog",fcD="style",fcna="body",fcE="left",fcF="call",fcG="match",fcH="options",fcoa="random",fcI="createElement",fcpa="json",fcqa="addEventListener",fcra="bottom",fcJ=
"setAttribute",fcsa="href",fcK="util",fcta="maxHeight",fcua="type",fcL="apply",fcva="auth",fcwa="reset",fcxa="getSecurityToken",fcM="name",fcN="parentNode",fcya="display",fcO="height",fcza="offsetHeight",fcP="register",fcQ="join",fcAa="toLowerCase",fcR="right",goog=goog||{},fcS=this,fcCa=function(a,b,c){a=a[fcx](".");c=c||fcS;!(a[0]in c)&&c.execScript&&c.execScript("var "+a[0]);for(var d;a[fcr]&&(d=a.shift());)if(!a[fcr]&&fcBa(b))c[d]=b;else c=c[d]?c[d]:(c[d]={})},fcDa=function(a){var b=typeof a;
if(b=="object")if(a){if(a instanceof Array||!(a instanceof fcca)&&fcca[fc][fcga][fcF](a)=="[object Array]"||typeof a[fcr]=="number"&&typeof a.splice!="undefined"&&typeof a[fcha]!="undefined"&&!a[fcha]("splice"))return"array";if(!(a instanceof fcca)&&(fcca[fc][fcga][fcF](a)=="[object Function]"||typeof a[fcF]!="undefined"&&typeof a[fcha]!="undefined"&&!a[fcha]("call")))return"function"}else return"null";else if(b=="function"&&typeof a[fcF]=="undefined")return"object";return b},fcBa=function(a){return a!==
fcf},fcEa=function(a){var b=fcDa(a);return b=="array"||b=="object"&&typeof a[fcr]=="number"},fcT=function(a){return typeof a=="string"},fcFa=function(a){a=fcDa(a);return a=="object"||a=="array"||a=="function"};"closure_uid_"+fcl.floor(fcl[fcoa]()*2147483648)[fcga](36);
var fcU=function(a){var b=fcDa(a);if(b=="object"||b=="array"){if(a.clone)return a.clone[fcF](a);b=b=="array"?[]:{};for(var c in a)b[c]=fcU(a[c]);return b}return a},fcV=function(a,b){var c=b||fcS;if(arguments[fcr]>2){var d=Array[fc][fcu][fcF](arguments,2);return function(){var e=Array[fc][fcu][fcF](arguments);Array[fc].unshift[fcL](e,d);return a[fcL](c,e)}}else return function(){return a[fcL](c,arguments)}},fcGa=function(a){var b=Array[fc][fcu][fcF](arguments,1);return function(){var c=Array[fc][fcu][fcF](arguments);
c.unshift[fcL](c,b);return a[fcL](this,c)}},fcHa=function(a,b){for(var c in b)a[c]=b[c]},fcW=function(a,b,c){fcCa(a,b,c)},fcX=function(a,b){function c(){}c.prototype=b[fc];a.Kc=b[fc];a.prototype=new c;a[fc].constructor=a};SHA1=function(){this.c=new Array(5);this.ba=new Array(64);this.Bc=new Array(80);this.qa=new Array(64);this.qa[0]=128;for(var a=1;a<64;++a)this.qa[a]=0;this[fcwa]()};SHA1[fc].reset=function(){this.c[0]=1732584193;this.c[1]=4023233417;this.c[2]=2562383102;this.c[3]=271733878;this.c[4]=3285377520;this.wa=this.z=0};SHA1[fc].va=function(a,b){return(a<<b|a>>>32-b)&4294967295};
SHA1[fc].L=function(a){for(var b=this.Bc,c=0;c<64;c+=4){var d=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];b[c/4]=d}for(c=16;c<80;++c)b[c]=this.va(b[c-3]^b[c-8]^b[c-14]^b[c-16],1);a=this.c[0];d=this.c[1];var e=this.c[2],h=this.c[3],i=this.c[4],j,k;for(c=0;c<80;++c){if(c<40)if(c<20){j=h^d&(e^h);k=1518500249}else{j=d^e^h;k=1859775393}else if(c<60){j=d&e|h&(d|e);k=2400959708}else{j=d^e^h;k=3395469782}j=this.va(a,5)+j+i+k+b[c]&4294967295;i=h;h=e;e=this.va(d,30);d=a;a=j}this.c[0]=this.c[0]+a&4294967295;this.c[1]=
this.c[1]+d&4294967295;this.c[2]=this.c[2]+e&4294967295;this.c[3]=this.c[3]+h&4294967295;this.c[4]=this.c[4]+i&4294967295};SHA1[fc].update=function(a,b){if(!b)b=a[fcr];var c=0;if(this.z==0)for(;c+64<b;){this.L(a[fcu](c,c+64));c+=64;this.wa+=64}for(;c<b;){this.ba[this.z++]=a[c++];++this.wa;if(this.z==64){this.z=0;for(this.L(this.ba);c+64<b;){this.L(a[fcu](c,c+64));c+=64;this.wa+=64}}}};
SHA1[fc].digest=function(){var a=new Array(20),b=this.wa*8;this.z<56?this.update(this.qa,56-this.z):this.update(this.qa,64-(this.z-56));for(var c=63;c>=56;--c){this.ba[c]=b&255;b>>>=8}this.L(this.ba);for(c=b=0;c<5;++c)for(var d=24;d>=0;d-=8)a[b++]=this.c[c]>>d&255;return a};G_HMAC=function(a,b,c){if(!a||typeof a!="object"||!a[fcwa]||!a.update||!a.digest)fca(new Error("Invalid hasher object. Hasher unspecified or does not implement expected interface."));if(b.constructor!=Array)fca(new Error("Invalid key."));if(c&&typeof c!="number")fca(new Error("Invalid block size."));this.k=a;this.aa=c||16;this.Rb=new Array(this.aa);this.Qb=new Array(this.aa);if(b[fcr]>this.aa){this.k.update(b);b=this.k.digest()}for(c=0;c<this.aa;c++){a=c<b[fcr]?b[c]:0;this.Rb[c]=a^G_HMAC.OPAD;this.Qb[c]=
a^G_HMAC.IPAD}};G_HMAC.OPAD=92;G_HMAC.IPAD=54;G_HMAC[fc].reset=function(){this.k[fcwa]();this.k.update(this.Qb)};G_HMAC[fc].update=function(a){if(a.constructor!=Array)fca(new Error("Invalid data. Data must be an array."));this.k.update(a)};G_HMAC[fc].digest=function(){var a=this.k.digest();this.k[fcwa]();this.k.update(this.Rb);this.k.update(a);return this.k.digest()};G_HMAC[fc].Fb=function(a){this[fcwa]();this.update(a);return this.digest()};var fcIa=function(a){for(var b=[],c=0,d=0;d<a[fcr];d++){for(var e=a.charCodeAt(d);e>255;){b[c++]=e&255;e>>=8}b[c++]=e}return b};var fcJa=fcc,fcKa=fcc,fcLa=fcc,fcMa=fcc,fcOa=function(a,b){if(!fcEa(a))fca(Error("encodeByteArray takes an array as a parameter"));fcNa();for(var c=b?fcLa:fcJa,d=[],e=0;e<a[fcr];e+=3){var h=a[e],i=e+1<a[fcr],j=i?a[e+1]:0,k=e+2<a[fcr],l=k?a[e+2]:0,g=h>>2;h=(h&3)<<4|j>>4;j=(j&15)<<2|l>>6;l=l&63;if(!k){l=64;i||(j=64)}d[fcq](c[g],c[h],c[j],c[l])}return d[fcQ]("")},fcPa=function(a,b){if(a[fcr]%4)fca(Error("Length of b64-encoded data must be zero mod four"));fcNa();for(var c=b?fcMa:fcKa,d=[],e=0;e<a[fcr];e+=
4){var h=c[a[fcz](e)],i=c[a[fcz](e+1)],j=c[a[fcz](e+2)],k=c[a[fcz](e+3)];if(h==fcc||i==fcc||j==fcc||k==fcc)fca(Error());h=h<<2|i>>4;d[fcq](h);if(j!=64){i=i<<4&240|j>>2;d[fcq](i);if(k!=64){j=j<<6&192|k;d[fcq](j)}}}return d},fcNa=function(){if(!fcJa){fcJa={};fcKa={};fcLa={};fcMa={};for(var a=0;a<65;a++){fcJa[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[fcz](a);fcKa[fcJa[a]]=a;fcLa[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_."[fcz](a);fcMa[fcLa[a]]=
a}}};var fcQa=function(a,b){var c=fci(a)[fcAa](),d=fci(b)[fcAa]();return c<d?-1:c==d?0:1},fcWa=function(a,b){if(b)return a[fcv](fcRa,"&amp;")[fcv](fcSa,"&lt;")[fcv](fcTa,"&gt;")[fcv](fcUa,"&quot;");else{if(!fcVa[fcja](a))return a;if(a[fcC]("&")!=-1)a=a[fcv](fcRa,"&amp;");if(a[fcC]("<")!=-1)a=a[fcv](fcSa,"&lt;");if(a[fcC](">")!=-1)a=a[fcv](fcTa,"&gt;");if(a[fcC]('"')!=-1)a=a[fcv](fcUa,"&quot;");return a}},fcRa=/&/g,fcSa=/</g,fcTa=/>/g,fcUa=/\"/g,fcVa=/[&<>\"]/,fcYa=function(a,b){for(var c=0,d=fci(a)[fcv](/^[\s\xa0]+|[\s\xa0]+$/g,
"")[fcx]("."),e=fci(b)[fcv](/^[\s\xa0]+|[\s\xa0]+$/g,"")[fcx]("."),h=fcl.max(d[fcr],e[fcr]),i=0;c==0&&i<h;i++){var j=d[i]||"",k=e[i]||"",l=new RegExp("(\\d*)(\\D*)","g"),g=new RegExp("(\\d*)(\\D*)","g");do{var f=l.exec(j)||["","",""],m=g.exec(k)||["","",""];if(f[0][fcr]==0&&m[0][fcr]==0)break;c=f[1][fcr]==0?0:fcaa(f[1],10);var n=m[1][fcr]==0?0:fcaa(m[1],10);c=fcXa(c,n)||fcXa(f[2][fcr]==0,m[2][fcr]==0)||fcXa(f[2],m[2])}while(c==0)}return c},fcXa=function(a,b){if(a<b)return-1;else if(a>b)return 1;return 0};var fcZa,fc_a,fc0a,fc1a,fc2a,fc3a,fc4a,fc5a,fc6a,fc7a=function(){return fcS.navigator?fcS.navigator.userAgent:fcc},fc8a=function(){return fcS.navigator},fc9a=function(){fc2a=fc1a=fc0a=fc_a=fcZa=fcd;var a;if(a=fc7a()){var b=fc8a();fcZa=a[fcC]("Opera")==0;fc_a=!fcZa&&a[fcC]("MSIE")!=-1;fc1a=(fc0a=!fcZa&&a[fcC]("WebKit")!=-1)&&a[fcC]("Mobile")!=-1;fc2a=!fcZa&&!fc0a&&b.product=="Gecko"}};fc9a();
var fc$a=fcZa,fcY=fc_a,fcab=fc2a,fcbb=fc0a,fccb=fc1a,fcdb=function(){var a=fc8a();return a&&a.platform||""},fceb=fcdb(),fcfb=function(){fc3a=fceb[fcC]("Mac")!=-1;fc4a=fceb[fcC]("Win")!=-1;fc5a=fceb[fcC]("Linux")!=-1;fc6a=!!fc8a()&&(fc8a().appVersion||"")[fcC]("X11")!=-1};fcfb();
var fcgb=function(){var a="",b;if(fc$a&&fcS.opera){a=fcS.opera.version;a=typeof a=="function"?a():a}else{if(fcab)b=/rv\:([^\);]+)(\)|;)/;else if(fcY)b=/MSIE\s+([^\);]+)(\)|;)/;else if(fcbb)b=/WebKit\/(\S+)/;if(b)a=(a=b.exec(fc7a()))?a[1]:""}return a},fchb=fcgb(),fcib={},fcjb=function(a){return fcib[a]||(fcib[a]=fcYa(fchb,a)>=0)};var fckb=/\s*;\s*/,fclb=function(a,b,c,d,e){if(/[;=]/[fcja](a))fca(Error('Invalid cookie name "'+a+'"'));if(/;/[fcja](b))fca(Error('Invalid cookie value "'+b+'"'));fcBa(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";if(c<0)c="";else if(c==0){c=new Date(1970,1,1);c=";expires="+c.toUTCString()}else{c=new Date((new Date).getTime()+c*1E3);c=";expires="+c.toUTCString()}fck.cookie=a+"="+b+e+d+c},fcmb=function(a,b){for(var c=a+"=",d=fci(fck.cookie)[fcx](fckb),e=0,h;h=d[e];e++)if(h[fcC](c)==0)return h.substr(c[fcr]);
return b},fcnb=function(a,b,c){var d=fcBa(fcmb(a));fclb(a,"",0,b,c);return d};var fcZ=Array[fc],fcob=fcZ[fcC]?function(a,b,c){return fcZ[fcC][fcF](a,b,c)}:function(a,b,c){c=c==fcc?0:c<0?fcl.max(0,a[fcr]+c):c;if(fcT(a)){if(!fcT(b)||b[fcr]!=1)return-1;return a[fcC](b,c)}for(c=c;c<a[fcr];c++)if(c in a&&a[c]===b)return c;return-1},fcpb=fcZ.forEach?function(a,b,c){fcZ.forEach[fcF](a,b,c)}:function(a,b,c){for(var d=a[fcr],e=fcT(a)?a[fcx](""):a,h=0;h<d;h++)h in e&&b[fcF](c,e[h],h,a)},fcqb=function(a,b){return fcob(a,b)>=0},fcrb=function(){return fcZ.concat[fcL](fcZ,arguments)},fcsb=
function(a){if(fcDa(a)=="array")return fcrb(a);else{for(var b=[],c=0,d=a[fcr];c<d;c++)b[c]=a[c];return b}},fctb=function(a,b,c){return arguments[fcr]<=2?fcZ[fcu][fcF](a,b):fcZ[fcu][fcF](a,b,c)};var fcub=function(a,b){this.x=fcBa(a)?a:0;this.y=fcBa(b)?b:0};fcub[fc].clone=function(){return new fcub(this.x,this.y)};fcda(fcub[fc],function(){return"("+this.x+", "+this.y+")"});var fc_=function(a,b){fcm(this,a);fco(this,b)};fc_[fc].clone=function(){return new fc_(this[fcs],this[fcO])};fcda(fc_[fc],function(){return"("+this[fcs]+" x "+this[fcO]+")"});fc_[fc].ceil=function(){fcm(this,fcl.ceil(this[fcs]));fco(this,fcl.ceil(this[fcO]));return this};fc_[fc].floor=function(){fcm(this,fcl.floor(this[fcs]));fco(this,fcl.floor(this[fcO]));return this};fc_[fc].round=function(){fcm(this,fcl[fct](this[fcs]));fco(this,fcl[fct](this[fcO]));return this};
fc_[fc].scale=function(a){this.width*=a;this.height*=a;return this};var fcvb=function(a,b,c){for(var d in a)b[fcF](c,a[d],d,a)},fcwb=function(a){var b=[],c=0;for(var d in a)b[c++]=a[d];return b},fcxb=function(a){var b=[],c=0;for(var d in a)b[c++]=d;return b},fcyb=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],fczb=function(a){for(var b,c,d=1;d<arguments[fcr];d++){c=arguments[d];for(b in c)a[b]=c[b];for(var e=0;e<fcyb[fcr];e++){b=fcyb[e];if(fcca[fc].hasOwnProperty[fcF](c,b))a[b]=c[b]}}};var fcAb=function(a){return(a=a.className)&&typeof a[fcx]=="function"?a[fcx](/\s+/):[]},fcCb=function(a){var b=fcAb(a),c=fctb(arguments,1);c=fcBb(b,c);fcfa(a,b[fcQ](" "));return c},fcBb=function(a,b){for(var c=0,d=0;d<b[fcr];d++)if(!fcqb(a,b[d])){a[fcq](b[d]);c++}return c==b[fcr]};var fcDb=function(a){return fcT(a)?fck[fcy](a):a},fcEb=fcDb,fcFb=function(a,b,c,d){d=d||a;b=b&&b!="*"?b.toUpperCase():"";if(d.querySelectorAll&&(b||c)&&(!fcbb||a.compatMode=="CSS1Compat"||fcjb("528"))){c=b+(c?"."+c:"");return d.querySelectorAll(c)}if(c&&d.getElementsByClassName){a=d.getElementsByClassName(c);if(b){d={};for(var e=0,h=0,i;i=a[h];h++)if(b==i.nodeName)d[e++]=i;fcea(d,e);return d}else return a}a=d.getElementsByTagName(b||"*");if(c){d={};for(h=e=0;i=a[h];h++){b=i.className;if(typeof b[fcx]==
"function"&&fcqb(b[fcx](/\s+/),c))d[e++]=i}fcea(d,e);return d}else return a},fcHb=function(a,b){fcvb(b,function(c,d){if(d=="style")a[fcD].cssText=c;else if(d=="class")fcfa(a,c);else if(d=="for")a.htmlFor=c;else if(d in fcGb)a[fcJ](fcGb[d],c);else a[d]=c})},fcGb={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",rowspan:"rowSpan",valign:"vAlign",height:"height",width:"width",usemap:"useMap",frameborder:"frameBorder",type:"type"},fcIb=function(a){var b=a[fcw];if(fcbb&&!fcjb("500")&&
!fccb){if(typeof a.innerHeight=="undefined")a=fcj;b=a.innerHeight;var c=a[fcw].documentElement.scrollHeight;if(a==a.top)if(c<b)b-=15;return new fc_(a.innerWidth,b)}a=b.compatMode=="CSS1Compat"&&(!fc$a||fc$a&&fcjb("9.50"))?b.documentElement:b[fcna];return new fc_(a.clientWidth,a.clientHeight)},fc0=function(){return fcJb(fck,arguments)},fcJb=function(a,b){var c=b[0],d=b[1];if(fcY&&d&&(d[fcM]||d[fcua])){c=["<",c];d[fcM]&&c[fcq](' name="',fcWa(d[fcM]),'"');if(d[fcua]){c[fcq](' type="',fcWa(d[fcua]),'"');
d=fcU(d);delete d[fcua]}c[fcq](">");c=c[fcQ]("")}var e=a[fcI](c);if(d)if(fcT(d))fcfa(e,d);else fcHb(e,d);if(b[fcr]>2){d=function(i){if(i)e[fcp](fcT(i)?a.createTextNode(i):i)};for(c=2;c<b[fcr];c++){var h=b[c];fcEa(h)&&!(fcFa(h)&&h.nodeType>0)?fcpb(fcKb(h)?fcsb(h):h,d):d(h)}}return e},fcLb=function(a,b){a[fcp](b)},fcMb=function(a){return a&&a[fcN]?a[fcN].removeChild(a):fcc},fcNb=function(a,b){var c=b[fcN];c&&c.replaceChild(a,b)},fcOb=function(a,b){if(a.contains&&b.nodeType==1)return a==b||a.contains(b);
if(typeof a.compareDocumentPosition!="undefined")return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b[fcN];return b==a},fcKb=function(a){if(a&&typeof a[fcr]=="number")if(fcFa(a))return typeof a.item=="function"||typeof a.item=="string";else if(fcDa(a)=="function")return typeof a.item=="function";return fcd},fcPb=function(a){this.tb=a||fcS[fcw]||fck};fcPb[fc].createElement=function(a){return this.tb[fcI](a)};fcPb[fc].createTextNode=function(a){return this.tb.createTextNode(a)};
fcPb[fc].appendChild=fcLb;fcPb[fc].removeNode=fcMb;fcPb[fc].replaceNode=fcNb;fcPb[fc].contains=fcOb;var fcQb="StopIteration"in fcS?fcS.StopIteration:Error("StopIteration"),fcRb=function(){};fcRb[fc].next=function(){fca(fcQb)};fcRb[fc].__iterator__=function(){return this};var fc1=function(a){this.i={};this.e=[];var b=arguments[fcr];if(b>1){if(b%2)fca(Error("Uneven number of arguments"));for(var c=0;c<b;c+=2)this.set(arguments[c],arguments[c+1])}else a&&this.jb(a)};fc1[fc].q=0;fc1[fc].J=0;fc1[fc].Ka=function(){return this.q};fc1[fc].ja=function(){this.K();for(var a=[],b=0;b<this.e[fcr];b++){var c=this.e[b];a[fcq](this.i[c])}return a};fc1[fc].P=function(){this.K();return this.e.concat()};fc1[fc].qb=function(a){return fcSb(this.i,a)};
fc1[fc].clear=function(){this.i={};fcea(this.e,0);this.J=this.q=0};fc1[fc].remove=function(a){if(fcSb(this.i,a)){delete this.i[a];this.q--;this.J++;this.e[fcr]>2*this.q&&this.K();return fcb}return fcd};fc1[fc].K=function(){if(this.q!=this.e[fcr]){for(var a=0,b=0;a<this.e[fcr];){var c=this.e[a];if(fcSb(this.i,c))this.e[b++]=c;a++}fcea(this.e,b)}if(this.q!=this.e[fcr]){var d={};for(b=a=0;a<this.e[fcr];){c=this.e[a];if(!fcSb(d,c)){this.e[b++]=c;d[c]=1}a++}fcea(this.e,b)}};
fc1[fc].get=function(a,b){if(fcSb(this.i,a))return this.i[a];return b};fc1[fc].set=function(a,b){if(!fcSb(this.i,a)){this.q++;this.e[fcq](a);this.J++}this.i[a]=b};fc1[fc].jb=function(a){var b;if(a instanceof fc1){b=a.P();a=a.ja()}else{b=fcxb(a);a=fcwb(a)}for(var c=0;c<b[fcr];c++)this.set(b[c],a[c])};fc1[fc].clone=function(){return new fc1(this)};
fc1[fc].__iterator__=function(a){this.K();var b=0,c=this.e,d=this.i,e=this.J,h=this,i=new fcRb;i.next=function(){for(;;){if(e!=h.J)fca(Error("The map has changed since the iterator was created"));if(b>=c[fcr])fca(fcQb);var j=c[b++];return a?j:d[j]}};return i};var fcSb=function(a,b){return fcca[fc].hasOwnProperty[fcF](a,b)};var fcTb=function(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d};fcTb[fc].clone=function(){return new fcTb(this.top,this[fcR],this[fcra],this[fcE])};fcda(fcTb[fc],function(){return"("+this.top+"t, "+this[fcR]+"r, "+this[fcra]+"b, "+this[fcE]+"l)"});fcTb[fc].contains=function(a){return fcUb(this,a)};fcTb[fc].expand=function(a,b,c,d){if(fcFa(a)){this.top-=a.top;this.right+=a[fcR];this.bottom+=a[fcra];this.left-=a[fcE]}else{this.top-=a;this.right+=b;this.bottom+=c;this.left-=d}return this};
var fcUb=function(a,b){if(!a||!b)return fcd;if(b instanceof fcTb)return b[fcE]>=a[fcE]&&b[fcR]<=a[fcR]&&b.top>=a.top&&b[fcra]<=a[fcra];return b.x>=a[fcE]&&b.x<=a[fcR]&&b.y>=a.top&&b.y<=a[fcra]};var fcVb=function(a,b,c,d){this.left=a;this.top=b;fcm(this,c);fco(this,d)};fcVb[fc].clone=function(){return new fcVb(this[fcE],this.top,this[fcs],this[fcO])};fcda(fcVb[fc],function(){return"("+this[fcE]+", "+this.top+" - "+this[fcs]+"w x "+this[fcO]+"h)"});fcVb[fc].contains=function(a){return a instanceof fcVb?this[fcE]<=a[fcE]&&this[fcE]+this[fcs]>=a[fcE]+a[fcs]&&this.top<=a.top&&this.top+this[fcO]>=a.top+a[fcO]:a.x>=this[fcE]&&a.x<=this[fcE]+this[fcs]&&a.y>=this.top&&a.y<=this.top+this[fcO]};var fcXb=function(a,b,c){fcT(b)?fcWb(a,c,b):fcvb(b,fcGa(fcWb,a))},fcWb=function(a,b,c){a[fcD][fcYb(c)]=b},fcZb=function(a,b){var c=a.nodeType==9?a:a.ownerDocument||a[fcw];if(c.defaultView&&c.defaultView.getComputedStyle)if(c=c.defaultView.getComputedStyle(a,""))return c[b];return fcc},fc_b=function(a,b,c){if(b instanceof fc_){c=b[fcO];b=b[fcs]}else{if(c==fcf)fca(Error("missing height argument"));c=c}fcm(a[fcD],typeof b=="number"?fcl[fct](b)+"px":b);fco(a[fcD],typeof c=="number"?fcl[fct](c)+"px":c)},
fc0b=function(a){var b=fc$a&&!fcjb("10");if((fcZb(a,"display")||(a.currentStyle?a.currentStyle[fcya]:fcc)||a[fcD][fcya])!="none")return b?new fc_(a[fcla]||a.clientWidth,a[fcza]||a.clientHeight):new fc_(a[fcla],a[fcza]);var c=a[fcD],d=c[fcya],e=c.visibility,h=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";if(b){b=a[fcla]||a.clientWidth;a=a[fcza]||a.clientHeight}else{b=a[fcla];a=a[fcza]}c.display=d;c.position=h;c.visibility=e;return new fc_(b,a)},fc1b={},fcYb=function(a){return fc1b[a]||
(fc1b[a]=fci(a)[fcv](/\-([a-z])/g,function(b,c){return c.toUpperCase()}))},fc2b=function(a,b){a[fcD].display=b?"":"none"};var fc3b={},fc4b={};var fc5b=function(a,b,c,d){b=b||"800";c=c||"550";d=d||"friendconnect";a=fcj.open(a,d,"menubar=no,toolbar=no,dialog=yes,location=yes,alwaysRaised=yes,width="+b+",height="+c+",resizable=yes,scrollbars=1,status=1");fcj.focus&&a&&a.focus()},fc6b=function(a,b){var c=fce[fcK][fcB]().communityId;fce.rpc[fcF](fcc,"signin",fcc,c,a,b)};fcW("goog.peoplesense.util.openPopup",fc5b);fcW("goog.peoplesense.util.finishSignIn",fc6b);var fc9b=function(a,b){var c=fc7b()+"/friendconnect/invite/friends",d=fch(shindig[fcva][fcxa]());fc8b(c,d,a,b)},fc8b=function(a,b,c,d){a+="?st="+b;if(c)a+="&customMessage="+fch(c);if(d)a+="&customInviteUrl="+fch(d);b=760;if(fcY)b+=25;fc5b(a,fci(b),"515","friendconnect_invite")};fcW("goog.peoplesense.util.invite",fc9b);fcW("goog.peoplesense.util.inviteFriends",fc8b);var fc$b=function(a){this.url=a};fc$b[fc].l=function(a,b){if(this.url[fcC]("?"+a+"=")>=0||this.url[fcC]("&"+a+"=")>=0)fca(new Error("duplicate: "+a));if(b===fcc||b===fcf)return this;var c=this.url[fcC]("?")>=0?"&":"?";this.url+=c+a+"="+fch(b);return this};fcda(fc$b[fc],function(){return this.url});var fc7b=function(){return fcj.friendconnect_serverBase},fcac=function(a,b,c,d,e,h,i){b=b||"800";c=c||"550";d=d||"friendconnect";h=h||fcd;fce.rpc[fcF](fcc,"openLightboxIframe",i,a,shindig[fcva][fcxa](),b,c,d,e,fcc,fcc,fcc,h)},fcbc=function(a,b){var c=fce[fcK][fcB]().psinvite||"",d=new fc$b(fc7b()+"/friendconnect/signin/home");d.l("st",fcj.shindig[fcva][fcxa]());d.l("psinvite",c);d.l("iframeId",a);d.l("loginProvider",b);d.l("subscribeOnSignin","1");fc5b(d[fcga]());return fcd},fccc=function(){var a=
fce[fcK][fcB]().communityId;fce.rpc[fcF](fcc,"signout",fcc,a)},fcec=function(a,b){var c=fc7b()+"/friendconnect/settings/edit?st="+fch(shindig[fcva][fcxa]())+(a?"&iframeId="+fch(a):"");if(b)c=c+"&"+b;fcdc(c)},fcfc=function(a){a=fc7b()+"/friendconnect/settings/siteProfile?st="+fch(a);fcdc(a)},fcdc=function(a){var b=800,c=510;if(fcY)b+=25;fc5b(a,fci(b),fci(c))},fcgc=function(a,b,c,d){d=d||2;var e=fcc;if(b=="text"){e=fc0("div",{"class":"gfc-button-text"},fc0("div",{"class":"gfc-icon"},fc0("a",{href:"javascript:void(0);"},
c)));a[fcp](e)}else if(b=="long"||b=="standard"){e=d==1?fc0("div",{"class":"gfc-inline-block gfc-primaryactionbutton gfc-button-base"},fc0("div",{"class":"gfc-inline-block gfc-button-base-outer-box"},fc0("div",{"class":"gfc-inline-block gfc-button-base-inner-box"},fc0("div",{"class":"gfc-button-base-pos"},fc0("div",{"class":"gfc-button-base-top-shadow",innerHTML:"&nbsp;"}),fc0("div",{"class":"gfc-button-base-content"},fc0("div",{"class":"gfc-icon"},c)))))):fc0("table",{"class":"gfc-button-base-v2 gfc-button",
cellpadding:"0",cellspacing:"0"},fc0("tbody",{"class":""},fc0("tr",{"class":""},fc0("td",{"class":"gfc-button-base-v2 gfc-button-1"}),fc0("td",{"class":"gfc-button-base-v2 gfc-button-2"},c),fc0("td",{"class":"gfc-button-base-v2 gfc-button-3"}))));a[fcp](e);if(b=="standard"){b=fc0("div",{"class":"gfc-footer-msg"},"with Google Friend Connect");d==1&&a[fcp](fc0("br"));a[fcp](b)}}return e},fchc=function(a,b){if(!a)fca("google.friendconnect.renderSignInButton: missing options");var c=a[fcD]||"standard",
d=a.text,e=a.version;if(c=="standard")d=a.text||"Sign in";else if(c=="text"||c=="long")d=a.text||"Sign in with Friend Connect";var h=a.element;if(!h){h=a.id;if(!h)fca("google.friendconnect.renderSignInButton: options[id] and options[element] == null");h=fcEb(h);if(!h)fca("google.friendconnect.renderSignInButton: element "+a.id+" not found")}fcn(h,"");c=fcgc(h,c,d,e);fcj[fcqa]?c[fcqa]("click",b,fcd):c.attachEvent("onclick",b)},fcic=function(a,b){b=b||fcV(fcbc,fcc,fcc,fcc,fcc);fchc(a,b)},fcjc=function(a,
b){fce.rpc[fcF](fcc,"putReloadViewParam",fcc,a,b);var c=fce.views.getParams();c[a]=b},fckc=function(a,b){var c=new fc$b("/friendconnect/gadgetshare/friends");c.l("customMessage",a);c.l("customInviteUrl",b);c.l("container","glb");var d=310;if(fcY)d+=25;fcac(c[fcga](),fci(d),"370")};fcW("goog.peoplesense.util.getBaseUrl",fc7b);fcW("goog.peoplesense.util.finishSignIn",fc6b);fcW("goog.peoplesense.util.signout",fccc);fcW("goog.peoplesense.util.signin",fcbc);fcW("goog.peoplesense.util.editSettings",fcec);
fcW("goog.peoplesense.util.editSSProfile",fcfc);fcW("goog.peoplesense.util.setStickyViewParamToken",fcjc);fcW("google.friendconnect.renderSignInButton",fcic);fcW("goog.peoplesense.util.share",fckc);fcW("goog.peoplesense.util.userAgent.IE",fcY);var fclc={},fcmc={},fc2=function(a){this.h=new fc1;this.snippetId=a.id;this.site=a.site;a=a["view-params"];var b=a.skin;this.bc=(b?b.POSITION:"top")||"top";this.Cc={allowAnonymousPost:a.allowAnonymousPost||fcd,scope:a.scope||"SITE",docId:a.docId||"",features:a.features||"video,comment",startMaximized:"true",disableMinMax:"true",skin:b};this.absoluteBottom=fcY&&!fcjb("7");this.fixedIeSizes=fcY;fcj[fcqa]?fcj[fcqa]("resize",fcV(this.$a,this),fcd):fcj.attachEvent("onresize",fcV(this.$a,this));this.ob()};
fc2[fc].ob=function(){if(!this.site)fca(new Error("Must supply site ID."));if(!this.snippetId)fca(new Error("Must supply a snippet ID."))};fc2[fc].b=10;fc2[fc].za=1;fc2[fc].p="fc-friendbar-";fc2[fc].t=fc2[fc].p+"outer";fc2[fc].cb=fc2[fc].t+"-shadow";fc2[fc].render=function(){fck.write(this.xb());var a=fcDb(this.snippetId);fcn(a,this.N())};fc2[fc].yb=function(){var a=fcDb(this.t);return a=fc0b(a)[fcs]};
fc2[fc].$a=function(){for(var a=this.h.P(),b=0;b<a[fcr];b++)this.nc(a[b]);goog&&fc3b&&fc4b&&fcnc&&fcoc("resize")};fc2[fc].n=function(){return this.bc};fc2[fc].d=function(a){return this.p+"shadow-"+a};fc2[fc].ha=function(a){return this.p+"menus-"+a};fc2[fc].Q=function(a){return this.p+a+"Target"};fc2[fc].fa=function(a){return this.p+a+"Drawer"};fc2[fc].Pa=function(){return this.Q("")};fc2[fc].Qa=function(){return this.p+"wallpaper"};fc2[fc].La=function(){return this.fa("")};
fc2[fc].xb=function(){var a=fcj.friendconnect_imageUrl+"/",b=a+"shadow_tc.png",c=a+"shadow_bc.png",d=a+"shadow_bl.png",e=a+"shadow_tl.png",h=a+"shadow_tr.png",i=a+"shadow_br.png";a=a+"shadow_cr.png";var j=function(m,n){return fcY?'filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+m+'", sizingMethod="scale");':"background-image: url("+m+");background-repeat: "+n+"; "},k="position:absolute; top:";if(this.n()!="top"){k="position:fixed; bottom:";if(this.absoluteBottom)k="position:absolute; bottom:"}var l=
c;if(this.n()!="top")l=b;var g=0,f=[];f[g++]='<style type="text/css">';if(this.n()!="top"&&this.absoluteBottom)f[g++]="html, body {height: 100%; overflow: auto; };";f[g++]="#"+this.t+" {";f[g++]="background:#E0ECFF;";f[g++]="left:0;";f[g++]="height: "+(fcY?"35px;":"36px;");if(this.n()!="top"&&this.absoluteBottom)f[g++]="margin-right: 20px;";f[g++]="padding:0;";f[g++]=k+" 0;";f[g++]="width:100%;";f[g++]="z-index:5000;";f[g++]="}";f[g++]="#"+this.cb+" {";f[g++]=j(l,"repeat-x");f[g++]="left:0;";f[g++]=
"height:"+this.b+"px;";if(this.n()!="top"&&this.absoluteBottom)f[g++]="margin-right: 20px;";f[g++]="padding:0;";f[g++]=k+(fcY?"35px;":"36px;");f[g++]="width:100%;";f[g++]="z-index:4998;";f[g++]="}";f[g++]="."+this.La()+" {";f[g++]="display: block;";f[g++]="padding:0;";f[g++]=k+(fcY?"34px;":"35px;");f[g++]="z-index:4999;";f[g++]="}";f[g++]="."+this.Qa()+" {";f[g++]="background: white;";f[g++]="height: 100%;";f[g++]="margin-right: "+this.b+"px;";f[g++]="}";f[g++]="."+this.Pa()+" {";f[g++]="border: "+
this.za+"px solid #ccc;";f[g++]="height: 100%;";f[g++]="left: 0;";f[g++]="background-image: url("+fcj.friendconnect_imageUrl+"/loading.gif);";f[g++]="background-position: center;";f[g++]="background-repeat: no-repeat;";f[g++]="}";f[g++]="."+this.d("cr")+" {";f[g++]=j(a,"repeat-y");f[g++]="height: 100%;";f[g++]="position:absolute;";f[g++]="right: 0;";f[g++]="top: 0;";f[g++]="width:"+this.b+"px;";f[g++]="}";f[g++]="."+this.d("bl")+" {";f[g++]=j(d,"no-repeat");f[g++]="height: "+this.b+"px;";f[g++]="position:absolute;";
f[g++]="width:"+this.b+"px;";f[g++]="}";f[g++]="."+this.d("tl")+" {";f[g++]=j(e,"no-repeat");f[g++]="height: "+this.b+"px;";f[g++]="position:absolute;";f[g++]="left:0px;";f[g++]="width:"+this.b+"px;";f[g++]="}";f[g++]="."+this.d("bc")+" {";f[g++]=j(c,"repeat-x");f[g++]="height: "+this.b+"px;";f[g++]="left: "+this.b+"px;";f[g++]="position:absolute;";f[g++]="right: "+this.b+"px;";f[g++]="}";f[g++]="."+this.d("tc")+" {";f[g++]=j(b,"repeat-x");f[g++]="height: "+this.b+"px;";f[g++]="left: "+this.b+"px;";
f[g++]="margin-left: "+this.b+"px;";f[g++]="margin-right: "+this.b+"px;";f[g++]="right: "+this.b+"px;";f[g++]="}";f[g++]="."+this.d("br")+" {";f[g++]=j(i,"no-repeat");f[g++]="height: "+this.b+"px;";f[g++]="position:absolute;";f[g++]="right: 0;";f[g++]="width: "+this.b+"px;";f[g++]="}";f[g++]="."+this.d("tr")+" {";f[g++]=j(h,"no-repeat");f[g++]="height: "+this.b+"px;";f[g++]="position:absolute;";f[g++]="right: 0;";f[g++]="top: 0;";f[g++]="width: "+this.b+"px;";f[g++]="}";f[g++]="</style>";return f[fcQ]("")};
fc2[fc].N=function(){var a=['<div id="'+this.t+'"></div>','<div id="'+this.cb+'"></div>','<div id="'+this.ha(this.h.Ka())+'"></div>'];return a[fcQ]("")};fc2[fc].rb=function(a,b,c,d){if(!this.h.qb(a)){b=new fc3(this,a,b,c,d);c=this.h.Ka();d=fcDb(this.ha(c));fcn(d,b.N()+'<div id="'+this.ha(c+1)+'"></div>');this.h.set(a,b)}};fc2[fc].la=function(a){(a=this.h.get(a))&&a.drawer&&fc2b(a.drawer,fcd)};fc2[fc].dc=function(a){if(a=this.h.get(a))a.rendered=fcd};
fc2[fc].refresh=function(){for(var a=this.h.P(),b=0;b<a[fcr];b++){var c=a[b];this.la(c);this.dc(c)}};fc2[fc].Yb=function(a){for(var b=this.h.ja(),c=0;c<b[fcr];c++){var d=b[c];if(d.id==a){d.zc();break}}};fc2[fc].Xb=function(a){for(var b=this.h.ja(),c=0;c<b[fcr];c++){var d=b[c];if(d.id==a){d.Ub();break}}};fc2[fc].nc=function(a){if((a=this.h.get(a))&&a.drawer&&a.na()){a.da();a.Ha();a.ya()}};
fc2[fc].yc=function(a,b){var c=this.h.get(a);if(c){if(!c.drawer){c.drawer=fcDb(this.fa(c[fcM]));c.target=fcDb(this.Q(c[fcM]));c.sha_bc=fcFb(fck,"div",this.n()=="top"?this.d("bc"):this.d("tc"),c.drawer)[0];c.sha_cr=fcFb(fck,"div",this.d("cr"),c.drawer)[0]}for(var d=this.h.P(),e=0;e<d[fcr];e++){var h=d[e];a!==h&&this.la(h)}c.da(b);fc2b(c.drawer,fcb);fcj.setTimeout(function(){c.ya();c.Ha();c.render()},0)}};
var fc3=function(a,b,c,d,e){this.id=-1;this.bar=a;this.name=b;this.constraints=d;this.skin=e||{};fco(this,this.skin.HEIGHT||"0");this.url=fcj.friendconnect_serverBase+c;this.sha_bc=this.target=this.drawer=fcc;this.loaded=this.rendered=fcd;this.da()};
fc3[fc].da=function(a){fczb(this.constraints,a||{});fczb(this.skin,this.constraints);if(this.bar.fixedIeSizes&&this.constraints[fcE]&&this.constraints[fcR]){a=this.bar.yb();var b=this.constraints[fcE],c=this.constraints[fcR];a=a-(b+c);if(a%2){a-=1;this.skin.right+=1}fcm(this.skin,a);delete this.skin[fcE]}};
fc3[fc].ya=function(){if(this.drawer){if(this.skin[fcs]){var a=this.bar.za,b=this.bar.b,c=fcY?2:0;fc_b(this.target,this.skin[fcs],"");fc_b(this.sha_bc,this.skin[fcs]-b+2*a-c,"");this.skin.rightShadow?fc_b(this.drawer,this.skin[fcs]+b+2*a-c,""):fc_b(this.drawer,this.skin[fcs]+2*a-c,"")}if(this.skin[fcR])this.drawer[fcD].right=this.skin[fcR]+0+"px"}};
fc3[fc].Ha=function(){if(fcY&&this.drawer){var a=fc0b(this.target),b=a[fcs]-this.bar.b;a=a[fcO];if(b<0)b=0;this.sha_bc&&this.sha_bc[fcD]&&fc_b(this.sha_bc,b,"");this.sha_cr&&this.sha_cr[fcD]&&fc_b(this.sha_cr,"",a)}};
fc3[fc].N=function(){var a="display:none;",b="position: relative; ",c="",d="",e="",h="",i=!!this.skin.rightShadow;if(!i){c+="display: none; ";e+="display: none; ";d+="right: 0px; ";h+="margin-right: 0px; "}for(var j in this.skin){var k=Number(this.skin[j]);if(i&&fcQa(j,"width")==0)k+=this.bar.b;if(fcQa(j,"height")==0)b+=j+": "+k+"px; ";if(j!="rightShadow"){if(fcQa(j,"height")==0)k+=this.bar.b;if(fcQa(j,"width")==0)k+=2;a+=j+": "+k+"px; "}if(fcY&&fcQa(j,"width")==0){k-=i?2*this.bar.b:this.bar.b;d+=
j+": "+k+"px; "}}if(fcY&&(this[fcO]|0)>0){i=(this[fcO]|0)+2;c+="height: "+i+"px; "}i=0;j=[];j[i++]='<div id="'+this.bar.fa(this[fcM])+'"class="'+this.bar.La()+'"style="'+a+'"> ';if(this.bar.n()=="bottom")j[i++]='<div class="'+this.bar.d("tl")+'"></div> <div class="'+this.bar.d("tc")+'"style="'+d+'"></div> <div class="'+this.bar.d("tr")+'"style="'+e+'"></div> ';j[i++]='<div style="'+b+'"> <div class="'+this.bar.Qa()+'"style="'+h+'"><div id="'+this.bar.Q(this[fcM])+'"class="'+this.bar.Pa()+'"></div> <div class="'+
this.bar.d("cr")+'"style="'+c+'"></div> </div> </div> ';if(this.bar.n()=="top")j[i++]='<div class="'+this.bar.d("bl")+'"></div> <div class="'+this.bar.d("bc")+'"style="'+d+'"></div> <div class="'+this.bar.d("br")+'"style="'+e+'"></div> ';j[i++]="</div> ";return j[fcQ]("")};fc3[fc].zc=function(){this.rendered=this.na()};fc3[fc].Ub=function(){this.loaded=this.na()};fc3[fc].na=function(){return!!this.drawer&&this.drawer[fcD][fcya]!="none"};
fc3[fc].render=function(){if(this.rendered==fcd){var a={};a.url=this.url;a.id=this.bar.Q(this[fcM]);a.site=this.bar.site;a["view-params"]=fcU(this.bar.Cc);if(this[fcM]=="profile")a["view-params"].profileId="VIEWER";this.skin&&fczb(a["view-params"].skin,this.skin);a["view-params"].menuName=this[fcM];a["view-params"].opaque="true";a["view-params"].menuPosition=this.bar.bc;fco(a,"1px");if(fclc&&fcmc&&fc4)this.id=fc4.render(a)}};fcW("google.friendconnect.FriendBar",fc2);var fcpc="0123456789abcdefghijklmnopqrstuv",fcrc=function(a){a=new fcqc(a);if(a.pa()%5)fca(Error());for(var b=[],c=0;a.pa()>0;c++)b[c]=fcpc[fcz](a.$b(5));return b[fcQ]("")},fcqc=function(a){this.D=this.r=0;this.ca=a};fcqc[fc].pa=function(){return 8*(this.ca[fcr]-this.D)-this.r};
fcqc[fc].$b=function(a){var b=0;if(a>this.pa())fca(Error());if(this.r>0){b=255>>this.r&this.ca[this.D];var c=8-this.r,d=fcl.min(a%8,c);c=c-d;b=b>>c;a-=d;this.r+=d;if(this.r==8){this.r=0;this.D++}}for(;a>=8;){b<<=8;b|=this.ca[this.D];this.D++;a-=8}if(a>0){b<<=a;b|=this.ca[this.D]>>8-a;this.r=a}return b};var fcsc=function(){};fcsc[fc].F=function(){};fcsc[fc].I=function(){};var fctc=(new Date).getTime(),fc5=function(){},fcuc=function(){},fcvc=function(){},fcwc=function(){};fcX(fcwc,fcvc);var fcxc=function(a){if(a)for(var b in a)if(a.hasOwnProperty(b))this[b]=a[b];if(this.viewParams)for(var c in this.viewParams)if(/^FC_RELOAD_.*$/[fcja](c))this.viewParams[c]=fcc};fcxc[fc].render=function(a){var b=this;if(a){b.Ac();this.Ab(function(c){fcXb(a,"visibility","hidden");fcn(a,c);b.refresh(a,c);c=function(d){fcXb(d,"visibility","visible")};c=fcGa(c,a);fcba(c,500);b.chrome=a})}};
fcxc[fc].Ab=function(a){return this.Gb(a)};var fc6=function(a){fcxc[fcF](this,a);this.U="../../";this.rpcToken=fci(fcl[fct](2147483647*fcl[fcoa]()))};fcX(fc6,fcxc);fc6[fc].hb="gfc_iframe_";fc6[fc].ib="friendconnect";fc6[fc].Ia="";fc6[fc].oc="rpc_relay.html";fc6[fc].X=function(a){this.U=a};fc6[fc].Ac=function(){return this.Ia=fci(fcl[fct](2147483647*fcl[fcoa]()))};fc6[fc].ga=function(){return this.hb+this.Ia+"_"+this.id};
fc6[fc].refresh=function(a,b){var c=fc4.Fc,d,e={},h=fc4.Ja(this.communityId),i=h[fcx]("~"),j=fc4.sb;if(j&&i[fcr]>1){d=i[2];i=i[1];var k=[this.specUrl,this.communityId,i,j][fcQ](":");e.sig=fc4.hash(d,k);e.userId=i;e.dateStamp=j}e.container=this.ib;e.mid=this.id;e.nocache=fc4.ac;e.view=this.Z;e.parent=fc4.S;if(this.debug)e.debug="1";if(this.specUrl)e.url=this.specUrl;if(this.communityId){j=fce[fcK][fcB]().profileId;e.communityId=this.communityId;if(d=fce[fcK][fcB]().psinvite)e.psinvite=d;if(j)e.profileId=
j}e.caller=fcyc();e.rpctoken=this.rpcToken;j=fcd;d="";i=/Version\/3\..*Safari/;if((i=fcbb&&fc7a()[fcG](i))||!fc4.R[this.specUrl]&&this.viewParams){e["view-params"]=fce[fcpa][fcia](this.viewParams);d="?viewParams="+fch(e["view-params"]);j=fcb}if(this.prefs)e.prefs=fce[fcpa][fcia](this.prefs);if(this.viewParams&&this.sendViewParamsToServer)e["view-params"]=fce[fcpa][fcia](this.viewParams);if(this.locale)e.locale=this.locale;if(this.secureToken)e.st=this.secureToken;i=fc4.Oa(this.specUrl);d=i+"ifr"+
d+(this.hashData?"&"+this.hashData:"");if(fc4.Ec!=1||j||h||this.secureToken){if(h&&!e.sig)e.fcauth=h}else e.sig||(c="get");h=this.ga();fczc(h,d,c,e,a,b,this.rpcToken)};var fc7=function(){this.j={};this.S="http://"+fck[fcA].host;this.Z="default";this.ac=1;this.Jc=0;this.Gc="US";this.Hc="en";this.Ic=2147483647};fcX(fc7,fcuc);fc7[fc].v=fcxc;fc7[fc].A=new fcwc;fc7[fc].bb=function(a){this.ac=a};fc7[fc].Ga=function(a){this.Ec=a};fc7[fc].Na=function(a){return"gadget_"+a};fc7[fc].w=function(a){return this.j[this.Na(a)]};
fc7[fc].M=function(a){return new this.v(a)};fc7[fc].kb=function(a){a.id=this.Hb();this.j[this.Na(a.id)]=a};fc7[fc].Zb=0;fc7[fc].Hb=function(){return this.Zb++};var fcBc=function(){fc7[fcF](this);this.A=new fcAc};fcX(fcBc,fc7);fcBc[fc].v=fc6;fcBc[fc].W=function(a){a[fcG](/^http[s]?:\/\//)||(a=fck[fcA][fcsa][fcG](/^[^?#]+\//)[0]+a);this.S=a};fcBc[fc].H=function(a){var b=this.A.Ma(a);a.render(b)};var fcAc=function(){this.wb={}};fcX(fcAc,fcvc);
fcAc[fc].lb=function(a,b){this.wb[a]=b;var c=fck[fcy](b).className;if(!c&&c[fcr]==0)fcfa(fck[fcy](b),"gadgets-gadget-container")};fcAc[fc].Ma=function(a){return(a=this.wb[a.id])?fck[fcy](a):fcc};var fc8=function(a){fc6[fcF](this,a);a=a||{};this.Z=a.view||"profile"};fcX(fc8,fc6);fc8[fc].nb="canvas.html";fc8[fc].ub="/friendconnect/embed/";
var fcyc=function(){var a=fce[fcK][fcB]().canvas=="1"||fce[fcK][fcB]().embed=="1",b=fcc;if(a)b=fce[fcK][fcB]().caller;if(!b){a=fck[fcA];b=a.search[fcv](/([&?]?)psinvite=[^&]*(&?)/,function(c,d,e){return e?d:""});b=a.protocol+"//"+a.hostname+(a.port?":"+a.port:"")+a.pathname+b}return b};fc8[fc].wc=function(a){this.Z=a};fc8[fc].ka=function(){return this.Z};fc8[fc].getBodyId=function(){return this.ga()+"_body"};
fc8[fc].Gb=function(a){var b=this.specUrl;if(b===fcf)b="";b=(fc4.Oa(b)||this.U)+this.oc;var c=this.ga();fce.rpc.setRelayUrl(c,b);b='<div id="'+this.getBodyId()+'"><iframe id="'+c+'" name="'+c;b+=this[fcO]==0?'" style="width:1px; height:1px;':'" style="width:100%;';if(this.viewParams.opaque)b+="background-color:white;";b+='"';b+=' frameborder="0" scrolling="no"';this.viewParams.opaque||(b+=' allowtransparency="true"');b+=this[fcO]?' height="'+this[fcO]+'"':"";b+=this[fcs]?' width="'+this[fcs]+'"':
"";b+="></iframe>";if(this.showEmbedThis)b+='<a href="javascript:void(0);" onclick="google.friendconnect.container.showEmbedDialog(\''+this.divId+"'); return false;\">Embed this</a>";b+="</div>";a(b)};
fc8[fc].zb=function(){var a=fcyc();a="canvas=1&caller="+fch(a);var b=fce[fcK][fcB]().psinvite;if(b)a+="&psinvite="+fch(b);a+="&site="+fch(this.communityId);b=fcU(this.viewParams);if(b.skin!=fcc)for(var c=["BG_IMAGE","BG_COLOR","FONT_COLOR","BG_POSITION","BG_REPEAT","ANCHOR_COLOR","FONT_FACE","BORDER_COLOR","CONTENT_BG_COLOR","CONTENT_HEADLINE_COLOR","CONTENT_LINK_COLOR","CONTENT_SECONDARY_TEXT_COLOR","CONTENT_SECONDARY_LINK_COLOR","CONTENT_TEXT_COLOR","ENDCAP_BG_COLOR","ENDCAP_LINK_COLOR","ENDCAP_TEXT_COLOR",
"CONTENT_VISITED_LINK_COLOR","ALTERNATE_BG_COLOR"],d=0;d<c[fcr];d++)delete b.skin[c[d]];b=fch(fce[fcpa][fcia](b));b=b[fcv]("\\","%5C");return fc4.S+this.nb+"?url="+fch(this.specUrl)+(a?"&"+a:"")+"&view-params="+b};fc8[fc].C=function(a){a=a||fcg+this.ub+this.communityId;return this.Bb(a,"embed=1")};fc8[fc].B=function(a){return'<iframe src="'+this.C(a)+'" style="height:500px" scrolling="no" allowtransparency="true" border="0" frameborder="0" ></iframe>'};
fc8[fc].Bb=function(a,b){var c=fch(fce[fcpa][fcia](this.viewParams));c=c[fcv]("\\","%5C");return a+"?url="+fch(this.specUrl)+(b?"&"+b:"")+"&view-params="+c};fc8[fc].Kb=function(){var a=fce[fcK][fcB]().canvas=="1"||fce[fcK][fcB]().embed=="1",b=fcc;if(a)(b=fce[fcK][fcB]().caller)||(b="javascript:history.go(-1)");return b};fc8[fc].Lb=function(a){var b=fcc;if(a=="canvas")b=this.zb();else if(a=="profile")b=this.Kb();return b};
var fc9=function(){fcBc[fcF](this);fce.rpc[fcP]("signin",fc5[fc].signin);fce.rpc[fcP]("signout",fc5[fc].signout);fce.rpc[fcP]("resize_iframe",fc5[fc].ab);fce.rpc[fcP]("set_title",fc5[fc].setTitle);fce.rpc[fcP]("requestNavigateTo",fc5[fc].Za);fce.rpc[fcP]("api_loaded",fc5[fc].xa);fce.rpc[fcP]("createFriendBarMenu",fc5[fc].Ca);fce.rpc[fcP]("showFriendBarMenu",fc5[fc].db);fce.rpc[fcP]("hideFriendBarMenu",fc5[fc].Ra);fce.rpc[fcP]("putReloadViewParam",fc5[fc].Va);fce.rpc[fcP]("getViewParams",fc5[fc].Fa);
fce.rpc[fcP]("getContainerBaseTime",fc5[fc].Ea);fce.rpc[fcP]("openLightboxIframe",fc5[fc].Ua);fce.rpc[fcP]("showMemberProfile",fc5[fc].fb);fce.rpc[fcP]("closeLightboxIframe",fcV(this.u,this));fce.rpc[fcP]("setLightboxIframeTitle",fcV(this.sc,this));fce.rpc[fcP]("refreshAndCloseIframeLightbox",fcV(this.cc,this));var a=fcCc;a[fcP]();a.gb(this,"load",this.Nb);a.gb(this,"start",this.Ob);this.U="../../";this.W("");this.bb(0);this.Ga(1);this.oa=fcc;this.apiVersion="0.8";this.openSocialSecurityToken=fcc;
this.V="";this.Da={};this.Tb=fcc;this.Sb=fcd;this.sb=this.Wb=this.lastIframeLightboxOpenArguments=this.lastLightboxCallback=this.lastLightboxDialog=fcc;this.Fc="post"};fcX(fc9,fcBc);fc9[fc].qc=function(a){this.sb=a};fc9[fc].v=fc8;fc9[fc].R={};fc9[fc].uc=function(a){this.oa=a};fc9[fc].Oa=function(a){var b=fc9[fc].R[a];if(!b)if(this.oa[fcC]("http://")!==0){a=this.pb(a);b=["http://",a,this.oa][fcQ]("")}else b=this.oa;return b};
fc9[fc].pb=function(a){var b=new SHA1;a=fcIa(a);b.update(a);b=b.digest();return b=fcrc(b)};
var fcDc=function(a,b){var c=b?b:fcj.top,d=c.frames;try{if(c.frameElement.id==a)return c}catch(e){}for(c=0;c<d[fcr];++c){var h=fcDc(a,d[c]);if(h)return h}return fcc},fczc=function(a,b,c,d,e,h,i){var j="gfc_load_"+a;b='<html><head><style type="text/css">body {background:transparent;}</style>'+(fcY?'<script type="text/javascript">window.goback=function(){history.go(-1);};setTimeout("goback();", 0);<\/script>':"")+"</head><body><form onsubmit='window.goback=function(){};return false;' style='margin:0;padding:0;' id='"+
j+"' method='"+c+"' ' action='"+fce[fcK].escapeString(b)+"'>";for(var k in d)b+="<input type='hidden' name='"+k+"' value='' >";b+="</form></body></html>";c=fcDc(a);var l;try{l=c[fcw]||c.contentWindow[fcw]}catch(g){if(e&&h){fcn(e,"");fcn(e,h);c=fcDc(a);l=c[fcw]||c.contentWindow[fcw]}}i&&fce.rpc.setAuthToken(a,i);l.open();l.write(b);l.close();a=l[fcy](j);for(k in d)a[k].value=d[k];fcY&&a.onsubmit();a.submit()};
fc9[fc].vb=function(){var a=fce[fcK][fcB]().fcsite,b=fce[fcK][fcB]().fcprofile;a&&b&&fc4.I(b,a)};fc9[fc].rc=function(a,b){this.R[a]=b};fc9[fc].T=function(){var a=/Version\/3\..*Safari/;if(a=fcbb&&fc7a()[fcG](a))fck[fcA].reload();else{fc4.g!=fcc&&fc4.g.refresh();for(var b in fc4.j){a=fc4.j[b];this.H(a)}if(this.lastIframeLightboxOpenArguments!=fcc){b=this.lastIframeLightboxOpenArguments;this.u();this.F[fcL](this,b)}}};
fc9[fc].W=function(a){a[fcG](/^http[s]?:\/\//)||(a=a&&a[fcr]>0&&a.substring(0,1)=="/"?fck[fcA][fcsa][fcG](/^http[s]?:\/\/[^\/]+\//)[0]+a.substring(1):fck[fcA][fcsa][fcG](/^[^?#]+\//)[0]+a);this.S=a};fc9[fc].ea=function(a){return"fcauth"+a};fc9[fc].ia=function(a){return"fcauth"+a+"-s"};fc9[fc].hash=function(a,b){var c=new SHA1,d=fcPa(a,fcb);c=new G_HMAC(c,d,64);d=fcIa(b);c=c.Fb(d);(new Date).getTime();return fcOa(c,fcb)};
fc9[fc].Ja=function(a){return a=fcmb(this.ea(a))||fcmb(this.ia(a))||this.Da[a]||""};fc9[fc].X=function(a){this.U=a};fc9[fc].vc=function(a){this.V=a};fc9[fc].M=function(a){a=new this.v(a);a.X(this.U);return a};fc9[fc].ka=function(){return this.Z};fc9[fc].tc=function(a){this.Wb=a};var fc$=function(a){return(a=a[fcG](/_([0-9]+)$/))?fcaa(a[1],10):fcc};
fc9[fc].Y=function(a,b,c,d,e,h){if(!this.Dc){this.$(fcj.friendconnect_serverBase+"/friendconnect/styles/container.css?d="+this.V);this.Dc=fcb}var i=fcEc(d);if(this.Tb!=(i?"rtl":"ltr")){this.$(fcj.friendconnect_serverBase+"/friendconnect/styles/lightbox"+(i?"-rtl":"")+".css?d="+this.V);this.Tb=i?"rtl":"ltr"}if(!this.Sb){this.mb(fcj.friendconnect_serverBase+"/friendconnect/script/lightbox.js?d="+this.V);this.Sb=fcb}b=b||0;if(goog.ui&&goog.ui[fcma]){this.u();b=new goog.ui[fcma]("lightbox-dialog",fcb);
var j=this;goog.events.listen(b,goog.ui[fcma].EventType.AFTER_HIDE,function(){j.lastLightboxCallback&&j.lastLightboxCallback();j.Ba()});b.setDraggable(fcb);b.setDisposeOnHide(fcb);b.setBackgroundElementOpacity(0.5);b.setButtonSet(new goog.ui[fcma].ButtonSet);this.lastLightboxDialog=b;this.lastLightboxCallback=c||fcc;c=b.getDialogElement();e=e||702;fcXb(c,"width",fci(e)+"px");h&&fcXb(c,"height",fci(h)+"px");a(b);b.getDialogElement()[fcD].direction=i?"rtl":"ltr"}else if(b<5){b++;a=fcV(this.Y,this,a,
b,c,d,e,h);fcba(a,1E3)}else{this.Ba();fca(Error("lightbox.js failed to load"))}};fc9[fc].u=function(a){var b=this.lastLightboxDialog,c=this.lastLightboxCallback;this.lastLightboxCallback=fcc;if(b!=fcc){this.lastLightboxDialog.dispatchEvent(goog.ui[fcma].EventType.AFTER_HIDE);b.dispose();c!=fcc&&c(a)}};fc9[fc].Ba=function(){this.lastIframeLightboxOpenArguments=this.lastLightboxCallback=this.lastLightboxDialog=fcc};fc9[fc].sc=function(a){this.lastLightboxDialog&&this.lastLightboxDialog.setTitle(a)};
fc9[fc].cc=function(){this.u();this.T()};fc5[fc].Za=function(a,b){var c=fc$(this.f);c=fc4.w(c);var d=fcU(c.originalParams);if(b){d["view-params"]=d["view-params"]||{};d["view-params"]=b}d.locale=c.locale;if(c.useLightBoxForCanvas){d.presentation=a;fc4.lastLightboxDialog!=fcc?fc4.u():fc4.eb(d)}else if((c=c.Lb(a))&&fck[fcA][fcsa]!=c)if(fce[fcK][fcB]().embed=="1")try{fcj.parent.location=c}catch(e){fcj.top.location=c}else fck[fcA].href=c};
fc9[fc].eb=function(a,b){a=a||{};var c=a.locale,d=fcEc(c),e=this;this.u();this.Y(function(h){var i=fc0("div",{},fc0("div",{id:"gadget-signin",style:"background-color:#ffffff;height:32px;"}),fc0("div",{id:"gadget-lb-canvas",style:"background-color:#ffffff;"}));h.getTitleTextElement()[fcp](fc0("div",{id:"gfc-canvas-title",style:"color:#000000;"}));h.getContentElement()[fcp](i);h.setVisible(fcb);i=fcU(a);var j=fcIb(fcj),k=fcl[fct](j[fcO]*0.7);j={};j.BORDER_COLOR="#cccccc";j.ENDCAP_BG_COLOR="#e0ecff";
j.ENDCAP_TEXT_COLOR="#333333";j.ENDCAP_LINK_COLOR="#0000cc";j.ALTERNATE_BG_COLOR="#ffffff";j.CONTENT_BG_COLOR="#ffffff";j.CONTENT_LINK_COLOR="#0000cc";j.CONTENT_TEXT_COLOR="#333333";j.CONTENT_SECONDARY_LINK_COLOR="#7777cc";j.CONTENT_SECONDARY_TEXT_COLOR="#666666";j.CONTENT_HEADLINE_COLOR="#333333";i.id="gadget-lb-canvas";fco(i,fcl.min(498,k)+"px");i.maxHeight=k;if(i.keepMax){fco(i,k);fcXb(h.getContentElement(),"height",k+35+"px")}i["view-params"]=i["view-params"]||{};i["view-params"].opaque=fcb;i["view-params"].skin=
i["view-params"].skin||{};fcHa(i["view-params"].skin,j);e.render(i);k={};k.id="gadget-signin";k.presentation="canvas";k.site=i.site;k.titleDivId="gfc-canvas-title";k["view-params"]={};k["view-params"].opaque=fcb;k.keepMax=i.keepMax;if(i.securityToken)k.securityToken=i.securityToken;i=fcU(j);i.ALIGNMENT=d?"left":"right";e.Xa(k,i);h.reposition()},fcf,b,c)};fc5[fc].db=function(a,b){fc4.g!=fcc&&fc4.g.yc(a,b)};fc5[fc].Ra=function(a){fc4.g!=fcc&&fc4.g.la(a)};
fc5[fc].Ua=function(a,b,c,d,e,h,i,j,k,l){var g=this.f;a=a+(a[fcC]("?")>=0?"&":"?")+"iframeId="+g;fc4.F(a,b,c,d,e,h,i,j,k,l,this.callback)};
fc9[fc].F=function(a,b,c,d,e,h,i,j,k,l,g){var f=fcIb(fcj);d!=fcc||(d=fcl[fct](f[fcO]*0.7));c!=fcc||(c=fcl[fct](f[fcs]*0.7));var m=[];for(f=0;f<arguments[fcr]&&f<10;f++)m[fcq](arguments[f]);if(!a[0]=="/")fca(new Error("lightbox iframes must be relative to fc server"));var n=this,o=h?fcU(h):{},s=fci(fcl[fct](2147483647*fcl[fcoa]())),p="gfc_lbox_iframe_"+s;fce.rpc.setAuthToken(p,s);if(!b)b=fc4.openSocialSecurityToken;var t=fc4.openSocialSiteId;fc4.Y(function(q){n.lastIframeLightboxOpenArguments=m;var v=
"st="+fch(b)+"&parent="+fch(fc4.S)+"&rpctoken="+fch(s);if(!j){o.iframeId=p;o.iurl=a;a=fcg+"/friendconnect/lightbox"}var r=d-54;fco(o,r);var u='<iframe id="'+p;u+='" width="100%" height="'+r+'" frameborder="0" scrolling="auto"></iframe>';q.setContent(u);if(e){q.setTitle(e);if(l){r=q.getTitleTextElement();fcCb(r,"lightbox-dialog-title-small-text")}}q.setVisible(fcb);k||(o.fcauth=fc4.Ja(t));a+=(a[fcC]("?")>=0?"&":"?")+v+"&communityId="+t;fczc(p,a,"POST",o,fcc,fcc,fcc)},fcf,g,fcf,c,d)};
fc5[fc].Fa=function(){var a=fc$(this.f);a=fc4.w(a);return a.viewParams};fc5[fc].Ea=function(){return fctc};fc5[fc].Va=function(a,b){var c=fc$(this.f);c=fc4.w(c);c.viewParams[a]=b};fc9[fc].Nb=function(a,b){fc4.g!=fcc&&fc4.g.Xb(b)};fc9[fc].Ob=function(a,b){fc4.g!=fcc&&fc4.g.Yb(b)};fc5[fc].Ca=function(a,b,c,d){fc4.g!=fcc&&fc4.g.rb(a,b,c,d)};fc9[fc].H=function(a){var b=this.A.Ma(a);a.render(b);this.A.postProcessGadget&&this.A.postProcessGadget(a)};
fc5[fc].signout=function(a){fc4.Wa(fc4.ea(a));fc4.Wa(fc4.ia(a));fc4.Da={};fc4.T();return fcd};fc9[fc].Wa=function(a){var b=fck[fcA].pathname;b=b[fcx]("/");for(var c=0;c<b[fcr];c++){for(var d=new Array(c+1),e=0;e<c+1;e++)d[e]=b[e];fcnb(a,d[fcQ]("/")+"/")}};
fc5[fc].ab=function(a){var b=fck[fcy](this.f);if(b&&a>0)fco(b[fcD],a+"px");if((b=fck[fcy](this.f+"_body"))&&a>0)fco(b[fcD],a+"px");if(b=fc$(this.f)){var c=fc4.w(b);if(c){if((b=fck[fcy](c.divId))&&a>0){if(c&&c[fcta]&&c[fcta]<a){a=c[fcta];b[fcD].overflowY="auto"}fco(b[fcD],a+"px")}!c.keepMax&&c.ka()=="canvas"&&fc4.lastLightboxDialog&&fc4.lastLightboxDialog.reposition();fcXb(c.chrome,"visibility","visible")}}};
fc5[fc].setTitle=function(a){var b=fc$(this.f);b=fc4.w(b);if(b=b.titleDivId)fcn(fck[fcy](b),fce[fcK].escapeString(a))};fc5[fc].signin=function(a,b,c){fclb(fc4.ea(a),b,31104E3,c);fclb(fc4.ia(a),b,-1,c);fc4.Da[a]=b;fc4.T()};var fcGc=function(a){fchc(a,fcFc)};fc9[fc].ic=function(a,b){b&&this.m(b,a);var c={};c.url=fcg+"/friendconnect/gadgets/members.xml";this.render(this.s(a,c))};
fc9[fc].kc=function(a,b){b&&this.m(b,a);var c={};c.url=fcg+"/friendconnect/gadgets/review.xml";c["view-params"]={startMaximized:"true",disableMinMax:"true",features:"review"};this.render(this.s(a,c))};fc9[fc].ra=function(a,b){b&&this.m(b,a);var c={};c.url=fcg+"/friendconnect/gadgets/wall.xml";c["view-params"]={startMaximized:"true",disableMinMax:"true",features:"comment"};this.render(this.s(a,c))};
fc9[fc].Xa=function(a,b){b&&this.m(b,a);var c={};c.url=fcg+"/friendconnect/gadgets/signin.xml";fco(c,32);this.render(this.s(a,c))};fc9[fc].fc=function(a,b){b&&this.m(b,a);a.prefs=a.prefs||{};a.sendViewParamsToServer=fcb;a.prefs.hints=fcj.google_hints;var c={};c.url=fcg+"/friendconnect/gadgets/ads.xml";fco(c,90);this.render(this.s(a,c))};
fc9[fc].ua=function(a,b){if(a.id){b&&this.m(b,a);a["view-params"]=a["view-params"]||{};a["view-params"].opaque="true";this.g=new fc2(a);this.g.render();var c={};c.url=fcg+"/friendconnect/gadgets/friendbar.xml";a.id=this.g.t;fco(a,"1");this.render(this.s(a,c))}};fc9[fc].hc=fc9[fc].ua;fc9[fc].ta=function(a,b){a=a||{};a.url=fcg+"/friendconnect/gadgets/signin.xml";a.site=a.site||fce[fcK][fcB]().site;fco(a,32);this.sa(a,b)};fc9[fc].gc=fc9[fc].ta;fc9[fc].mc=fc9[fc].ra;
fc9[fc].m=function(a,b){var c=b["view-params"];if(!c){c={};b["view-params"]=c}c.skin=a};fc9[fc].s=function(a,b){var c=this.Ta(b,a);if(b["view-params"]){var d=b["view-params"];if(a["view-params"])d=this.Ta(d,a["view-params"]);c["view-params"]=d}return c};fc9[fc].jc=function(a,b){b&&this.m(b,a);this.render(a)};fc9[fc].Ta=function(a,b){var c={},d;for(d in b)c[d]=b[d];for(d in a)if(typeof c[d]=="undefined")c[d]=a[d];return c};
fc9[fc].render=function(a){this.openSocialSiteId=a.site;a["view-params"]=a["view-params"]||{};var b=this.M({divId:a.id,specUrl:a.url,communityId:a.site,height:a[fcO],locale:a.locale||this.Wb,secureToken:a.securityToken,titleDivId:a.titleDivId,showEmbedThis:a.showEmbedThis,useLightBoxForCanvas:a.useLightBoxForCanvas||typeof a.useLightBoxForCanvas=="undefined"&&fcj.friendconnect_lightbox,viewParams:a["view-params"],prefs:a.prefs,originalParams:a,debug:a.debug,maxHeight:a[fcta],sendViewParamsToServer:a.sendViewParamsToServer,
keepMax:a.keepMax});a.presentation&&b.wc(a.presentation);this.kb(b);this.A.lb(b.id,a.id);fcba(function(){fc4.H(b)},0);return b.id};fc9[fc].lc=function(a,b){a=a||{};a.presentation="canvas";this.Ya(a,b)};
fc9[fc].Ya=function(a,b,c){a=a||{};a.url=fce[fcK][fcB]().url;a.site=fce[fcK][fcB]().site||a.site;var d=fce[fcK][fcB]()["view-params"];if(d)a["view-params"]=fce[fcpa].parse(decodeURIComponent(d));if(c){a["view-params"]=a["view-params"]||{};a["view-params"].useFixedHeight=fcb;fco(a["view-params"],c);b=b||{};b.HEIGHT=fci(c)}this.sa(a,b)};fc9[fc].sa=function(a,b){a=a||{};b&&this.m(b,a);if(fce[fcK][fcB]().canvas=="1")a.presentation="canvas";else if(fce[fcK][fcB]().embed=="1")a.presentation="embed";fc4.render(a)};
fc9[fc].Mb=function(){var a=fce[fcK][fcB]().caller;if(a&&fck[fcA][fcsa]!=a&&a[fcr]>8&&(a.substr(0,7)[fcAa]()=="http://"||a.substr(0,8)[fcAa]()=="https://"))fck[fcA].href=a;else if(a=fce[fcK][fcB]().site)fck[fcA].href=fcg+"/friendconnect/directory/site?id="+a;else fcj.history.go(-1)};fc9[fc].G="";fc9[fc].Ib=function(){return this.G};fc9[fc].pc=function(a){this.apiVersion=a};fc9[fc].$=function(a){var b=fck[fcI]("link");b[fcJ]("rel","stylesheet");b[fcJ]("type","text/css");b[fcJ]("href",a);fck.getElementsByTagName("head")[0][fcp](b)};
fc9[fc].mb=function(a){var b=fck[fcI]("script");b[fcJ]("src",a);b[fcJ]("type","text/javascript");fck.getElementsByTagName("head")[0][fcp](b)};fc9[fc].Aa=function(a){if(fck[fcna])a();else fcj[fcqa]?fcj[fcqa]("load",a,fcd):fcj.attachEvent("onload",a)};
fc9[fc].ma=function(a){if(!a.site)fca("API not loaded, please pass in a 'site'");this.$(fcj.friendconnect_serverBase+"/friendconnect/styles/container.css?d="+this.V);this.openSocialSiteId=a.site;this.apiLoadedCallback=a.onload;this.Aa(fcV(this.Sa,this,a,"fc-opensocial-api"))};fc9[fc].Vb=fc9[fc].ma;fc9[fc].Pb=function(a){var b={};b.site=this.openSocialSiteId;b["view-params"]={txnId:a};this.Sa(b,"gfc-"+a)};
fc9[fc].ec=function(a){var b={};for(var c in this.j){var d=this.j[c];if(d.viewParams&&d.viewParams.txnId==a)break;else b[c]=d}this.j=b;(a=fck[fcy]("gfc-"+a))&&a[fcN]&&a[fcN].removeChild&&a[fcN].removeChild(a)};fc9[fc].Cb=function(){return"<Templates xmlns:fc='http://www.google.com/friendconnect/makeThisReal'>  <Namespace prefix='fc' url='http://www.google.com/friendconnect/makeThisReal'/>  <Template tag='fc:signIn'>    <div onAttach='google.friendconnect.renderSignInButton({element: this})'></div>  </Template></Templates>"};
fc9[fc].Jb=function(){return"<Templates xmlns:os='http://ns.opensocial.org/2008/markup'><Namespace prefix='os' url='http://ns.opensocial.org/2008/markup'/><Template tag='os:Name'>  <span if='${!My.person.profileUrl}'>${My.person.displayName}</span>  <a if='${My.person.profileUrl}' href='${My.person.profileUrl}'>      ${My.person.displayName}</a></Template><Template tag='os:Badge'>  <div><img if='${My.person.thumbnailUrl}' src='${My.person.thumbnailUrl}'/>   <os:Name person='${My.person}'/></div></Template><Template tag='os:PeopleSelector'>  <select onchange='google.friendconnect.PeopleSelectorOnChange(this)' name='${My.inputName}'          multiple='${My.multiple}' x-var='${My.var}' x-max='${My.max}'          x-onselect='${My.onselect}'>    <option repeat='${My.group}' value='${Cur.id}' selected='${Cur.id == My.selected}'>        ${Cur.displayName}    </option>  </select></Template></Templates>"};
var fcHc=function(a){var b;if(a.multiple){b=[];for(var c=0;c<a[fcH][fcr];c++)a[fcH][c].selected&&b[fcq](a[fcH][c].value);c=a.getAttribute("x-max");try{c=1*c}catch(d){c=0}if(c&&b[fcr]>c&&a["x-selected"]){b=a["x-selected"];for(c=0;c<a[fcH][fcr];c++){a[fcH][c].selected=fcd;for(var e=0;e<b[fcr];e++)if(a[fcH][c].value==b[e]){a[fcH][c].selected=fcb;break}}}}else b=a[fcH][a.selectedIndex].value;a["x-selected"]=b;(c=a.getAttribute("x-var"))&&fcj.opensocial[fcka]&&fcj.opensocial[fcka].getDataContext().putDataSet(c,
b);if(c=a.getAttribute("x-onselect"))if(fcj[c]&&typeof fcj[c]=="function")fcj[c](b);else if(a["x-onselect-fn"])a["x-onselect-fn"][fcL](a);else a["x-onselect-fn"]=new Function(c)};
fc9[fc].Sa=function(a,b){fcj.opensocial.template.Loader.loadContent(this.Jb());fcj.opensocial.template.Loader.loadContent(this.Cb());fcj.opensocial[fcka].processDocumentMarkup();var c=fck[fcI]("div");c.id=b;fco(c[fcD],"0px");fcm(c[fcD],"0px");c[fcD].position="absolute";c[fcD].visibility="hidden";fck[fcna][fcp](c);var d={};d.url=fcg+"/friendconnect/gadgets/osapi-"+this.apiVersion+".xml";fco(d,0);d.id=c.id;d.site=a.site;d["view-params"]=a["view-params"];this.render(d)};
fc5[fc].xa=function(){fc4.G=this.f;fc4.openSocialSecurityToken=this.a[0];var a=fc4.openSocialSecurityToken;fcj.opensocial[fcka].executeRequests();fcj.opensocial.template.process();if(fc4.apiLoadedCallback){a=fcGa(fc4.apiLoadedCallback,a);fcba(a,0)}};fc9[fc].O=function(a){var b=fcc;for(var c in this.j)if(this.j[c].divId==a){b=this.j[c];break}return b};fc9[fc].C=function(a,b){var c=this.O(a),d=fcc;if(c)d=c.C(b);return d};fc9[fc].B=function(a,b){var c=this.O(a),d=fcc;if(c)d=c.B(b);return d};
fc9[fc].xc=function(a,b){this.Y(function(c){var d=fck.createTextNode("Copy & paste this code into your site.");c.getContentElement()[fcp](d);c.getContentElement()[fcp](fck[fcI]("br"));d=fc4.B(a,b);var e=fck[fcI]("textarea");fcn(e,d);e[fcJ]("style","width:500px;");c.getContentElement()[fcp](e);c.setVisible(fcb)})};
var fcIc=["ar","dv","fa","iw","he","ku","pa","sd","tk","ug","ur","yi"],fcEc=function(a){a=a;var b=fcd;if(a){a=a[fcx]("_")[0];b=fcqb(fcIc,a)}else b=(a=fcZb(fck[fcna],"direction"))&&a=="rtl";return b};fc5[fc].fb=function(a,b){var c=0,d=fcc;try{var e=fc$(this.f),h=fc4.w(e);d=h.secureToken;c=h.communityId}catch(i){}if(b)c=b;fc4.I(a,c,this.callback,d)};
fc9[fc].I=function(a,b,c,d){b=b||this.openSocialSiteId;a={keepMax:fcb,presentation:"canvas",url:fcg+"/friendconnect/gadgets/members.xml",site:b,"view-params":{profileId:a}};if(d)a.securityToken=d;this.eb(a,c)};fc9[fc].Eb=function(a){var b=fcc;if((a=this.O(a))&&a.secureToken)b=a.secureToken;return b};fc9[fc].Db=function(a){var b=fcc;if((a=this.O(a))&&a.communityId)b=a.communityId;return b};
var fcFc=function(a){fc4.G&&fcbc(fc4.G,a)},fcJc=function(){fc5[fc].signout(fc4.openSocialSiteId)},fcKc=function(){fcec(fc4.G)},fcLc=function(a,b){fc9b(a,b)},fcnc=function(){this.o={}};fcnc[fc].register=function(){fce.rpc[fcP]("subscribeEventType",fc5[fc].subscribe);fce.rpc[fcP]("publishEvent",fc5[fc].publish)};fc5[fc].subscribe=function(a){var b=fcCc;b.o[a]=b.o[a]||[];a=b.o[a];a[a[fcr]]={frameId:this}};fcnc[fc].gb=function(a,b,c){var d=this;d.o[b]=d.o[b]||[];b=d.o[b];b[b[fcr]]={container:a,callback:c}};
fc5[fc].publish=function(a){var b=fcCc,c=0;if(this.f)c=fc$(this.f);b.o[a]=b.o[a]||[];b=b.o[a];for(var d=0;d<b[fcr];d++)b[d].container?b[d].callback[fcF](b[d].container,a,c):fce.rpc[fcF](b[d].frameId,a,fcc,a,c)};var fcoc=fcV(fc5[fc].publish,new fc5),fcCc=new fcnc,fc4=new fc9;fc4.Aa(fc4.vb);fcW("google.friendconnect.container",fc4);fcW("google.friendconnect.container.refreshGadgets",fc4.T);fcW("google.friendconnect.container.setParentUrl",fc4.W);fcW("google.friendconnect.container.setServerBase",fc4.X);
fcW("google.friendconnect.container.setServerVersion",fc4.vc);fcW("google.friendconnect.container.createGadget",fc4.M);fcW("google.friendconnect.container.openLightboxIframe",fc4.F);fcW("google.friendconnect.container.renderGadget",fc4.H);fcW("google.friendconnect.container.render",fc4.render);fcW("google.friendconnect.container.goBackToSite",fc4.Mb);fcW("google.friendconnect.container.renderMembersGadget",fc4.ic);fcW("google.friendconnect.container.renderReviewGadget",fc4.kc);
fcW("google.friendconnect.container.renderCommentsGadget",fc4.ra);fcW("google.friendconnect.container.renderSignInGadget",fc4.Xa);fcW("google.friendconnect.container.renderFriendBar",fc4.hc);fcW("google.friendconnect.container.renderSocialBar",fc4.ua);fcW("google.friendconnect.container.renderCanvasSignInGadget",fc4.gc);fcW("google.friendconnect.container.renderUrlCanvasGadget",fc4.lc);fcW("google.friendconnect.container.renderEmbedSignInGadget",fc4.ta);
fcW("google.friendconnect.container.renderUrlEmbedGadget",fc4.Ya);fcW("google.friendconnect.container.renderEmbedGadget",fc4.sa);fcW("google.friendconnect.container.renderWallGadget",fc4.mc);fcW("google.friendconnect.container.renderAdsGadget",fc4.fc);fcW("google.friendconnect.container.renderOpenSocialGadget",fc4.jc);fcW("google.friendconnect.container.setNoCache",fc4.bb);fcW("google.friendconnect.container.enableProxy",fc4.Ga);fcW("google.friendconnect.container.setDomain",fc4.rc);
fcW("google.friendconnect.container.setLockedDomainSuffix",fc4.uc);fcW("google.friendconnect.container.setLocale",fc4.tc);fcW("google.friendconnect.container.loadOpenSocialApi",fc4.Vb);fcW("google.friendconnect.container.initOpenSocialApi",fc4.ma);fcW("google.friendconnect.container.getOpenSocialApiIframeId",fc4.Ib);fcW("google.friendconnect.container.setApiVersion",fc4.pc);fcW("google.friendconnect.container.getEmbedUrl",fc4.C);fcW("google.friendconnect.container.getEmbedHtml",fc4.B);
fcW("google.friendconnect.container.getGadgetSecurityToken",fc4.Eb);fcW("google.friendconnect.container.getGadgetCommunityId",fc4.Db);fcW("google.friendconnect.container.showEmbedDialog",fc4.xc);fcW("google.friendconnect.container.showMemberProfile",fc4.I);fcW("google.friendconnect.requestSignIn",fcFc);fcW("google.friendconnect.requestSignOut",fcJc);fcW("google.friendconnect.requestSettings",fcKc);fcW("google.friendconnect.requestInvite",fcLc);fcW("google.friendconnect.renderSignInButton",fcGc);
fcW("google.friendconnect.container.invokeOpenSocialApiViaIframe",fc4.Pb);fcW("google.friendconnect.container.removeOpenSocialApiViaIframe",fc4.ec);fcW("google.friendconnect.userAgent.WEBKIT",fcbb);fcW("google.friendconnect.userAgent.IE",fcY);fcW("google.friendconnect.PeopleSelectorOnChange",fcHc);fcW("google.friendconnect.container.setDateStamp_",fc4.qc);
google.friendconnect.container.setServerBase('http://www.a.friendconnect.gmodules.com/ps/');google.friendconnect.container.setServerVersion('0.546.6');google.friendconnect.container.setApiVersion('0.8');
google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/activities.xml', 'http://q8j0igk2u2f6kf7jogh6s66md2d7r154.a.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/ads.xml', 'http://t767uouk8skpac15v8ue0n16regb3m2t.a.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/ask.xml', 'http://uofgf6lm45rimd9jp6hn983ul6n2en81.a.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/friendbar.xml', 'http://p7rjrrl49ose4gob99eonlvp0drmce3d.a.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/content_reveal.xml', 'http://n0mc7q283f00tpk3uifa7sjv4hmrults.a.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/chat.xml', 'http://4mmefl67as0q39gf1o4pnocubqmdgei0.a.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/donate.xml', 'http://7v4nflqvq38notsghmcr5a9t6o9g6kn4.a.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/lamegame.xml', 'http://ffbrstu9puk7qmt45got9mqe5k7ijrs4.a.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/map.xml', 'http://k0dfp8trn0hi5d2spmo7jmc88n6kr1cc.a.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/members.xml', 'http://r1rk9np7bpcsfoeekl0khkd2juj27q3o.a.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/newsletterSubscribe.xml', 'http://k830suiki828goudg9448o6bp0tpu5r3.a.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/poll.xml', 'http://1ivjd75aqp679vbgohjv74tlhn13rgdu.a.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/recommended_pages.xml', 'http://iqavu79a908u5vcecp0pq80hhbhkv33b.a.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/review.xml', 'http://r85jiaoot111joesr8bilfhfeslcc496.a.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/sample.xml', 'http://785aoao97uti9iqffknjp5e0kn2ljlm4.a.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/signin.xml', 'http://8fkcem1ves287v3g5lu9gep1j91p3kk1.a.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/wall.xml', 'http://o29lt44ell30t7ljcdfr8lq2mjakv2co.a.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/osapi-0.8.xml', 'http://mc8tdi0ripmbpds25eboaupdulritrp6.a.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setLockedDomainSuffix('.a.friendconnect.gmodules.com/ps/');
window['__ps_loaded__'] = true; 
 }google.friendconnect_ = google.friendconnect;
google.friendconnect.container.setDateStamp_('1285beea672');