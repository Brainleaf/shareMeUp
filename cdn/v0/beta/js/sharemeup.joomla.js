   /*! 
    *  jQueryShareMeUp | contents sharing widget 
    *  Version 0.9.2-beta - CDN - 2015-06-21 
    *  HomePage: https://github.com/Brainleaf/shareMeUp 
   */ 
var shareMeUp=function(a){function b(a){jQuery.ajax({url:a.plugin,success:function(){jQuery(".sharemeup").shareMeUp({size:a.size,style:a.style,imgPath:a.imgPath})},error:function(){alert("ShareMeUp: Ajax Error!")}})}this.params=a,this.params.css="http://brainleaf.github.io/shareMeUp/cdn/alpha/latest/css/sharemeup.min.css",this.params.plugin="http://brainleaf.github.io/shareMeUp/cdn/alpha/latest/js/jquery.sharemeup.min.js",this.params.imgPath="http://brainleaf.github.io/shareMeUp/cdn/alpha/latest/img/sharemeup/",this.init=function(){jQuery("body").one().prepend('<link rel="stylesheet" href="'+this.params.css+'">'),this.params.async===!0?jQuery(window).on("load",b(this.params)):jQuery(document).on("ready",b(this.params))}};