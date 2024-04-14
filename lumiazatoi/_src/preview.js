/*@license
 *
 * Tokusetsu 4:
 *   licenses: MIT
 *   Copyright (c) 2022 sanographix
 *   https://github.com/sanographix/tokusetsu4
 * CSV.js:
 *   licenses: MIT
 *   Copyright (c) 2014 Kash Nouroozi
 *   https://github.com/knrz/CSV.js
 * vanilla-tilt.js:
 *   licenses: MIT
 *   Copyright (c) 2017 Șandor Sergiu
 *   https://github.com/micku7zu/vanilla-tilt.js
 * i18n-language.js:
 *   licenses: MIT
 *   Copyright (c) 2020 Shin Hyun
 *   https://github.com/kyaryunha/i18n-language.js
*/
function csv_data(dataPath){const request=new XMLHttpRequest;request.addEventListener("load",event=>{csv_array(event.target.responseText)}),request.open("GET",dataPath,!0),request.send()}function csv_array(data){const array=new CSV(data,{header:["option","value1","value2","value3","value4","value5","required","description"],cast:!1}).parse();console.log(array);const optWorkTitle=array.filter(value=>"Title"===value.option),optOrganization=array.filter(value=>"Organization Name"===value.option),valWorkTitle=optWorkTitle[0].value1;var valOrganization=optOrganization[0].value1;encodeURIComponent(valWorkTitle);const siteTitle=new String(valWorkTitle+" | "+valOrganization),encodedSiteTitle=encodeURIComponent(siteTitle);document.title=siteTitle;const siteUrl=`${location.protocol}//${location.hostname}/`,valHashtag=array.filter(value=>"Hashtag"===value.option)[0].value1;try{const valFavicon=array.filter(value=>"Site Icon (favicon)"===value.option)[0].value1;if(""!=valFavicon){var favicon=document.createElement("link");favicon.rel="icon",favicon.href=valFavicon,document.head.appendChild(favicon)}}catch(error){console.error("Error: favicon")}try{document.getElementById("canonical").href=siteUrl}catch(error){console.error("Error: canonical")}var valCoverSrc=array.filter(value=>"Cover"===value.option)[0].value1;var valOgImageSrc=array.filter(value=>"Share Image"===value.option)[0].value1;if(""!=valOgImageSrc)var valOgImage=valOgImageSrc;else valOgImage=valCoverSrc;const optAbout=array.filter(value=>"About"===value.option),valAbout=optAbout[0].value1;try{const OGP=[{property:"og:description",content:valAbout},{property:"og:title",content:siteTitle},{property:"og:url",content:siteUrl},{property:"og:image",content:siteUrl+valOgImage},{name:"twitter:title",content:siteTitle},{name:"twitter:description",content:valAbout},{name:"twitter:image",content:siteUrl+valOgImage}];for(let i=0;i<OGP.length;i++){const metaTag=document.createElement("meta");for(let prop in OGP[i])metaTag.setAttribute(prop,OGP[i][prop]);document.head.appendChild(metaTag)}}catch(error){console.error("Error: OGP")}function blackOrWhite(hexcolor){return(299*parseInt(hexcolor.substr(1,2),16)+587*parseInt(hexcolor.substr(3,2),16)+114*parseInt(hexcolor.substr(5,2),16))/1e3<128?"white":"black"}try{var valBackgroundColor=array.filter(value=>"Background Color (Hex)"===value.option)[0].value1;""!=valBackgroundColor&&document.head.insertAdjacentHTML("beforeend","<style>:root{--color-bg:"+valBackgroundColor+"}</style>")}catch(error){console.error("Error: background-color")}try{const valAccentColor=array.filter(value=>"Accent Color (Hex)"===value.option)[0].value1;if(""!=valAccentColor){switch(document.head.insertAdjacentHTML("beforeend","<style>:root{--color-primary:"+valAccentColor+"}</style>"),document.documentElement.setAttribute("data-accent-color",valAccentColor),document.getElementById("meta-theme-color").content=valAccentColor,blackOrWhite(valAccentColor)){case"black":document.head.insertAdjacentHTML("beforeend","<style>:root{--color-btn-primary-text: var(--color-black)}</style>");break;case"white":document.head.insertAdjacentHTML("beforeend","<style>:root{--color-btn-primary-text: var(--color-white)}</style>")}}}catch(error){console.error("Error: accent-color")}try{const optBackgroundImage=array.filter(value=>"Background Image"===value.option),valBackgroundImageSrc=optBackgroundImage[0].value1,valBackgroundImageRepeat=optBackgroundImage[0].value2,valBackgroundImageAlign=optBackgroundImage[0].value3,valBackgroundImageFixed=optBackgroundImage[0].value4;switch(""!=valBackgroundImageSrc&&(document.body.style.backgroundImage="url("+valBackgroundImageSrc+")"),valBackgroundImageRepeat){case"Both":document.body.style.backgroundRepeat="repeat";break;case"Horizontally":document.body.style.backgroundRepeat="repeat-x";break;case"Vertically":document.body.style.backgroundRepeat="repeat-y";break;case"None":document.body.style.backgroundRepeat="no-repeat";break;default:document.body.style.backgroundRepeat="no-repeat"}switch(valBackgroundImageAlign){case"Center":document.body.style.backgroundPosition="center top";break;case"Left":document.body.style.backgroundPosition="left top";break;case"Right":document.body.style.backgroundPosition="right top";break;default:document.body.style.backgroundPosition="center top"}"✅"==valBackgroundImageFixed&&(document.body.style.backgroundAttachment="fixed")}catch(error){console.error("Error: Background Image")}try{const optContentBackground=array.filter(value=>"Content Background Color(Hex)"===value.option);var valContentBackgroundColor=optContentBackground[0].value1;const valContentBackgroundOpacity=optContentBackground[0].value2;if(""!=valContentBackgroundColor){document.head.insertAdjacentHTML("beforeend","<style>:root{--color-bg-content:"+valContentBackgroundColor+"}</style>"),document.querySelector(".js-containerMask").style.opacity=valContentBackgroundOpacity,document.body.classList.add("is-bgMask-enabled")}}catch(error){console.error("Error: Background mask opacity")}try{switch(blackOrWhite(valContentBackgroundColor)){case"black":document.documentElement.setAttribute("data-theme","Light");break;case"white":document.documentElement.setAttribute("data-theme","Dark")}}catch(error){console.error("Error: theme")}try{const domCover=document.querySelector(".js-cover-img");""!=valCoverSrc?domCover.setAttribute("src",valCoverSrc):document.querySelector(".js-cover").remove()}catch(error){console.error("Error: Cover")}try{const valArtImageSrc=array.filter(value=>"Art Image"===value.option)[0].value1,domArtImage=document.querySelector(".js-art-img");""!=valArtImageSrc?(domArtImage.setAttribute("src",valArtImageSrc),document.getElementById("art-empty").remove()):document.getElementById("art").remove()}catch(error){console.error("Error: Art Image")}try{document.querySelector(".js-title").textContent=valWorkTitle}catch(error){console.error("Error: Title")}try{document.querySelector(".js-organizationName").textContent=valOrganization}catch(error){console.error("Error: Organization")}try{const domSpecification=document.querySelector(".js-specification-content"),valSpecification=array.filter(value=>"Specification"===value.option)[0].value1;domSpecification.textContent=valSpecification}catch(error){console.error("Error: Overview Specification")}try{const domReleaseDate=document.querySelector(".js-releaseDate-content"),valReleaseDate=array.filter(value=>"Release Date"===value.option)[0].value1;domReleaseDate.textContent=valReleaseDate}catch(error){console.error("Error: Overview Release Date")}try{const domLocation=document.querySelector(".js-location-content"),valLocation=array.filter(value=>"Location"===value.option)[0].value1;domLocation.textContent=valLocation,""==valLocation&&document.querySelector(".js-overview-label").remove()}catch(error){console.error("Error: Overview Location")}try{const domPrice=document.querySelector(".js-price-content"),valPrice=array.filter(value=>"Price"===value.option)[0].value1;domPrice.textContent=valPrice}catch(error){console.error("Error: Overview Price")}try{const domHashtag=document.querySelector(".js-hashtag"),domHashtagLabel=document.querySelector(".js-hashtag-label"),domHashtagLink=document.querySelector(".js-hashtag-link");if(""!=valHashtag){domHashtagLink.textContent="#"+valHashtag;const HashtagLink="https://twitter.com/hashtag/"+valHashtag+"?src=hash";domHashtagLink.setAttribute("href",HashtagLink)}else domHashtag.remove(),domHashtagLabel.remove()}catch(error){console.error("Error: Overview hashtag")}try{const domStoreHeading=document.querySelector(".js-store-heading"),valStoreHeading=array.filter(value=>"Store Heading"===value.option)[0].value1;domStoreHeading.textContent=valStoreHeading,""==valStoreHeading&&document.querySelector(".js-section-store").remove()}catch(error){console.error("Error: Store heading")}try{const domStoreWrap=document.querySelector(".js-store-wrap"),domStore=document.querySelector(".js-store-link"),optStore=array.filter(value=>"Store"===value.option);for(let i=0;i<optStore.length;i++){const domStoreClone=domStore.cloneNode(!0);""!=optStore[i].value1&&(domStoreClone.textContent=optStore[i].value1,domStoreClone.setAttribute("href",optStore[i].value2)),domStoreWrap.appendChild(domStoreClone)}domStore.remove()}catch(error){console.error("Error: Store")}try{const domShareTwitter=document.querySelector(".js-share-tw"),domShareFacebook=document.querySelector(".js-share-fb");let twitterLink="https://twitter.com/share?text="+encodedSiteTitle+"&url="+siteUrl;""!=valHashtag&&(twitterLink+="&hashtags="+valHashtag),domShareTwitter.setAttribute("href",twitterLink);const facebookLink="http://www.facebook.com/sharer.php?u="+siteUrl;domShareFacebook.setAttribute("href",facebookLink)}catch(error){console.error("Error: Share buttons")}try{const domSoundCloudPlayer=document.getElementById("soundcloud-embed"),valPlayerSoundCloud=array.filter(value=>"Player (SoundCloud)"===value.option)[0].value2,soundCloudType=array.filter(value=>"Player (SoundCloud)"===value.option)[0].value1;if(""!=valPlayerSoundCloud)switch(soundCloudType){case"Track":domSoundCloudPlayer.setAttribute("src","https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/"+valPlayerSoundCloud+"&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true");break;case"Playlist":domSoundCloudPlayer.setAttribute("src","https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/"+valPlayerSoundCloud+"&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true")}else domSoundCloudPlayer.remove()}catch(error){console.error("Error: SoundCloud Player")}try{const domYouTubePlayer=document.getElementById("youtube-embed"),valPlayerYouTube=array.filter(value=>"Player (YouTube)"===value.option)[0].value2;""!=valPlayerYouTube?domYouTubePlayer.querySelector(".js-embedded-player").setAttribute("src","https://www.youtube.com/embed/"+valPlayerYouTube):domYouTubePlayer.remove()}catch(error){console.error("Error: YouTube Player")}try{const domAboutHeading=document.querySelector(".js-about-heading"),valAboutHeading=array.filter(value=>"About Heading"===value.option)[0].value1;domAboutHeading.textContent=valAboutHeading}catch(error){console.error("Error: About heading")}try{const domAboutWrap=document.querySelector(".js-about-wrap"),domAbout=document.querySelector(".js-about");for(let i=0;i<optAbout.length;i++){const domAboutClone=domAbout.cloneNode(!0);domAboutClone.textContent=optAbout[i].value1,domAboutWrap.appendChild(domAboutClone)}domAbout.remove()}catch(error){console.error("Error: About")}try{const optGallery=array.filter(value=>"Gallery"===value.option),domGalleryWrap=document.querySelector(".js-dom-gallery-wrap"),domGallery=document.querySelector(".js-dom-gallery"),domGalleryLightboxWrap=document.querySelector(".js-dom-gallery-lightbox-wrap"),domGalleryLightbox=document.querySelector(".js-dom-gallery-lightbox");for(let i=0;i<optGallery.length;i++){const domGalleryClone=domGallery.cloneNode(!0);domGalleryClone.setAttribute("data-index",i+1),domGalleryClone.querySelector(".js-dom-gallery-img").setAttribute("src",optGallery[i].value1),domGalleryWrap.appendChild(domGalleryClone);const domGalleryLightboxClone=domGalleryLightbox.cloneNode(!0);domGalleryLightboxClone.setAttribute("data-index",i+1),domGalleryLightboxClone.querySelector(".js-dom-gallery-lightbox-img").setAttribute("src",optGallery[i].value1),domGalleryLightboxWrap.appendChild(domGalleryLightboxClone)}domGallery.remove(),domGalleryLightbox.remove(),""==optGallery[0].value1&&document.getElementById("gallery").remove()}catch(error){console.error("Error: Gallery")}try{const domTracklistHeading=document.querySelector(".js-tracklist-heading"),valTracklistHeading=array.filter(value=>"Tracklist Heading"===value.option)[0].value1;domTracklistHeading.textContent=valTracklistHeading,""==valTracklistHeading&&document.getElementById("tracklist").remove()}catch(error){console.error("Error: Tracklist heading")}try{const domTrackWrap=document.querySelector(".js-track-wrap"),domTrack=document.querySelector(".js-track"),optTrack=array.filter(value=>"Track"===value.option);for(let i=0;i<optTrack.length;i++){const domTrackClone=domTrack.cloneNode(!0);domTrackClone.querySelector(".js-track-name").textContent=optTrack[i].value1,""!=optTrack[i].value2?domTrackClone.querySelector(".js-track-description").textContent=optTrack[i].value2:domTrackClone.querySelector(".js-track-description").remove(),""!=optTrack[i].value1&&domTrackWrap.appendChild(domTrackClone)}domTrack.remove()}catch(error){console.error("Error: Track")}try{const domMemberHeading=document.querySelector(".js-member-heading"),valMemberHeading=array.filter(value=>"Member Heading"===value.option)[0].value1;domMemberHeading.textContent=valMemberHeading}catch(error){console.error("Error: Member heading")}try{const domMemberWrap=document.querySelector(".js-member-wrap"),domMember=document.querySelector(".js-member"),optMember=array.filter(value=>"Member"===value.option);for(let i=0;i<optMember.length;i++){const domMemberClone=domMember.cloneNode(!0);domMemberClone.querySelector(".js-member-name").textContent=optMember[i].value1,""!=optMember[i].value2?domMemberClone.querySelector(".js-member-role").textContent=optMember[i].value2:domMemberClone.querySelector(".js-member-role").remove(),""!=optMember[i].value3?domMemberClone.querySelector(".js-member-url").setAttribute("href",optMember[i].value3):domMemberClone.querySelector(".js-member-link").remove(),domMemberWrap.appendChild(domMemberClone)}domMember.remove()}catch(error){console.error("Error: Member")}try{const valOrganizationLogoSrc=array.filter(value=>"Organization Logo"===value.option)[0].value1,domOrganizationLogo=document.querySelector(".js-organization-logo-img");""!=valOrganizationLogoSrc?(domOrganizationLogo.setAttribute("src",valOrganizationLogoSrc),domOrganizationLogo.setAttribute("alt",valOrganization)):(domOrganizationLogo.remove(),document.querySelector(".js-organization-logo").textContent=valOrganization)}catch(error){console.error("Error: Organization Logo")}try{const domOrganizationLinkWrap=document.querySelector(".js-organization-link-wrap"),domOrganizationLink=document.querySelector(".js-organization-link"),optOrganizationLink=array.filter(value=>"Organization Link"===value.option);for(let i=0;i<optOrganizationLink.length;i++){const domOrganizationLinkClone=domOrganizationLink.cloneNode(!0);domOrganizationLinkClone.setAttribute("href",optOrganizationLink[i].value2),domOrganizationLinkClone.querySelector(".js-organization-link-label").textContent=optOrganizationLink[i].value1,domOrganizationLinkWrap.appendChild(domOrganizationLinkClone)}domOrganizationLink.remove(),""==optOrganizationLink[0].value1&&domOrganizationLinkWrap.remove()}catch(error){console.error("Error: Organization Links")}document.querySelector(".js-footer-workTitle").textContent=valWorkTitle;try{const domFooterText=document.querySelector(".js-footer-text"),valFooterText=array.filter(value=>"Footer Text"===value.option)[0].value1;""!=valFooterText?domFooterText.textContent=valFooterText:domFooterText.remove()}catch(error){console.error("Error: Footer text")}if("?prebuild=true"===location.search){document.querySelector(".js-prebuild").remove(),"-"==array.filter(value=>"Hide on Search Results"===value.option)[0].value1&&document.getElementById("meta-robots").remove(),window.addEventListener("load",function(){let snapshot=(new XMLSerializer).serializeToString(document);snapshot=(snapshot=snapshot.replace('<script src="_src/preview.js"><\/script>',"")).replace('<script src="_src/i18n-language.js"><\/script>',"");let blob=new Blob([snapshot],{type:"text/plan"}),link=document.createElement("a");link.href=URL.createObjectURL(blob),link.download="index.html",link.click()})}}!function(t,e){"function"==typeof define&&define.amd?define([],e):"object"==typeof module&&module.exports?module.exports=e():t.CSV=e()}(this,function(){"use strict";function e(t){return"string"==typeof t}function c(t,e){return function(t){return null!=t}(t)?t:e}function u(t,e){for(var n=0,i=t.length;i>n&&!1!==e(t[n],n);n+=1);}function s(t){return t.replace(/"/g,'\\"')}function a(t){return"attrs["+t+"]"}function l(t,e){return function(t){return!isNaN(+t)}(t)?"Number("+a(e)+")":function(t){return 0==t||1==t}(t)?"Boolean("+a(e)+" == true)":"String("+a(e)+")"}function f(t,n,i,r){var o=[];return 3==arguments.length?(n?g(n)?u(i,function(i,r){e(n[r])?n[r]=n[r].toLowerCase():t[n[r]]=n[r],o.push("deserialize[cast["+r+"]]("+a(r)+")")}):u(i,function(t,e){o.push(l(t,e))}):u(i,function(t,e){o.push(a(e))}),o="return ["+o.join(",")+"]"):(n?g(n)?u(i,function(i,c){e(n[c])?n[c]=n[c].toLowerCase():t[n[c]]=n[c],o.push('"'+s(r[c])+'": deserialize[cast['+c+"]]("+a(c)+")")}):u(i,function(t,e){o.push('"'+s(r[e])+'": '+l(t,e))}):u(i,function(t,e){o.push('"'+s(r[e])+'": '+a(e))}),o="return {"+o.join(",")+"}"),Function("attrs","deserialize","cast",o)}function h(t,e){var n,i=0;return u(e,function(e){var r,o=e;-1!=p.indexOf(e)&&(o="\\"+o),(r=t.match(RegExp(o,"g")))&&r.length>i&&(i=r.length,n=e)}),n||e[0]}var p=["|","^"],d=[",",";","  ","|","^"],m=["\r\n","\r","\n"],g=Array.isArray||function(t){return"[object Array]"===toString.call(t)},y=function(){function n(t,n){if(n||(n={}),g(t))this.mode="encode";else{if(!e(t))throw Error("Incompatible format!");this.mode="parse"}this.data=t,this.options={header:c(n.header,!1),cast:c(n.cast,!0)};var i=n.lineDelimiter||n.line,r=n.cellDelimiter||n.delimiter;this.isParser()?(this.options.lineDelimiter=i||h(this.data,m),this.options.cellDelimiter=r||h(this.data,d),this.data=function(t,e){return t.slice(-e.length)!=e&&(t+=e),t}(this.data,this.options.lineDelimiter)):this.isEncoder()&&(this.options.lineDelimiter=i||"\r\n",this.options.cellDelimiter=r||",")}function i(t,e,n,i,r){t(new e(n,i,r))}function s(n){return g(n)?"array":function(t){var e=typeof t;return"function"===e||"object"===e&&!!t}(n)?"object":e(n)?"string":function(t){return null==t}(n)?"null":"primitive"}return n.prototype.set=function(t,e){return this.options[t]=e},n.prototype.isParser=function(){return"parse"==this.mode},n.prototype.isEncoder=function(){return"encode"==this.mode},n.prototype.parse=function(t){function e(){s={escaped:!1,quote:!1,cell:!0}}function o(t){m.line.push(s.escaped?t.slice(1,-1).replace(/""/g,'"'):t),m.cell="",e()}function c(t){o(t.slice(0,1-p.lineDelimiter.length))}function u(){d?g(d)?(a=f(y,p.cast,m.line,d),(u=function(){i(t,a,m.line,y,p.cast)})()):d=m.line:(a||(a=f(y,p.cast,m.line)),(u=function(){i(t,a,m.line,y,p.cast)})())}if("parse"==this.mode){if(0===this.data.trim().length)return[];var s,a,l,h=this.data,p=this.options,d=p.header,m={cell:"",line:[]},y=this.deserialize;t||(l=[],t=function(t){l.push(t)}),1==p.lineDelimiter.length&&(c=o);var v,A,D,b=h.length,j=p.cellDelimiter.charCodeAt(0),w=p.lineDelimiter.charCodeAt(p.lineDelimiter.length-1);for(e(),v=0,A=0;b>v;v++)D=h.charCodeAt(v),s.cell&&(s.cell=!1,34==D)?s.escaped=!0:s.escaped&&34==D?s.quote=!s.quote:(s.escaped&&s.quote||!s.escaped)&&(D==j?(o(m.cell+h.slice(A,v)),A=v+1):D==w&&(c(m.cell+h.slice(A,v)),A=v+1,(m.line.length>1||""!==m.line[0])&&u(),m.line=[]));return l||this}},n.prototype.deserialize={string:function(t){return t+""},number:function(t){return+t},boolean:function(t){return!!t}},n.prototype.serialize={object:function(t){var e=this,n=Object.keys(t),i=Array(n.length);return u(n,function(n,r){i[r]=e[s(t[n])](t[n])}),i},array:function(t){var e=this,n=Array(t.length);return u(t,function(t,i){n[i]=e[s(t)](t)}),n},string:function(t){return'"'+(t+"").replace(/"/g,'""')+'"'},null:function(){return""},primitive:function(t){return t}},n.prototype.encode=function(t){function n(t){return t.join(c.cellDelimiter)}if("encode"==this.mode){if(0==this.data.length)return"";var i,r,o=this.data,c=this.options,a=c.header,l=o[0],f=this.serialize,h=0;t||(r=Array(o.length),t=function(t,e){r[e+h]=t}),a&&(g(a)||(a=i=Object.keys(l)),t(n(f.array(a)),0),h=1);var p,d=s(l);return"array"==d?(g(c.cast)?(p=Array(c.cast.length),u(c.cast,function(t,n){e(t)?p[n]=t.toLowerCase():(p[n]=t,f[t]=t)})):(p=Array(l.length),u(l,function(t,e){p[e]=s(t)})),u(o,function(e,i){var r=Array(p.length);u(e,function(t,e){r[e]=f[p[e]](t)}),t(n(r),i)})):"object"==d&&(i=Object.keys(l),g(c.cast)?(p=Array(c.cast.length),u(c.cast,function(t,n){e(t)?p[n]=t.toLowerCase():(p[n]=t,f[t]=t)})):(p=Array(i.length),u(i,function(t,e){p[e]=s(l[t])})),u(o,function(e,r){var o=Array(i.length);u(i,function(t,n){o[n]=f[p[n]](e[t])}),t(n(o),r)})),r?r.join(c.lineDelimiter):this}},n.prototype.forEach=function(t){return this[this.mode](t)},n}();return y.parse=function(t,e){return new y(t,e).parse()},y.encode=function(t,e){return new y(t,e).encode()},y.forEach=function(t,e,n){return 2==arguments.length&&(n=e),new y(t,e).forEach(n)},y}),csv_data("../config.csv");