   /*! 
    *  jQueryShareMeUp | contents sharing widget 
    *  Version 1.0.0 - CDN - 2015-07-01 
    *  HomePage: https://github.com/Brainleaf/shareMeUp 
   */ 
var shareMeUp=function(a){function b(a){$.ajax({url:a.plugin,success:function(){$(".sharemeup").shareMeUp({size:a.size,style:a.style,imgPath:a.imgPath})},error:function(){alert("ShareMeUp: Ajax Error!")}})}this.params=a,this.cdn="https://brainleaf.github.io/shareMeUp/cdn/v1/latest/",this.params.css=this.cdn+"css/sharemeup.min.css",this.params.plugin=this.cdn+"js/jquery.sharemeup.min.js",this.params.imgPath=this.cdn+"img/sharemeup/",this.init=function(){$("body").one().prepend('<link rel="stylesheet" href="'+this.params.css+'">'),this.params.async===!0?$(window).on("load",b(this.params)):$(document).on("ready",b(this.params))}};