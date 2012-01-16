/*
 * Piwik - Web Analytics
 *
 * JavaScript tracking client
 *
 * @link http://piwik.org
 * @source http://dev.piwik.org/trac/browser/trunk/js/piwik.js
 * @license http://www.opensource.org/licenses/bsd-license.php Simplified BSD
 */
if(!this.JSON2){this.JSON2={}}(function(){function d(f){return f<10?"0"+f:f}function l(n,m){var f=Object.prototype.toString.apply(n);if(f==="[object Date]"){return isFinite(n.valueOf())?n.getUTCFullYear()+"-"+d(n.getUTCMonth()+1)+"-"+d(n.getUTCDate())+"T"+d(n.getUTCHours())+":"+d(n.getUTCMinutes())+":"+d(n.getUTCSeconds())+"Z":null}if(f==="[object String]"||f==="[object Number]"||f==="[object Boolean]"){return n.valueOf()}if(f!=="[object Array]"&&typeof n.toJSON==="function"){return n.toJSON(m)}return n}var c=new RegExp("[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]","g"),e='\\\\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]',i=new RegExp("["+e,"g"),j,b,k={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},h;
function a(f){i.lastIndex=0;return i.test(f)?'"'+f.replace(i,function(m){var n=k[m];return typeof n==="string"?n:"\\u"+("0000"+m.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+f+'"'}function g(s,p){var n,m,t,f,q=j,o,r=p[s];if(r&&typeof r==="object"){r=l(r,s)}if(typeof h==="function"){r=h.call(p,s,r)}switch(typeof r){case"string":return a(r);case"number":return isFinite(r)?String(r):"null";case"boolean":case"null":return String(r);case"object":if(!r){return"null"}j+=b;o=[];if(Object.prototype.toString.apply(r)==="[object Array]"){f=r.length;for(n=0;n<f;n+=1){o[n]=g(n,r)||"null"}t=o.length===0?"[]":j?"[\n"+j+o.join(",\n"+j)+"\n"+q+"]":"["+o.join(",")+"]";j=q;return t}if(h&&typeof h==="object"){f=h.length;for(n=0;n<f;n+=1){if(typeof h[n]==="string"){m=h[n];t=g(m,r);if(t){o.push(a(m)+(j?": ":":")+t)}}}}else{for(m in r){if(Object.prototype.hasOwnProperty.call(r,m)){t=g(m,r);if(t){o.push(a(m)+(j?": ":":")+t)}}}}t=o.length===0?"{}":j?"{\n"+j+o.join(",\n"+j)+"\n"+q+"}":"{"+o.join(",")+"}";j=q;
return t}}if(typeof JSON2.stringify!=="function"){JSON2.stringify=function(o,m,n){var f;j="";b="";if(typeof n==="number"){for(f=0;f<n;f+=1){b+=" "}}else{if(typeof n==="string"){b=n}}h=m;if(m&&typeof m!=="function"&&(typeof m!=="object"||typeof m.length!=="number")){throw new Error("JSON.stringify")}return g("",{"":o})}}if(typeof JSON2.parse!=="function"){JSON2.parse=function(o,f){var n;function m(s,r){var q,p,t=s[r];if(t&&typeof t==="object"){for(q in t){if(Object.prototype.hasOwnProperty.call(t,q)){p=m(t,q);if(p!==undefined){t[q]=p}else{delete t[q]}}}}return f.call(s,r,t)}o=String(o);c.lastIndex=0;if(c.test(o)){o=o.replace(c,function(p){return"\\u"+("0000"+p.charCodeAt(0).toString(16)).slice(-4)})}if((new RegExp("^[\\],:{}\\s]*$")).test(o.replace(new RegExp('\\\\(?:["\\\\/bfnrt]|u[0-9a-fA-F]{4})',"g"),"@").replace(new RegExp('"[^"\\\\\n\r]*"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?',"g"),"]").replace(new RegExp("(?:^|:|,)(?:\\s*\\[)+","g"),""))){n=eval("("+o+")");
return typeof f==="function"?m({"":n},""):n}throw new SyntaxError("JSON.parse")}}}());var _paq=_paq||[],Piwik=Piwik||(function(){var f,a={},p=document,c=navigator,A=screen,x=window,m=false,v=[],h=x.encodeURIComponent,w=x.decodeURIComponent,d=unescape,B,D;function r(i){return typeof i!=="undefined"}function n(i){return typeof i==="function"}function z(i){return typeof i==="object"}function j(i){return typeof i==="string"||i instanceof String}function G(){var L,N,M;for(L=0;L<arguments.length;L+=1){M=arguments[L];N=M.shift();if(j(N)){B[N].apply(B,M)}else{N.apply(B,M)}}}function J(N,M,L,i){if(N.addEventListener){N.addEventListener(M,L,i);return true}if(N.attachEvent){return N.attachEvent("on"+M,L)}N["on"+M]=L}function E(M,P){var L="",O,N;for(O in a){if(Object.prototype.hasOwnProperty.call(a,O)){N=a[O][M];if(n(N)){L+=N(P)}}}return L}function H(){var i;E("unload");if(f){do{i=new Date()}while(i.getTime()<f)}}function F(){var L;if(!m){m=true;E("load");for(L=0;L<v.length;L++){v[L]()}}return true
}function k(){var L;if(p.addEventListener){J(p,"DOMContentLoaded",function i(){p.removeEventListener("DOMContentLoaded",i,false);F()})}else{if(p.attachEvent){p.attachEvent("onreadystatechange",function i(){if(p.readyState==="complete"){p.detachEvent("onreadystatechange",i);F()}});if(p.documentElement.doScroll&&x===x.top){(function i(){if(!m){try{p.documentElement.doScroll("left")}catch(M){setTimeout(i,0);return}F()}}())}}}if((new RegExp("WebKit")).test(c.userAgent)){L=setInterval(function(){if(m||/loaded|complete/.test(p.readyState)){clearInterval(L);F()}},10)}J(x,"load",F,false)}function s(){var i="";try{i=x.top.document.referrer}catch(M){if(x.parent){try{i=x.parent.document.referrer}catch(L){i=""}}}if(i===""){i=p.referrer}return i}function g(i){var M=new RegExp("^([a-z]+):"),L=M.exec(i);return L?L[1]:null}function b(i){var M=new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"),L=M.exec(i);return L?L[1]:i}function y(M,L){var P=new RegExp("^(?:https?|ftp)(?::/*(?:[^?]+)[?])([^#]+)"),O=P.exec(M),N=new RegExp("(?:^|&)"+L+"=([^&]*)"),i=O?N.exec(O[1]):0;
return i?w(i[1]):""}function l(Q,N,M,P,L,O){var i;if(M){i=new Date();i.setTime(i.getTime()+M)}p.cookie=Q+"="+h(N)+(M?";expires="+i.toGMTString():"")+";path="+(P||"/")+(L?";domain="+L:"")+(O?";secure":"")}function e(M){var i=new RegExp("(^|;)[ ]*"+M+"=([^;]*)"),L=i.exec(p.cookie);return L?w(L[2]):0}function o(i){return d(h(i))}function I(ab){var N=function(W,i){return(W<<i)|(W>>>(32-i))},ac=function(ai){var ah="",ag,W;for(ag=7;ag>=0;ag--){W=(ai>>>(ag*4))&15;ah+=W.toString(16)}return ah},Q,ae,ad,M=[],U=1732584193,S=4023233417,R=2562383102,P=271733878,O=3285377520,aa,Z,Y,X,V,af,L,T=[];ab=o(ab);L=ab.length;for(ae=0;ae<L-3;ae+=4){ad=ab.charCodeAt(ae)<<24|ab.charCodeAt(ae+1)<<16|ab.charCodeAt(ae+2)<<8|ab.charCodeAt(ae+3);T.push(ad)}switch(L&3){case 0:ae=2147483648;break;case 1:ae=ab.charCodeAt(L-1)<<24|8388608;break;case 2:ae=ab.charCodeAt(L-2)<<24|ab.charCodeAt(L-1)<<16|32768;break;case 3:ae=ab.charCodeAt(L-3)<<24|ab.charCodeAt(L-2)<<16|ab.charCodeAt(L-1)<<8|128;break}T.push(ae);while((T.length&15)!==14){T.push(0)
}T.push(L>>>29);T.push((L<<3)&4294967295);for(Q=0;Q<T.length;Q+=16){for(ae=0;ae<16;ae++){M[ae]=T[Q+ae]}for(ae=16;ae<=79;ae++){M[ae]=N(M[ae-3]^M[ae-8]^M[ae-14]^M[ae-16],1)}aa=U;Z=S;Y=R;X=P;V=O;for(ae=0;ae<=19;ae++){af=(N(aa,5)+((Z&Y)|(~Z&X))+V+M[ae]+1518500249)&4294967295;V=X;X=Y;Y=N(Z,30);Z=aa;aa=af}for(ae=20;ae<=39;ae++){af=(N(aa,5)+(Z^Y^X)+V+M[ae]+1859775393)&4294967295;V=X;X=Y;Y=N(Z,30);Z=aa;aa=af}for(ae=40;ae<=59;ae++){af=(N(aa,5)+((Z&Y)|(Z&X)|(Y&X))+V+M[ae]+2400959708)&4294967295;V=X;X=Y;Y=N(Z,30);Z=aa;aa=af}for(ae=60;ae<=79;ae++){af=(N(aa,5)+(Z^Y^X)+V+M[ae]+3395469782)&4294967295;V=X;X=Y;Y=N(Z,30);Z=aa;aa=af}U=(U+aa)&4294967295;S=(S+Z)&4294967295;R=(R+Y)&4294967295;P=(P+X)&4294967295;O=(O+V)&4294967295}af=ac(U)+ac(S)+ac(R)+ac(P)+ac(O);return af.toLowerCase()}function C(M,i,L){if(M==="translate.googleusercontent.com"){if(L===""){L=i}i=y(i,"u");M=b(i)}else{if(M==="cc.bingj.com"||M==="webcache.googleusercontent.com"||M.slice(0,5)==="74.6."){i=p.links[0].href;M=b(i)}}return[M,i,L]}function t(L){var i=L.length;
if(L.charAt(--i)==="."){L=L.slice(0,i)}if(L.slice(0,2)==="*."){L=L.slice(1)}return L}function K(L){if(!j(L)){L=L.text||"";var i=p.getElementsByTagName("title");if(i&&r(i[0])){L=i[0].text}}return L}function u(ad,aB){var O=C(p.domain,x.location.href,s()),aT=t(O[0]),a7=O[1],aH=O[2],aF="GET",N=ad||"",aX=aB||"",ar,ai=p.title,ak="7z|aac|ar[cj]|as[fx]|avi|bin|csv|deb|dmg|doc|exe|flv|gif|gz|gzip|hqx|jar|jpe?g|js|mp(2|3|4|e?g)|mov(ie)?|ms[ip]|od[bfgpst]|og[gv]|pdf|phps|png|ppt|qtm?|ra[mr]?|rpm|sea|sit|tar|t?bz2?|tgz|torrent|txt|wav|wm[av]|wpd||xls|xml|z|zip",aD=[aT],R=[],aw=[],ac=[],aC=500,S,ae,T,U,am=["pk_campaign","piwik_campaign","utm_campaign","utm_source","utm_medium"],ah=["pk_kwd","piwik_kwd","utm_term"],a5="_pk_",W,a6,a0,ao,aq,aa=63072000000,ab=1800000,at=15768000000,Z=p.location.protocol==="https",Q=false,ax={},a1=200,aN={},aY={},aK=false,aI=false,aG,ay,X,al=I,aJ,ap;function a2(ba){var bb;if(T){bb=new RegExp("#.*");return ba.replace(bb,"")}return ba}function aS(bc,ba){var bd=g(ba),bb;if(bd){return ba
}if(ba.slice(0,1)==="/"){return g(bc)+"://"+b(bc)+ba}bc=a2(bc);if((bb=bc.indexOf("?"))>=0){bc=bc.slice(0,bb)}if((bb=bc.lastIndexOf("/"))!==bc.length-1){bc=bc.slice(0,bb+1)}return bc+ba}function aE(bd){var bb,ba,bc;for(bb=0;bb<aD.length;bb++){ba=t(aD[bb].toLowerCase());if(bd===ba){return true}if(ba.slice(0,1)==="."){if(bd===ba.slice(1)){return true}bc=bd.length-ba.length;if((bc>0)&&(bd.slice(bc)===ba)){return true}}}return false}function a9(ba){var bb=new Image(1,1);bb.onLoad=function(){};bb.src=N+(N.indexOf("?")<0?"?":"&")+ba}function aP(ba){try{var bc=x.XDomainRequest?new x.XDomainRequest():x.XMLHttpRequest?new x.XMLHttpRequest():x.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):null;bc.open("POST",N,true);bc.onreadystatechange=function(){if(this.readyState===4&&this.status!==200){a9(ba)}};bc.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");bc.send(ba)}catch(bb){a9(ba)}}function an(bc,bb){var ba=new Date();if(!a0){if(aF==="POST"){aP(bc)}else{a9(bc)
}f=ba.getTime()+bb}}function aO(ba){return a5+ba+"."+aX+"."+aJ}function P(){var ba=aO("testcookie");if(!r(c.cookieEnabled)){l(ba,"1");return e(ba)==="1"?"1":"0"}return c.cookieEnabled?"1":"0"}function az(){aJ=al((W||aT)+(a6||"/")).slice(0,4)}function Y(){var bb=aO("cvar"),ba=e(bb);if(ba.length){ba=JSON2.parse(ba);if(z(ba)){return ba}}return{}}function M(){if(Q===false){Q=Y()}}function aW(){var ba=new Date();aG=ba.getTime()}function V(be,bb,ba,bd,bc,bf){l(aO("id"),be+"."+bb+"."+ba+"."+bd+"."+bc+"."+bf,aa,a6,W,Z)}function L(){var bb=new Date(),ba=Math.round(bb.getTime()/1000),bd=e(aO("id")),bc;if(bd){bc=bd.split(".");bc.unshift("0")}else{if(!ap){ap=al((c.userAgent||"")+(c.platform||"")+JSON2.stringify(aY)+ba).slice(0,16)}bc=["1",ap,ba,0,ba,"",""]}return bc}function i(){var ba=e(aO("ref"));if(ba.length){try{ba=JSON2.parse(ba);if(z(ba)){return ba}}catch(bb){}}return["","",0,""]}function aj(bc,bA,bB,be){var by,bb=new Date(),bk=Math.round(bb.getTime()/1000),bD,bz,bg,br,bv,bj,bt,bh,bx,bf=1024,bE,bn,bu=Q,bp=aO("id"),bl=aO("ses"),bm=aO("ref"),bF=aO("cvar"),bs=L(),bo=e(bl),bw=i(),bC=ar||a7,bi,ba;
if(a0){l(bp,"",-1,a6,W);l(bl,"",-1,a6,W);l(bF,"",-1,a6,W);l(bm,"",-1,a6,W);return""}bD=bs[0];bz=bs[1];br=bs[2];bg=bs[3];bv=bs[4];bj=bs[5];if(!r(bs[6])){bs[6]=""}bt=bs[6];if(!r(be)){be=""}bi=bw[0];ba=bw[1];bh=bw[2];bx=bw[3];if(!bo){bg++;bj=bv;if(!aq||!bi.length){for(by in am){if(Object.prototype.hasOwnProperty.call(am,by)){bi=y(bC,am[by]);if(bi.length){break}}}for(by in ah){if(Object.prototype.hasOwnProperty.call(ah,by)){ba=y(bC,ah[by]);if(ba.length){break}}}}bE=b(aH);bn=bx.length?b(bx):"";if(bE.length&&!aE(bE)&&(!aq||!bn.length||aE(bn))){bx=aH}if(bx.length||bi.length){bh=bk;bw=[bi,ba,bh,a2(bx.slice(0,bf))];l(bm,JSON2.stringify(bw),at,a6,W,Z)}}bc+="&idsite="+aX+"&rec=1&r="+String(Math.random()).slice(2,8)+"&h="+bb.getHours()+"&m="+bb.getMinutes()+"&s="+bb.getSeconds()+"&url="+h(a2(bC))+(aH.length?"&urlref="+h(a2(aH)):"")+"&_id="+bz+"&_idts="+br+"&_idvc="+bg+"&_idn="+bD+(bi.length?"&_rcn="+h(bi):"")+(ba.length?"&_rck="+h(ba):"")+"&_refts="+bh+"&_viewts="+bj+(String(bt).length?"&_ects="+bt:"")+(String(bx).length?"&_ref="+h(a2(bx.slice(0,bf))):"");
var bd=JSON2.stringify(ax);if(bd.length>2){bc+="&cvar="+h(bd)}for(by in aY){if(Object.prototype.hasOwnProperty.call(aY,by)){bc+="&"+by+"="+aY[by]}}if(bA){bc+="&data="+h(JSON2.stringify(bA))}else{if(U){bc+="&data="+h(JSON2.stringify(U))}}if(Q){var bq=JSON2.stringify(Q);if(bq.length>2){bc+="&_cvar="+h(bq)}for(by in bu){if(Object.prototype.hasOwnProperty.call(bu,by)){if(Q[by][0]===""||Q[by][1]===""){delete Q[by]}}}l(bF,JSON2.stringify(Q),ab,a6,W,Z)}V(bz,br,bg,bk,bj,r(be)&&String(be).length?be:bt);l(bl,"*",ab,a6,W,Z);bc+=E(bB);return bc}function aR(bd,bc,bh,be,ba,bk){var bf="idgoal=0",bg,bb=new Date(),bi=[],bj;if(String(bd).length){bf+="&ec_id="+h(bd);bg=Math.round(bb.getTime()/1000)}bf+="&revenue="+bc;if(String(bh).length){bf+="&ec_st="+bh}if(String(be).length){bf+="&ec_tx="+be}if(String(ba).length){bf+="&ec_sh="+ba}if(String(bk).length){bf+="&ec_dt="+bk}if(aN){for(bj in aN){if(Object.prototype.hasOwnProperty.call(aN,bj)){if(!r(aN[bj][1])){aN[bj][1]=""}if(!r(aN[bj][2])){aN[bj][2]=""}if(!r(aN[bj][3])||String(aN[bj][3]).length===0){aN[bj][3]=0
}if(!r(aN[bj][4])||String(aN[bj][4]).length===0){aN[bj][4]=1}bi.push(aN[bj])}}bf+="&ec_items="+h(JSON2.stringify(bi))}bf=aj(bf,U,"ecommerce",bg);an(bf,aC)}function aQ(ba,be,bd,bc,bb,bf){if(String(ba).length&&r(be)){aR(ba,be,bd,bc,bb,bf)}}function a4(ba){if(r(ba)){aR("",ba,"","","","")}}function av(bd,be){var ba=new Date(),bc=aj("action_name="+h(K(bd||ai)),be,"log");an(bc,aC);if(S&&ae&&!aI){aI=true;J(p,"click",aW);J(p,"mouseup",aW);J(p,"mousedown",aW);J(p,"mousemove",aW);J(p,"mousewheel",aW);J(x,"DOMMouseScroll",aW);J(x,"scroll",aW);J(p,"keypress",aW);J(p,"keydown",aW);J(p,"keyup",aW);J(x,"resize",aW);J(x,"focus",aW);J(x,"blur",aW);aG=ba.getTime();setTimeout(function bb(){var bf=new Date(),bg;if((aG+ae)>bf.getTime()){if(S<bf.getTime()){bg=aj("ping=1",be,"ping");an(bg,aC)}setTimeout(bb,ae)}},ae)}}function aA(ba,bd,bc){var bb=aj("idgoal="+ba+(bd?"&revenue="+bd:""),bc,"goal");an(bb,aC)}function aV(bb,ba,bd){var bc=aj(ba+"="+h(a2(bb)),bd,"link");an(bc,aC)}function aZ(bb,ba){if(bb!==""){return bb+ba.charAt(0).toUpperCase()+ba.slice(1)
}return ba}function ag(bf){var be,ba,bd=["","webkit","ms","moz"],bc;if(!ao){for(ba=0;ba<bd.length;ba++){bc=bd[ba];if(Object.prototype.hasOwnProperty.call(p,aZ(bc,"hidden"))){if(p[aZ(bc,"visibilityState")]==="prerender"){be=true}break}}}if(be){J(p,bc+"visibilitychange",function bb(){p.removeEventListener(bc+"visibilitychange",bb,false);bf()});return}bf()}function af(bc,bb){var bd,ba="(^| )(piwik[_-]"+bb;if(bc){for(bd=0;bd<bc.length;bd++){ba+="|"+bc[bd]}}ba+=")( |$)";return new RegExp(ba)}function aU(bd,ba,be){if(!be){return"link"}var bc=af(aw,"download"),bb=af(ac,"link"),bf=new RegExp("\\.("+ak+")([?&#]|$)","i");return bb.test(bd)?"link":(bc.test(bd)||bf.test(ba)?"download":0)}function aM(bf){var bd,bb,ba;while((bd=bf.parentNode)!==null&&r(bd)&&((bb=bf.tagName.toUpperCase())!=="A"&&bb!=="AREA")){bf=bd}if(r(bf.href)){var bg=bf.hostname||b(bf.href),bh=bg.toLowerCase(),bc=bf.href.replace(bg,bh),be=new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto):","i");if(!be.test(bc)){ba=aU(bf.className,bc,aE(bh));
if(ba){bc=d(bc);aV(bc,ba)}}}}function a8(ba){var bb,bc;ba=ba||x.event;bb=ba.which||ba.button;bc=ba.target||ba.srcElement;if(ba.type==="click"){if(bc){aM(bc)}}else{if(ba.type==="mousedown"){if((bb===1||bb===2)&&bc){ay=bb;X=bc}else{ay=X=null}}else{if(ba.type==="mouseup"){if(bb===ay&&bc===X){aM(bc)}ay=X=null}}}}function aL(bb,ba){if(ba){J(bb,"mouseup",a8,false);J(bb,"mousedown",a8,false)}else{J(bb,"click",a8,false)}}function au(bb){if(!aK){aK=true;var bc,ba=af(R,"ignore"),bd=p.links;if(bd){for(bc=0;bc<bd.length;bc++){if(!ba.test(bd[bc].className)){aL(bd[bc],bb)}}}}}function a3(){var ba,bb,bc={pdf:"application/pdf",qt:"video/quicktime",realp:"audio/x-pn-realaudio-plugin",wma:"application/x-mplayer2",dir:"application/x-director",fla:"application/x-shockwave-flash",java:"application/x-java-vm",gears:"application/x-googlegears",ag:"application/x-silverlight"};if(c.mimeTypes&&c.mimeTypes.length){for(ba in bc){if(Object.prototype.hasOwnProperty.call(bc,ba)){bb=c.mimeTypes[bc[ba]];aY[ba]=(bb&&bb.enabledPlugin)?"1":"0"
}}}if(typeof navigator.javaEnabled!=="unknown"&&r(c.javaEnabled)&&c.javaEnabled()){aY.java="1"}if(n(x.GearsFactory)){aY.gears="1"}aY.res=A.width+"x"+A.height;aY.cookie=P()}a3();az();return{getVisitorId:function(){return(L())[1]},getVisitorInfo:function(){return L()},getAttributionInfo:function(){return i()},getAttributionCampaignName:function(){return i()[0]},getAttributionCampaignKeyword:function(){return i()[1]},getAttributionReferrerTimestamp:function(){return i()[2]},getAttributionReferrerUrl:function(){return i()[3]},setTrackerUrl:function(ba){N=ba},setSiteId:function(ba){aX=ba},setCustomData:function(ba,bb){if(z(ba)){U=ba}else{if(!U){U=[]}U[ba]=bb}},getCustomData:function(){return U},setCustomVariable:function(bb,ba,be,bc){var bd;if(!r(bc)){bc="visit"}if(bb>0){bd=[ba.slice(0,a1),be.slice(0,a1)];if(bc==="visit"||bc===2){M();Q[bb]=bd}else{if(bc==="page"||bc===3){ax[bb]=bd}}}},getCustomVariable:function(bb,bc){var ba;if(!r(bc)){bc="visit"}if(bc==="page"||bc===3){ba=ax[bb]}else{if(bc==="visit"||bc===2){M();
ba=Q[bb]}}if(!r(ba)||(ba&&ba[0]==="")){return false}return ba},deleteCustomVariable:function(ba,bb){if(this.getCustomVariable(ba,bb)){this.setCustomVariable(ba,"","",bb)}},setLinkTrackingTimer:function(ba){aC=ba},setDownloadExtensions:function(ba){ak=ba},addDownloadExtensions:function(ba){ak+="|"+ba},setDomains:function(ba){aD=j(ba)?[ba]:ba;aD.push(aT)},setIgnoreClasses:function(ba){R=j(ba)?[ba]:ba},setRequestMethod:function(ba){aF=ba||"GET"},setReferrerUrl:function(ba){aH=ba},setCustomUrl:function(ba){ar=aS(a7,ba)},setDocumentTitle:function(ba){ai=ba},setDownloadClasses:function(ba){aw=j(ba)?[ba]:ba},setLinkClasses:function(ba){ac=j(ba)?[ba]:ba},setCampaignNameKey:function(ba){am=j(ba)?[ba]:ba},setCampaignKeywordKey:function(ba){ah=j(ba)?[ba]:ba},discardHashTag:function(ba){T=ba},setCookieNamePrefix:function(ba){a5=ba;Q=Y()},setCookieDomain:function(ba){W=t(ba);az()},setCookiePath:function(ba){a6=ba;az()},setVisitorCookieTimeout:function(ba){aa=ba*1000},setSessionCookieTimeout:function(ba){ab=ba*1000
},setReferralCookieTimeout:function(ba){at=ba*1000},setConversionAttributionFirstReferrer:function(ba){aq=ba},setDoNotTrack:function(bb){var ba=c.doNotTrack||c.msDoNotTrack;a0=bb&&(ba==="yes"||ba==="1")},addListener:function(bb,ba){aL(bb,ba)},enableLinkTracking:function(ba){if(m){au(ba)}else{v.push(function(){au(ba)})}},setHeartBeatTimer:function(bc,bb){var ba=new Date();S=ba.getTime()+bc*1000;ae=bb*1000},killFrame:function(){if(x.location!==x.top.location){x.top.location=x.location}},redirectFile:function(ba){if(x.location.protocol==="file:"){x.location=ba}},setCountPreRendered:function(ba){ao=ba},trackGoal:function(ba,bc,bb){ag(function(){aA(ba,bc,bb)})},trackLink:function(bb,ba,bc){ag(function(){aV(bb,ba,bc)})},trackPageView:function(ba,bb){ag(function(){av(ba,bb)})},setEcommerceView:function(bd,ba,bc,bb){if(!r(bc)||!bc.length){bc=""}ax[5]=["_pkc",bc];if(r(bb)&&String(bb).length){ax[2]=["_pkp",bb]}if((!r(bd)||!bd.length)&&(!r(ba)||!ba.length)){return}if(r(bd)&&bd.length){ax[3]=["_pks",bd]
}if(!r(ba)||!ba.length){ba=""}ax[4]=["_pkn",ba]},addEcommerceItem:function(be,ba,bc,bb,bd){if(be.length){aN[be]=[be,ba,bc,bb,bd]}},trackEcommerceOrder:function(ba,be,bd,bc,bb,bf){aQ(ba,be,bd,bc,bb,bf)},trackEcommerceCartUpdate:function(ba){a4(ba)}}}function q(){return{push:G}}J(x,"beforeunload",H,false);k();B=new u();for(D=0;D<_paq.length;D++){G(_paq[D])}_paq=new q();return{addPlugin:function(i,L){a[i]=L},getTracker:function(i,L){return new u(i,L)},getAsyncTracker:function(){return B}}}()),piwik_track,piwik_log=function(b,f,d,g){function a(h){try{return eval("piwik_"+h)}catch(i){}return}var c,e=Piwik.getTracker(d,f);e.setDocumentTitle(b);e.setCustomData(g);c=a("tracker_pause");if(c){e.setLinkTrackingTimer(c)}c=a("download_extensions");if(c){e.setDownloadExtensions(c)}c=a("hosts_alias");if(c){e.setDomains(c)}c=a("ignore_classes");if(c){e.setIgnoreClasses(c)}e.trackPageView();if(a("install_tracker")){piwik_track=function(i,k,j,h){e.setSiteId(k);e.setTrackerUrl(j);e.trackLink(i,h)
};e.enableLinkTracking()}};