/*
 * Piwik - Web Analytics
 *
 * JavaScript tracking client
 *
 * @link http://piwik.org
 * @source http://dev.piwik.org/trac/browser/trunk/js/piwik.js
 * @license http://www.opensource.org/licenses/bsd-license.php Simplified BSD
 */
if(!this.JSON){this.JSON={}}(function(){function d(f){return f<10?"0"+f:f}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(f){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+d(this.getUTCMonth()+1)+"-"+d(this.getUTCDate())+"T"+d(this.getUTCHours())+":"+d(this.getUTCMinutes())+":"+d(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(f){return this.valueOf()}}var c=new RegExp("[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]","g"),g=new RegExp('[\\\\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]',"g"),h,b,j={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},i;
function a(f){g.lastIndex=0;return g.test(f)?'"'+f.replace(g,function(k){var l=j[k];return typeof l==="string"?l:"\\u"+("0000"+k.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+f+'"'}function e(r,o){var m,l,s,f,p=h,n,q=o[r];if(q&&typeof q==="object"&&typeof q.toJSON==="function"){q=q.toJSON(r)}if(typeof i==="function"){q=i.call(o,r,q)}switch(typeof q){case"string":return a(q);case"number":return isFinite(q)?String(q):"null";case"boolean":case"null":return String(q);case"object":if(!q){return"null"}h+=b;n=[];if(Object.prototype.toString.apply(q)==="[object Array]"){f=q.length;for(m=0;m<f;m+=1){n[m]=e(m,q)||"null"}s=n.length===0?"[]":h?"[\n"+h+n.join(",\n"+h)+"\n"+p+"]":"["+n.join(",")+"]";h=p;return s}if(i&&typeof i==="object"){f=i.length;for(m=0;m<f;m+=1){l=i[m];if(typeof l==="string"){s=e(l,q);if(s){n.push(a(l)+(h?": ":":")+s)}}}}else{for(l in q){if(Object.hasOwnProperty.call(q,l)){s=e(l,q);if(s){n.push(a(l)+(h?": ":":")+s)}}}}s=n.length===0?"{}":h?"{\n"+h+n.join(",\n"+h)+"\n"+p+"}":"{"+n.join(",")+"}";
h=p;return s}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(m,k,l){var f;h="";b="";if(typeof l==="number"){for(f=0;f<l;f+=1){b+=" "}}else{if(typeof l==="string"){b=l}}i=k;if(k&&typeof k!=="function"&&(typeof k!=="object"||typeof k.length!=="number")){throw new Error("JSON.stringify")}return e("",{"":m})}}if(typeof JSON.parse!=="function"){JSON.parse=function(m,f){var l;function k(q,p){var o,n,r=q[p];if(r&&typeof r==="object"){for(o in r){if(Object.hasOwnProperty.call(r,o)){n=k(r,o);if(n!==undefined){r[o]=n}else{delete r[o]}}}}return f.call(q,p,r)}m=String(m);c.lastIndex=0;if(c.test(m)){m=m.replace(c,function(n){return"\\u"+("0000"+n.charCodeAt(0).toString(16)).slice(-4)})}if((new RegExp("^[\\],:{}\\s]*$")).test(m.replace(new RegExp('\\\\(?:["\\\\/bfnrt]|u[0-9a-fA-F]{4})',"g"),"@").replace(new RegExp('"[^"\\\\n\\r]*"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?',"g"),"]").replace(new RegExp("(?:^|:|,)(?:\\s*\\[)+","g"),""))){l=eval("("+m+")");return typeof f==="function"?k({"":l},""):l
}throw new SyntaxError("JSON.parse")}}}());var _paq=_paq||[],Piwik=Piwik||(function(){var m,w={},d=document,j=navigator,v=screen,G=window,h=false,B=[],e=G.encodeURIComponent,H=G.decodeURIComponent,F,C;function b(i){return typeof i!=="undefined"}function a(i){return typeof i==="function"}function n(i){return typeof i==="object"}function q(i){return typeof i==="string"||i instanceof String}function z(I){var i=I.shift();if(q(i)){F[i].apply(F,I)}else{i.apply(F,I)}}function t(K,J,I,i){if(K.addEventListener){K.addEventListener(J,I,i);return true}if(K.attachEvent){return K.attachEvent("on"+J,I)}K["on"+J]=I}function g(J,M){var I="",L,K;for(L in w){K=w[L][J];if(a(K)){I+=K(M)}}return I}function A(){g("unload");if(m){var i;do{i=new Date()}while(i.getTime()<m)}}function k(){var I;if(!h){h=true;g("load");for(I=0;I<B.length;I++){B[I]()}}return true}function x(){if(d.addEventListener){t(d,"DOMContentLoaded",function i(){d.removeEventListener("DOMContentLoaded",i,false);k()})}else{if(d.attachEvent){d.attachEvent("onreadystatechange",function i(){if(d.readyState==="complete"){d.detachEvent("onreadystatechange",i);
k()}});if(d.documentElement.doScroll&&G===top){(function i(){if(!h){try{d.documentElement.doScroll("left")}catch(I){setTimeout(i,0);return}k()}}())}}}t(G,"load",k,false)}function f(){var i="";try{i=top.document.referrer}catch(J){if(parent){try{i=parent.document.referrer}catch(I){i=""}}}if(i===""){i=d.referrer}return i}function y(i){var J=new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"),I=J.exec(i);return I?I[1]:i}function p(I,M){var L=new RegExp("^(?:https?|ftp)(?::/*(?:[^?]+)[?])([^#]+)"),K=L.exec(I),J=new RegExp("(?:^|&)"+M+"=([^&]*)"),i=K?J.exec(K[1]):0;return i?H(i[1]):""}function s(N,K,J,M,I,L){var i;if(J){i=new Date();i.setTime(i.getTime()+J)}d.cookie=N+"="+e(K)+(J?";expires="+i.toGMTString():"")+";path="+(M?M:"/")+(I?";domain="+I:"")+(L?";secure":"")}function E(J){var i=new RegExp("(^|;)[ ]*"+J+"=([^;]*)"),I=i.exec(d.cookie);return I?H(I[2]):0}function r(i){return unescape(e(i))}function u(Y){var K=function(W,i){return(W<<i)|(W>>>(32-i))},Z=function(af){var ae="",ad,W;for(ad=7;
ad>=0;ad--){W=(af>>>(ad*4))&15;ae+=W.toString(16)}return ae},N,ab,aa,J=[],R=1732584193,P=4023233417,O=2562383102,M=271733878,L=3285377520,X,V,U,T,S,ac,I,Q=[];Y=r(Y);I=Y.length;for(ab=0;ab<I-3;ab+=4){aa=Y.charCodeAt(ab)<<24|Y.charCodeAt(ab+1)<<16|Y.charCodeAt(ab+2)<<8|Y.charCodeAt(ab+3);Q.push(aa)}switch(I&3){case 0:ab=2147483648;break;case 1:ab=Y.charCodeAt(I-1)<<24|8388608;break;case 2:ab=Y.charCodeAt(I-2)<<24|Y.charCodeAt(I-1)<<16|32768;break;case 3:ab=Y.charCodeAt(I-3)<<24|Y.charCodeAt(I-2)<<16|Y.charCodeAt(I-1)<<8|128;break}Q.push(ab);while((Q.length&15)!==14){Q.push(0)}Q.push(I>>>29);Q.push((I<<3)&4294967295);for(N=0;N<Q.length;N+=16){for(ab=0;ab<16;ab++){J[ab]=Q[N+ab]}for(ab=16;ab<=79;ab++){J[ab]=K(J[ab-3]^J[ab-8]^J[ab-14]^J[ab-16],1)}X=R;V=P;U=O;T=M;S=L;for(ab=0;ab<=19;ab++){ac=(K(X,5)+((V&U)|(~V&T))+S+J[ab]+1518500249)&4294967295;S=T;T=U;U=K(V,30);V=X;X=ac}for(ab=20;ab<=39;ab++){ac=(K(X,5)+(V^U^T)+S+J[ab]+1859775393)&4294967295;S=T;T=U;U=K(V,30);V=X;X=ac}for(ab=40;ab<=59;ab++){ac=(K(X,5)+((V&U)|(V&T)|(U&T))+S+J[ab]+2400959708)&4294967295;
S=T;T=U;U=K(V,30);V=X;X=ac}for(ab=60;ab<=79;ab++){ac=(K(X,5)+(V^U^T)+S+J[ab]+3395469782)&4294967295;S=T;T=U;U=K(V,30);V=X;X=ac}R=(R+X)&4294967295;P=(P+V)&4294967295;O=(O+U)&4294967295;M=(M+T)&4294967295;L=(L+S)&4294967295}ac=Z(R)+Z(P)+Z(O)+Z(M)+Z(L);return ac.toLowerCase()}function o(I,i,J){if(I==="webcache.googleusercontent.com"||I==="cc.bingj.com"||I.substring(0,5)==="74.6."){i=d.links[0].href;I=y(i)}else{if(I==="translate.googleusercontent.com"){if(J===""){J=i}i=p(i,"u");I=y(i)}}return[I,i,J]}function l(I){var i=I.length;return(I.charAt(--i)===".")?I.substring(0,i):I}function D(au,ar){var ag=o(d.domain,G.location.href,f()),V=l(ag[0]),R=ag[1],aw=ag[2],J="GET",Y=au||"",aM=ar||"",aF,aL=d.title,ac="7z|aac|ar[cj]|as[fx]|avi|bin|csv|deb|dmg|doc|exe|flv|gif|gz|gzip|hqx|jar|jpe?g|js|mp(2|3|4|e?g)|mov(ie)?|ms[ip]|od[bfgpst]|og[gv]|pdf|phps|png|ppt|qtm?|ra[mr]?|rpm|sea|sit|tar|t?bz2?|tgz|torrent|txt|wav|wm[av]|wpd||xls|xml|z|zip",ax=[V],K=[],ay=[],aB=[],X=500,ae=30000,af,ap,az="_pk_",M,at,am,aN=63072000000,aa=1800000,W=15768000000,aC=false,P=100,N="0",S={pdf:["pdf","application/pdf","0"],quicktime:["qt","video/quicktime","0"],realplayer:["realp","audio/x-pn-realaudio-plugin","0"],wma:["wma","application/x-mplayer2","0"],director:["dir","application/x-director","0"],flash:["fla","application/x-shockwave-flash","0"],java:["java","application/x-java-vm","0"],gears:["gears","application/x-googlegears","0"],silverlight:["ag","application/x-silverlight","0"]},al=false,aE=u,aJ,aj,av,aq;
function aG(aP){var aO;if(af){aO=new RegExp("#.*");return aP.replace(aO,"")}return aP}function ak(aR){var aP,aO,aQ;for(aP=0;aP<ax.length;aP++){aO=ax[aP].toLowerCase();if(aR===aO){return true}if(aO.substring(0,2)==="*."){if(aR===aO.substring(2)){return true}aQ=aR.length-aO.length+1;if((aQ>0)&&(aR.substring(aQ)===aO.substring(1))){return true}}}return false}function i(aO){var aP=new Image(1,1);aP.onLoad=function(){};aP.src=Y+"?"+aO}function U(aO){try{var aQ=G.XMLHttpRequest?new G.XMLHttpRequest():G.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):null;aQ.open("POST",Y,true);aQ.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");aQ.setRequestHeader("Content-Length",aO.length);aQ.setRequestHeader("Connection","close");aQ.send(aO)}catch(aP){i(aO)}}function aI(aQ,aP){var aO=new Date();if(J==="POST"){U(aQ)}else{i(aQ)}m=aO.getTime()+aP}function O(){var aO,aP;if(typeof navigator.javaEnabled!=="unknown"&&b(j.javaEnabled)&&j.javaEnabled()){S.java[2]="1"}if(a(G.GearsFactory)){S.gears[2]="1"
}if(j.mimeTypes&&j.mimeTypes.length){for(aO in S){aP=j.mimeTypes[S[aO][1]];if(aP&&aP.enabledPlugin){S[aO][2]="1"}}}}function L(aO){return az+aO+"."+aq}function ao(){var aO=L("testcookie");if(!b(j.cookieEnabled)){s(aO,"1");return E(aO)==="1"?"1":"0"}return j.cookieEnabled?"1":"0"}function ad(){aq=aE((M||V)+(at||"/")).substring(0,8)}function T(){var aP=L("cvar"),aO=E(aP);if(aO.length){aO=JSON.parse(aO);if(n(aO)){return aO}}return{}}function aA(){if(aC===false){aC=T()}}function ah(a9,ba){var a7,aO=new Date(),aW=Math.round(aO.getTime()/1000),aQ,bb,a8,aR,a3,a5,aV,aU,a6,bc,aZ,aT,a1=L("id"),aX=L("ses"),aY=L("ref"),a4=E(a1),a0=E(aX),aS=E(aY),a2=d.location.protocol==="https",aP="&res="+v.width+"x"+v.height+"&cookie="+N;for(a7 in S){aP+="&"+S[a7][0]+"="+S[a7][2]}if(a4){bb="0";aQ=a4.split(".");a8=aQ[0];a3=aQ[1];aR=aQ[2];a5=aQ[3];aV=aQ[4]}else{bb="1";a3=aW;a5=aW;aV="";a8=aE((b(j.userAgent)?j.userAgent:"")+(b(j.platform)?j.platform:"")+aP+Math.round(aO.getTime/1000)).substring(0,16);aR=0}av=a8;if(aS){aQ=aS.split(".",1);
aU=aQ[0];a6=aQ[1]}else{aU=0;a6=""}if(!a0){aR++;aV=a5;bc=y(aw);aZ=aS?y(aS):"";if(bc.length&&!ak(bc)&&(!am||!aZ.length||ak(aZ))){aU=aW;a6=aw;s(aY,aU+"."+a6,W,at,M,a2)}if(ae){setTimeout(function(){var bd=ah(a9,"ping")+"&ping=1";aI(bd,X)},ae)}}a5=aW;aT=JSON.stringify(aC);s(a1,a8+"."+a3+"."+aR+"."+a5+"."+aV,aN,at,M,a2);s(aX,"*",aa,at,M,a2);s(L("cvar"),aT,aa,at,M,a2);aP="idsite="+aM+"&rec=1&rand="+Math.random()+"&h="+aO.getHours()+"&m="+aO.getMinutes()+"&s="+aO.getSeconds()+"&url="+e(aG(aF||R))+"&urlref="+e(aG(aw))+"&_id="+a8+"&_idts="+a3+"&_idvc="+aR+"&_idn="+bb+"&_ref="+e(aG(a6))+"&_refts="+aU+"&_viewts="+aV+"&_cvar="+aT+aP;if(a9){aP+="&data="+e(JSON.stringify(a9))}else{if(ap){aP+="&data="+e(JSON.stringify(ap))}}aP+=g(ba);return aP}function I(aP,aQ){var aO=ah(aQ,"log")+"&action_name="+e(aP||aL);aI(aO,X)}function aH(aO,aR,aQ){var aP=ah(aQ,"goal")+"&idgoal="+aO;if(aR){aP+="&revenue="+aR}aI(aP,X)}function ab(aP,aO,aR){var aQ=ah(aR,"click")+"&"+aO+"="+e(aG(aP));aI(aQ,X)}function an(aQ,aP){var aR,aO="(^| )(piwik[_-]"+aP;
if(aQ){for(aR=0;aR<aQ.length;aR++){aO+="|"+aQ[aR]}}aO+=")( |$)";return new RegExp(aO)}function aK(aR,aO,aS){if(!aS){return"link"}var aQ=an(ay,"download"),aP=an(aB,"link"),aT=new RegExp("\\.("+ac+")([?&#]|$)","i");return aP.test(aR)?"link":(aQ.test(aR)||aT.test(aO)?"download":0)}function Q(aT){var aR,aP,aO;while(!!(aR=aT.parentNode)&&((aP=aT.tagName)!=="A"&&aP!=="AREA")){aT=aR}if(b(aT.href)){var aU=aT.hostname,aV=aU.toLowerCase(),aQ=aT.href.replace(aU,aV),aS=new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript): *","i");if(!aS.test(aQ)){aO=aK(aT.className,aQ,ak(aV));if(aO){ab(aQ,aO)}}}}function Z(aO){var aP,aQ;aO=aO||G.event;aP=aO.which||aO.button;aQ=aO.target||aO.srcElement;if(aO.type==="click"){if(aQ){Q(aQ)}}else{if(aO.type==="mousedown"){if((aP===1||aP===2)&&aQ){aJ=aP;aj=aQ}else{aJ=aj=null}}else{if(aO.type==="mouseup"){if(aP===aJ&&aQ===aj){Q(aQ)}aJ=aj=null}}}}function aD(aP,aO){if(aO){t(aP,"mouseup",Z,false);t(aP,"mousedown",Z,false)}else{t(aP,"click",Z,false)}}function ai(aP){if(!al){al=true;
var aQ,aO=an(K,"ignore"),aR=d.links;if(aR){for(aQ=0;aQ<aR.length;aQ++){if(!aO.test(aR[aQ].className)){aD(aR[aQ],aP)}}}}}N=ao();O();ad();return{getVisitorId:function(){return av},setTrackerUrl:function(aO){Y=aO},setSiteId:function(aO){aM=aO},setCustomData:function(aO,aP){if(n(aO)){ap=aO}else{if(!ap){ap=[]}ap[aO]=aP}},getCustomData:function(){return ap},setCustomVariable:function(aO,aQ,aP){aA();if(aO>0&&aO<=5){aC[aO]=[aQ.substring(0,P),aP.substring(0,P)]}},getCustomVariable:function(aO){aA();return aC[aO]},deleteCustomVariable:function(aO){this.setCustomVariable(aO,"","")},setLinkTrackingTimer:function(aO){X=aO},setDownloadExtensions:function(aO){ac=aO},addDownloadExtensions:function(aO){ac+="|"+aO},setDomains:function(aO){ax=q(aO)?[aO]:aO;ax.push(V)},setIgnoreClasses:function(aO){K=q(aO)?[aO]:aO},setRequestMethod:function(aO){J=aO||"GET"},setReferrerUrl:function(aO){aw=aO},setCustomUrl:function(aO){aF=aO},setDocumentTitle:function(aO){aL=aO},setDownloadClasses:function(aO){ay=q(aO)?[aO]:aO
},setLinkClasses:function(aO){aB=q(aO)?[aO]:aO},discardHashTag:function(aO){af=aO},setCookieNamePrefix:function(aO){az=aO;aC=T()},setCookieDomain:function(aO){M=l(aO);ad()},setCookiePath:function(aO){at=aO;ad()},setVisitorCookieTimeout:function(aO){aN=aO},setSessionCookieTimeout:function(aO){aa=aO},setReferralCookieTimeout:function(aO){W=aO},setConversionAttributionFirstReferrer:function(aO){am=aO},addListener:function(aP,aO){aD(aP,aO)},enableLinkTracking:function(aO){if(h){ai(aO)}else{B[B.length]=function(){ai(aO)}}},setHeartBeatTimer:function(aO){ae=aO},killFrame:function(){if(G!==top){top.location=G.location}},redirectFile:function(aO){if(G.location.protocol==="file:"){G.location=aO}},trackGoal:function(aO,aQ,aP){aH(aO,aQ,aP)},trackLink:function(aP,aO,aQ){ab(aP,aO,aQ)},trackPageView:function(aO,aP){I(aO,aP)}}}function c(){return{push:z}}t(G,"beforeunload",A,false);x();F=new D();for(C=0;C<_paq.length;C++){z(_paq[C])}_paq=new c();return{addPlugin:function(i,I){w[i]=I},getTracker:function(i,I){return new D(i,I)
}}}());