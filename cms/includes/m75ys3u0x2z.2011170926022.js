function _said_(n,t,i){if(n===undefined)return+$.cookie("_sa");_vaid_(t);$.cookie("_sa",n,{domain:_domain});_set6210(n,i)}function _vaid_(n){if(typeof localStorage=="undefined")return null;if(n===undefined)return localStorage._vid_;n>0&&(localStorage._vid_=n)}function _raid_(n,t,i,r,u,f,e,o,s,h,c,l,a,v){var nt,w,b,k,p,d,tt,it,g,y;if(n&&t){for(_said_(n,t,i),nt={expires:v,domain:_domain},w={SPPC:i,PPCAD:r,PPCEX:u,PPCCMP:f,SEOD:e,SEOK:o,PPCP1:s,PPCP2:h,PPCTR:c,L:l},b=Object.keys(w),k=b.length;k--;)p=b[k],d=w[p],d?$.cookie(p,d,nt):$.removeCookie(p);if(window.Process&&(window.Process.Delayed(),s=_getPhoneNumber(),s!=a)){if(tt="sa.scorpiondesign.com",it="https:"==document.location.protocol?"1":"",g=(it?"https://":"http://")+tt+"/sa6.js?"+__said+","+n+","+a+","+s,navigator.sendBeacon){navigator.sendBeacon(g);return}y=document.createElement("img");y.style.display="none";y.src="about:blank";document.body.appendChild(y);y.src=g}}}function _vvid_(n,t,i){var r,f=window.jwplayer,u=n&&document.getElementById(n);u&&u.nodeName&&/video/i.test(u.nodeName)?r=u:f&&(r=f(n));r&&t&&i&&(r.sa||(r.sa={}),r.sa.vvid=t,r.sa.vpid=i)}function _set6210(n,t){var i;n&&!__sd&&(t===undefined&&(t=$.cookie("SPPC")||""),!t||location.search&&/&(?:testmode|scid|noshrt)=/.test(location.search)||(i="#~"+_base6210(parseInt(n)),window.location.hash!=i&&(window.history&&window.history.replaceState?(window.location.search&&window.location.search.indexOf("SPPC=")>0&&(i=window.location.pathname+i),window.history.replaceState(undefined,undefined,i)):window.location.replace&&window.location.replace(i))))}function _getPhoneNumber(){var i,n,f,r,u,t;for(i=document.getElementsByTagName("a"),n=0,f=i.length;n<f;n++)if(r=i[n].getAttribute("href"),u=r&&/^tel:(.+)$/.exec(r),u&&(t=u[1].replace(/\D+/g,""),t&&t.length>=10))return t;return""}function _base6210(n){var t,u,e,o,i=1,r=!0,s=[],f;if(typeof n=="number"){if(isNaN(n))return undefined;for(t=n;t>0;)u=r?i*62:i*10,r=!r,e=t%u,o=_toDigit62(e/i),s.push(o),t-=e,i=u;return s.join("")}if(typeof n=="string"){if(!n)return 0;for(t=0,f=0;f<n.length;f++)u=_fromDigit62(n,f),t+=u*i,i*=r?62:10,r=!r;return t}return undefined}function _toDigit62(n){return n<10?String.fromCharCode(n+48):n<36?String.fromCharCode(n+55):String.fromCharCode(n+61)}function _fromDigit62(n,t){var i=n.charCodeAt(t);return i<58?i-48:i<91?i-55:i-61}window.registerLoading&&registerLoading("sa");__said=document.documentElement.getAttribute("data-sa");__sd=!!document.documentElement.getAttribute("data-sd");var _domain;_domain=window.location.host&&window.location.host.indexOf("www.")===0?window.location.host.substr(3):window.location.host;rrequire(["jquery","cookie"],function(){function ot(){for(var n,u={},r=[],t=document.getElementsByClassName?document.getElementsByClassName("ui-track-version"):$(".ui-track-version"),i=t.length;i--;)n=t[i].getAttribute("id"),n&&!u[n]&&(u[n]=!0,r.push(n));return r.length?encodeURIComponent(r.join("|")):""}if(__said&&!/google|bing|yahoo|spider|crawl|monitor|site24|bots\b|bot\b/i.test(window.navigator.userAgent||"")){var n,o,s,nt,h,i,c,l,a,v,tt,it,rt,ut,ft,et,k,e,y,t,r,d,p=$.cookie("SPPC")||"",u="sa.scorpiondesign.com",w=_said_()||0,b="https:"==document.location.protocol?"1":"",g=_getPhoneNumber(),f=document.createElement("script");f.type="text/javascript";f.async=!0;n=$.cookie("L")||"0";o=ot()||"0";s=window.Process&&Process.Phones&&Process.Phones()||"0";!p&&!__sd&&window.location.hash&&window.location.hash[1]==="~"&&(nt=_base6210(window.location.hash.substr(2)))>0?($.cookie("SPPC","true",{domain:_domain}),h=window.innerWidth||document.documentElement.offsetWidth||document.body.offsetWidth||0,i=new Date,c=new Date(i.getFullYear(),0,1),l=new Date(i.getFullYear(),6,1),a=Math.max(c.getTimezoneOffset(),l.getTimezoneOffset())/60,v=_vaid_()||0,f.src=(b?"https://":"http://")+u+"/sa4.js?"+__said+","+w+","+v+","+nt+","+h+","+a+","+g+","+encodeURIComponent(window.location.href)+","+n+","+o+","+s):w?(f.src=(b?"https://":"http://")+u+"/sa2.js?"+__said+","+w+","+g+","+encodeURIComponent(window.location.href)+","+n+","+o+","+s,(p||!__sd)&&_set6210(w,p),window.Process&&window.Process.Delayed()):(tt=$.cookie("SEOD")||"",it=$.cookie("SEOK")||"",h=window.innerWidth||document.documentElement.offsetWidth||document.body.offsetWidth||0,i=new Date,c=new Date(i.getFullYear(),0,1),l=new Date(i.getFullYear(),6,1),a=Math.max(c.getTimezoneOffset(),l.getTimezoneOffset())/60,v=_vaid_()||"",rt=$.cookie("PPCAD")||"",ut=$.cookie("PPCEX")||"",ft=$.cookie("PPCCMP")||"",et=__said+","+b+","+p+","+tt+","+encodeURIComponent(it)+","+h+","+a+","+g+","+encodeURIComponent(window.location.href)+","+v+","+rt+","+ut+","+ft+","+n+","+o+","+s,f.src=(b?"https://":"http://")+u+"/sa.js?"+et,window.Process&&window.Process.Delayed());k=document.getElementsByTagName("script")[0];k.parentNode.insertBefore(f,k);e=function(n){return n&&$.trim(n)?"."+$.trim(n).replace(/ +/g,".").replace(/:+/g,"\\:"):""};y=function(){return undefined};t=!1;d=function(i){var a,d,h,tt,it,rt,ut,ft,et,ot,g,c,o=$(i.target||i.srcElement),v=o[0].nodeName.toLowerCase(),b=o.closest("button"),k=b.closest("form"),ht=k.attr("method")==="post"?"1":"",st=k.attr("action"),nt=st&&k.data("search")&&k.find("input:text:visible").val(),f=o.closest("a[href]"),l=f.attr("href"),p=o.attr("id"),w=e(o.attr("class")),s=[];if($.isFunction(y)&&(nt=y(i)||nt),b.length?(o=b,v="button",p=b.attr("id"),w=e(o.attr("class")),l=st):f.length&&(o=f,v="a",p=f.attr("id"),w=e(o.attr("class"))),p?s.push("#"+p):(o.parents("[id],[class],li").filter(":not(body,html)").each(function(){var n=$(this),t=(n[0].nodeName||"").toLowerCase(),i=n.attr("id"),r=e(n.attr("class"));if(i)return s.unshift("#"+i),!1;r?s.unshift(t+r):s.unshift(t)}),a=$(s.join(" ")),a.length>1&&(h=-1,a.each(function(n){var t=$(this).find(v+w);if(t.index(o)>=0)return h=n,!1}),h>=0&&(s[s.length-1]+=":eq("+h+")",a=a.eq(h))),d=a.find(v+w),d.length===1?s.push(v+w):(h=d.index(o),h>=0&&s.push(v+w+":eq("+h+")"))),p=_said_(),tt="https:"==document.location.protocol?"1":"",it=encodeURIComponent(s.join(" ")),rt=window.innerWidth||document.documentElement.offsetWidth||document.body.offsetWidth||0,ut=window.innerHeight||document.documentElement.offsetHeight||document.body.offsetHeight||0,ft=Math.max(document.documentElement.scrollTop,document.body.scrollTop),et=i.pageX||i.clientX||0,ot=i.pageY||i.clientY||0,g=(tt?"https://":"http://")+u+"/sa3.js?"+__said+","+p+","+it+","+rt+","+ut+","+ft+","+et+","+ot+","+encodeURIComponent(l||"")+","+ht+","+encodeURIComponent(nt||"")+","+n,c=l&&f.length&&f[0].getAttribute&&f[0].getAttribute("data-conversion"),c&&(c="/SMS-Conversion.svc?href="+encodeURIComponent(l||"")+"&page="+encodeURIComponent(window.location.pathname+window.location.search||"")+"&conv="+encodeURIComponent(c||"")+"&btn="+encodeURIComponent(f[0].textContent||"")),navigator.sendBeacon){navigator.sendBeacon(g);c&&navigator.sendBeacon(c);return}if(t||(t=document.createElement("img"),t.style.display="none",t.src="about:blank",document.body.appendChild(t)),t.src=g,c&&(r||(r=document.createElement("img"),r.style.display="none",r.src="about:blank",document.body.appendChild(r)),r.src=c),f.length&&l&&!i.shiftKey&&!i.ctrlKey&&l.indexOf("javascript:")!=0&&l.indexOf("#")!=0&&(f.attr("target")||"_self")==="_self"){i.stopPropagation?(i.stopPropagation(),i.stopImmediatePropagation(),i.preventDefault()):i.returnValue=!1;f.one("click",function(n){n.stopPropagation()});return f=f[0],setTimeout(function(){f&&f.click&&f.click();f=null},100),!1}};document.addEventListener?document.addEventListener("click",d,!1):document.attachEvent&&document.attachEvent("onclick",d);window._sa_overrideSearch=function(n){y=n};window._sa_videoStart=function(t,i,r,f,e,o){var s,h,c;if(r.substring(0,11)=="/cms/video/"){$.ajax({url:r,dataType:"xml",success:function(n){var u,r;if($("video[src]",n).each(function(){var n=$(this),t=n.attr("src");if(n.attr("width"))u=t;else if(!r)return r=t,!1}),r=r||u,r){if(r=r.replace(/^(\w+:)?\d+\//,"/"),r.substring(0,11)=="/cms/video/")return}else return;window._sa_videoStart(t,i,r,f,e,o)}});return}s=document.createElement("script");h=_said_();c="https:"==document.location.protocol?"1":"";s.type="text/javascript";s.async=!0;s.src="about:blank";s.src=(c?"https://":"http://")+u+"/va.js?"+__said+","+h+","+t+","+encodeURIComponent(r||"")+","+f+","+e+","+i+","+o+","+n;(document.head||document.body).appendChild(s)};window._sa_videoPlay=function(t,i,r,f){var o="https:"==document.location.protocol?"1":"",e=(o?"https://":"http://")+u+"/va2.js?"+__said+","+t+","+i+","+r+","+f+","+n;if(navigator.sendBeacon){navigator.sendBeacon(e);return}va_play||(va_play=document.createElement("img"),va_play.style.display="none",va_play.src="about:blank",document.body.appendChild(va_play));va_play.src=e};window.register&&window.register("sa")}});
$.widget("cms.simpleShowHide",{options:{className:"show",slider:!1,fader:!1,speed:500,htmlClass:!1},_create:function(){var t,n;this.element.attr({role:"dialog"});this.btn=this.element.find('[data-role="btn"]').attr({role:"button",tabindex:0,"aria-pressed":!1,"aria-haspopup":!1});this.panel=this.element.find('[data-role="panel"]').attr({"aria-hidden":!0});t=this._handleEvents.bind(this);this.btn.on("click keydown",t);n=this;$(document).on("keydown",function(t){t.keyCode===27&&n.element.is("."+n.options.className)&&n.hidePanel()})},_handleEvents:function(n){(n.type!=="keydown"||n.keyCode===13)&&(this.element.is("."+this.options.className)?this.hidePanel():this.showPanel())},hidePanel:function(){this.element.removeClass(this.options.className).trigger("hidepanel");this.options.htmlClass===!0&&$("html").removeClass(this.options.className);this.panel.attr({"aria-hidden":!0});this.btn.attr({"aria-pressed":!1});this.options.slider===!0?this.panel.slideUp(this.options.speed):this.options.fader===!0&&this.panel.fadeOut(this.options.speed);this.btn.length===1?this.btn.focus():this.btn.filter('[ data-type="open" ]').focus()},showPanel:function(){this.element.addClass(this.options.className).trigger("showpanel");this.options.htmlClass===!0&&$("html").addClass(this.options.className);this.panel.attr({"aria-hidden":!1});this.btn.attr({"aria-pressed":!0});this.options.slider===!0?this.panel.slideDown(this.options.speed):this.options.fader===!0&&this.panel.fadeIn(this.options.speed);this.panel.focus()}});window.register&&window.register("/includes/js/simple-show-hide-script.js");
rrequire(["/includes/js/simple-show-hide-script.js"],function(){var n=$(".accessibility-options.v1");n.simpleShowHide({htmlClass:!0,className:"options-available"})});
rrequire("/includes/js/simple-show-hide-script.js",function(){var n=window.innerWidth-1025;n!==Math.abs(n)&&$("#HeaderV4").simpleShowHide({className:"menu-open",htmlClass:!0})});
rrequire("jquery",function(){function n(){(function(n){typeof rrequire=="function"?rrequire(["j/jquery"],n):n(jQuery,window)})(function(n){var i=n(".phone-mask"),t;i.on("input",function(){if(this.value&&this.value.match(/\d+/g)){if(this.value=this.value.match(/\d*/g).join("").replace(/(\d{0,3})(\d{0,3})(\d{0,4})/,"($1) $2-$3").replace(/-*$/g,"").substring(0,14),this.value.length<=6){var n=this.value.indexOf(")");this.setSelectionRange(n,n)}}else this.value=""});if(t=/Android/i,t=t.test(navigator&&navigator.userAgent),t)i.on("keydown keyup",function(){var n=this.value.indexOf(")");this.value.length<=6?this.setSelectionRange(n,n):this.setSelectionRange(this.value.length,this.value.length)});i.trigger("input")})}n();window.register&&window.register("/includes/js/phone-format.js")});
rrequire("map",function(){$("#ContactSystemV2 .imap").gmap({data:!0})});