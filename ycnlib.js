var ycnlib=window.ycnlib||{};var PRO_FILES={};var YUI_FILES=(function(){var B="http://cn.yui.yahooapis.com/",A="/assets/skins/sam",C="2.5.1";return{setVersion:function(D){C=D||C;},setBaseUrl:function(D){B=D||B;},setSkinUrl:function(D){A=D||A;},getVersion:function(){return C;},getBaseUrl:function(){return B;},getSkinUrl:function(){return A;},json:"json",get:"get",selector:"selector",charts:"charts",profiler:"profiler",yahoo:"yahoo",dom:"dom",event:"event",yahoo_dom_event:"yahoo-dom-event",animation:"animation",element:"element",dragdrop:"dragdrop",connection:"connection",autocomplete:"autocomplete",button:"button",calendar:"calendar",colorpicker:"colorpicker",container:"container",datasource:"datasource",datatable:"datatable",editor:"editor",history:"history",imageloader:"imageloader",logger:"logger",menu:"menu",slider:"slider",tabview:"tabview",treeview:"treeview",utilities:"utilities",yuiloader:"yuiloader",yuitest:"yuitest",container_core:B+C+"/build/container/container_core-min.js",skin_css:B+C+"/build"+A+"/skin.css",calendar_css:B+C+"/build/calendar"+A+"/calendar.css",autocomplete_css:B+C+"/build/autocomplete"+A+"/autocomplete.css",button_css:B+C+"/build/button"+A+"/button.css",editor_css:B+C+"/build/editor"+A+"/editor.css",container_css:B+C+"/build/container"+A+"/container.css",treeview_css:B+C+"/build/treeview"+A+"/treeview.css",tabview_css:B+C+"/build/tabview"+A+"/tabview.css",menu_css:B+C+"/build/menu"+A+"/menu.css",datatable_css:B+C+"/build/datatable"+A+"/datatable.css",colorpicker_css:B+C+"/build/colorpicker"+A+"/colorpicker.css",logger_css:B+C+"/build/logger"+A+"/logger.css"};})();ycnlib.ready=false;ycnlib.callBackQueue=[];ycnlib.loadingCompleted={};ycnlib.addFile=function(B,C){var A=(typeof A!=="undefined")?A:false;if(A){PRO_FILES[B]=C;}else{if(!PRO_FILES[B]){PRO_FILES[B]=C;}}};ycnlib.checkAllCompleted=function(){var B=ycnlib,A=false;for(var C in B.loadingCompleted){if(!B.loadingCompleted[C]){return false;}else{A=true;}}return A;};ycnlib.fireCallBack=function(){if(!ycnlib.checkAllCompleted()){window.setTimeout(arguments.callee,10);return ;}var A=ycnlib.callBackQueue,D;for(var C=0,B=A.length;C<B;C++){if(D=A[C]){D();A[C]=null;delete A[C];}}};ycnlib.require=function(){if(!ycnlib.ready){var G=arguments;setTimeout(function(){ycnlib.require.apply(this,G);},2);return ;}var G=arguments,I,B="u"+Math.floor(Math.random()*1000),K,J,A,C=[],H=[],F=function(M,N){var L=M.replace(/http|[\!\@\#\$\%\^\&\*\(\)\_\-\+\=\`\~\.\<\>\;\'\"]/ig,"").replace(/\//g,"_");C[C.length]={name:L,fullpath:M,type:N,varName:L};return L;};for(var E=0,D=G.length;E<D;E++){J=G[E];if(YAHOO.lang.isString(J)){if(/\.css|\.js/i.test(J)){H[H.length]=F(J,J.substring(J.lastIndexOf(".")+1));}else{H[H.length]=J;}}else{H[H.length]=F(J.url,J.type);}}if(!H){return ;}K=new ycnlib.YUILoader();for(var E=0,D=C.length;E<D;E++){K.addModule(C[E]);}K.require(H);K.base=YUI_FILES.getBaseUrl()+YUI_FILES.getVersion()+"/build/";K.loadOptional=true;K.onSuccess=function(){ycnlib.loadingCompleted[B]=true;};ycnlib.loadingCompleted[B]=false;K.insert();};var addOnLoad=function(A){if(!ycnlib.ready){setTimeout(function(){addOnLoad(A);},2);return ;}if(!YAHOO.lang.isFunction(A)){return ;}ycnlib.callBackQueue[ycnlib.callBackQueue.length]=A;ycnlib.fireCallBack();};ycnlib.init=function(){ycnlib.ready=true;ycnlib.YUILoader=function(A){this.constructor.superclass.constructor.call(this,A);};YAHOO.extend(ycnlib.YUILoader,YAHOO.util.YUILoader);};(function(){var C=function(){return typeof YAHOO==="undefined"||!YAHOO.util.YUILoader||!YAHOO.util.Dom||!YAHOO.util.Event;};if(C()){var B=document.getElementsByTagName("head")[0];if(!B){return ;}var D=document.createElement("script");D.src=YUI_FILES.getBaseUrl()+YUI_FILES.getVersion()+"/build/yuiloader-dom-event/yuiloader-dom-event.js";D.type="text/javascript";B.appendChild(D);void function A(){if(C()){window.setTimeout(arguments.callee,2);}else{ycnlib.init();}}();}else{ycnlib.init();}})();