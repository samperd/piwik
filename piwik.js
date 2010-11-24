/*
 * Piwik - Web Analytics
 *
 * JavaScript tracking client
 *
 * @link http://piwik.org
 * @source http://dev.piwik.org/trac/browser/trunk/js/piwik.js
 * @license http://www.opensource.org/licenses/bsd-license.php Simplified BSD
 * @version $Id$
 */
var Piwik,piwik_log,piwik_track;if(!this.Piwik){Piwik=(function(){var i,p={},c=document,g=navigator,o=screen,u=window,f=false,r=[],m=u.encodeURIComponent||escape,b=u.decodeURIComponent||unescape;function a(v){return typeof v!=="undefined"}function n(y,x,w,v){if(y.addEventListener){y.addEventListener(x,w,v);return true}else{if(y.attachEvent){return y.attachEvent("on"+x,w)}}y["on"+x]=w}function e(w,z){var v="",y,x;for(y in p){x=p[y][w];if(typeof x==="function"){v+=x(z)}}return v}function s(v){e("unload");if(a(i)){var w;do{w=new Date()}while(w.getTime()<i)}}function h(w){if(!f){f=true;e("load");for(var v=0;v<r.length;v++){r[v]()}}return true}function q(){if(c.addEventListener){n(c,"DOMContentLoaded",function v(){c.removeEventListener("DOMContentLoaded",v,false);
h()})}else{if(c.attachEvent){c.attachEvent("onreadystatechange",function v(){if(c.readyState==="complete"){c.detachEvent("onreadystatechange",v);h()}});if(c.documentElement.doScroll&&u==u.top){(function v(){if(f){return}try{c.documentElement.doScroll("left")}catch(w){setTimeout(v,0);return}h()}())}}}n(u,"load",h,false)}function d(){var v="";try{v=top.document.referrer}catch(x){if(parent){try{v=parent.document.referrer}catch(w){v=""}}}if(v===""){v=c.referrer}return v}function j(v){var x=new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"),w=x.exec(v);return w?w[1]:v}function l(w,A){var z=new RegExp("^(?:https?|ftp)(?::/*(?:[^?]+)[?])([^#]+)"),y=z.exec(w),x=new RegExp("(?:^|&)"+A+"=([^&]*)"),v=y?x.exec(y[1]):0;return v?b(v[1]):""}function k(w,v,x){if(w=="webcache.googleusercontent.com"||w=="cc.bingj.com"||w.substr(0,5)=="74.6."){v=c.links[0].href;w=j(v)}else{if(w=="translate.googleusercontent.com"){if(x===""){x=v}v=l(v,"u");w=j(v)}}return[w,v,x]}function t(V,U){var M=k(u.location.hostname,u.location.href,d()),A=M[0],E=M[1],W=M[2],x="GET",I=V||"",ag=U||"",ab,af=c.title,L="7z|aac|arc|arj|asf|asx|avi|bin|csv|deb|dmg|doc|exe|flv|gif|gz|gzip|hqx|jar|jpe?g|js|mp(2|3|4|e?g)|mov(ie)?|msi|msp|odt|ods|odp|odb|odg|odf|ogg|ogv|pdf|phps|png|ppt|qtm?|ra(m|r)?|rpm|sea|sit|tar|t?bz2?|tgz|torrent|txt|wav|wma|wmv|wpd||xls|xml|z|zip",X=[A],z=[],Y=[],Z=[],H=500,T,B="0",F={pdf:["pdf","application/pdf","0"],quicktime:["qt","video/quicktime","0"],realplayer:["realp","audio/x-pn-realaudio-plugin","0"],wma:["wma","application/x-mplayer2","0"],director:["dir","application/x-director","0"],flash:["fla","application/x-shockwave-flash","0"],java:["java","application/x-java-vm","0"],gears:["gears","application/x-googlegears","0"],silverlight:["ag","application/x-silverlight","0"]},P=false,ah=function(ak){var an=new RegExp('[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]',"g"),al={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};
function ai(ao){an.lastIndex=0;return an.test(ao)?'"'+ao.replace(an,function(ap){var aq=al[ap];return typeof aq==="string"?aq:"\\u"+("0000"+ap.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+ao+'"'}function aj(ao){return ao<10?"0"+ao:ao}function am(au,at){var ar,aq,ap,ao,av=at[au];if(av===null){return"null"}if(av&&typeof av==="object"&&typeof av.toJSON==="function"){av=av.toJSON(au)}switch(typeof av){case"string":return ai(av);case"number":return isFinite(av)?String(av):"null";case"boolean":case"null":return String(av);case"object":ao=[];if(av instanceof Array){for(ar=0;ar<av.length;ar++){ao[ar]=am(ar,av)||"null"}ap=ao.length===0?"[]":"["+ao.join(",")+"]";return ap}if(av instanceof Date){return ai(av.getUTCFullYear()+"-"+aj(av.getUTCMonth()+1)+"-"+aj(av.getUTCDate())+"T"+aj(av.getUTCHours())+":"+aj(av.getUTCMinutes())+":"+aj(av.getUTCSeconds())+"Z")}for(aq in av){ap=am(aq,av);if(ap){ao.push(ai(aq)+":"+ap)}}ap=ao.length===0?"{}":"{"+ao.join(",")+"}";return ap}}return am("",{"":ak})};function C(ao,al,aj,an,ak,am){var ai;
if(aj){ai=new Date();ai.setTime(ai.getTime()+aj*86400000)}c.cookie=ao+"="+m(al)+(aj?";expires="+ai.toGMTString():"")+";path="+(an?an:"/")+(ak?";domain="+ak:"")+(am?";secure":"")}function y(ak){var ai=new RegExp("(^|;)[ ]*"+ak+"=([^;]*)"),aj=ai.exec(c.cookie);return aj?b(aj[2]):0}function v(ai){var aj=new Image(1,1);aj.onLoad=function(){};aj.src=I+"?"+ai}function G(ai){try{var ak=u.XMLHttpRequest?new u.XMLHttpRequest():u.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):null;ak.open("POST",I,true);ak.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");ak.setRequestHeader("Content-Length",ai.length);ak.setRequestHeader("Connection","close");ak.send(ai)}catch(aj){v(ai)}}function ac(ak,aj){var ai=new Date();i=ai.getTime()+aj;if(x=="POST"){G(ak)}else{v(ak)}}function D(){var ai,aj;if(a(g.javaEnabled)&&g.javaEnabled()){F.java[2]="1"}if(typeof u.GearsFactory==="function"){F.gears[2]="1"}if(g.mimeTypes&&g.mimeTypes.length){for(ai in F){aj=g.mimeTypes[F[ai][1]];
if(aj&&aj.enabledPlugin){F[ai][2]="1"}}}}function S(){var ai="_pk_testcookie";if(!a(g.cookieEnabled)){C(ai,"1");return y(ai)=="1"?"1":"0"}return g.cookieEnabled?"1":"0"}function N(al){var aj,ai=new Date(),ak="idsite="+ag+"&rec=1&rand="+Math.random()+"&h="+ai.getHours()+"&m="+ai.getMinutes()+"&s="+ai.getSeconds()+"&url="+m(a(ab)?ab:E)+"&urlref="+m(W)+"&res="+o.width+"x"+o.height+"&cookie="+B;for(aj in F){ak+="&"+F[aj][0]+"="+F[aj][2]}if(a(al)){if(al!==null){ak+="&data="+m(ah(al))}}else{if(a(T)){ak+="&data="+m(ah(T))}}return ak}function w(aj,ak){var ai=N(ak)+"&action_name="+m(a(aj)?aj:af);ai+=e("log");ac(ai,H)}function ad(ai,al,ak){var aj=N(ak)+"&idgoal="+ai;if(a(al)&&al!==null){aj+="&revenue="+al}aj+=e("goal");ac(aj,H)}function K(aj,ai,al){var ak=N(al)+"&"+ai+"="+m(aj)+"&redirect=0";ak+=e("click");ac(ak,H)}function Q(al){var aj,ai,ak;for(aj=0;aj<X.length;aj++){ai=X[aj].toLowerCase();if(al==ai){return true}if(ai.substr(0,2)=="*."){if((al)==ai.substr(2)){return true}ak=al.length-ai.length+1;
if((ak>0)&&(al.substr(ak)==ai.substr(1))){return true}}}return false}function R(ak,aj){var al,ai="(^| )(piwik[_-]"+aj;if(a(ak)){for(al=0;al<ak.length;al++){ai+="|"+ak[al]}}ai+=")( |$)";return new RegExp(ai)}function ae(al,ai,am){if(!am){return"link"}var ak=R(Y,"download"),aj=R(Z,"link"),an=new RegExp("\\.("+L+")([?&#]|$)","i");return aj.test(al)?"link":(ak.test(al)||an.test(ai)?"download":0)}function J(ap){var aj,ao,aq,ai;if(!a(ap)){ap=u.event}if(a(ap.target)){aj=ap.target}else{if(a(ap.srcElement)){aj=ap.srcElement}else{return}}while((ao=aj.parentNode)&&((aq=aj.tagName)!="A"&&aq!="AREA")){aj=ao}if(a(aj.href)){var an=aj.hostname,al=an.toLowerCase(),ak=aj.href.replace(an,al),am=new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript): *","i");if(!am.test(ak)){ai=ae(aj.className,ak,Q(al));if(ai){K(ak,ai)}}}}function aa(ai){n(ai,"click",J,false)}function O(){if(!P){P=true;var aj,ai=R(z,"ignore"),ak=c.links;if(ak){for(aj=0;aj<ak.length;aj++){if(!ai.test(ak[aj].className)){aa(ak[aj])
}}}}}B=S();D();return{setTrackerUrl:function(ai){if(a(ai)){I=ai}},setSiteId:function(ai){if(a(ai)){ag=ai}},setCustomData:function(ai){if(a(ai)){T=ai}},setLinkTrackingTimer:function(ai){if(a(ai)){H=ai}},setDownloadExtensions:function(ai){if(a(ai)){L=ai}},addDownloadExtensions:function(ai){if(a(ai)){L+="|"+ai}},setDomains:function(ai){if(typeof ai=="object"&&ai instanceof Array){X=ai;X.push(A)}else{if(typeof ai=="string"){X=[ai,A]}}},setIgnoreClasses:function(ai){if(typeof ai=="object"&&ai instanceof Array){z=ai}else{if(typeof ai=="string"){z=[ai]}}},setRequestMethod:function(ai){x=ai||"GET"},setReferrerUrl:function(ai){if(a(ai)){W=ai}},setCustomUrl:function(ai){if(a(ai)){ab=ai}},setDocumentTitle:function(ai){if(a(ai)){af=ai}},setDownloadClasses:function(ai){if(typeof ai=="object"&&ai instanceof Array){Y=ai}else{if(typeof ai=="string"){Y=[ai]}}},setDownloadClass:function(ai){if(typeof ai=="string"){Y=[ai]}},setLinkClasses:function(ai){if(typeof ai=="object"&&ai instanceof Array){Z=ai}else{if(typeof ai=="string"){Z=[ai]
}}},setLinkClass:function(ai){if(typeof ai=="string"){Z=[ai]}},addListener:function(ai){if(a(ai)){aa(ai)}},enableLinkTracking:function(){if(f){O()}else{r[r.length]=function(){O()}}},trackGoal:function(ai,ak,aj){ad(ai,ak,aj)},trackLink:function(aj,ai,ak){K(aj,ai,ak)},trackPageView:function(ai,aj){w(ai,aj)}}}n(u,"beforeunload",s,false);q();return{addPlugin:function(v,w){p[v]=w},getTracker:function(v,w){return new t(v,w)}}}());piwik_log=function(b,e,c,f){function a(g){try{return eval("piwik_"+g)}catch(h){}return}var d=Piwik.getTracker(c,e);d.setDocumentTitle(b);d.setCustomData(f);d.setLinkTrackingTimer(a("tracker_pause"));d.setDownloadExtensions(a("download_extensions"));d.setDomains(a("hosts_alias"));d.setIgnoreClasses(a("ignore_classes"));d.trackPageView();if(a("install_tracker")!==false){piwik_track=function(h,j,i,g){d.setSiteId(j);d.setTrackerUrl(i);d.trackLink(h,g)};d.enableLinkTracking()}}};