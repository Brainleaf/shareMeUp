
;(function ( $, window, document, undefined ) {

	"use strict";

        var pluginName = "shareMeUp",
            defaults = {
                buttons: "single", // group
                layout: "default",// not used
                size: "medium",
                style: "default",
                imgPath: "img/sharemeup/"
            };

		// Constructor
		function Plugin ( element, options ) {
            this.element = element;

            this.settings = $.extend( {}, defaults, options );
            this._defaults = defaults;
            this._name = pluginName;


            this.shareDomain = window.location.hostname;
            this.shareLink = window.location.href;
            this.shareTitle = document.title;
            this.shareMedia = $('meta[property="og:image"]').attr('content');


            this.facebook = "http://www.facebook.com/sharer/sharer.php?u={[URL]}&title={[TITLE]}",
            this.twitter = "http://twitter.com/intent/tweet?status={[TITLE]}+{[URL]}",
            this.google_plus = "https://plus.google.com/share?url={[URL]}",
            this.linkedin = "http://www.linkedin.com/shareArticle?mini=true&url={[URL]}&title={[TITLE]}&source={[DOMAIN]}",
            this.pinterest = "http://pinterest.com/pin/create/button/?media={[MEDIA]}&url={[URL]}&is_video=false&description={[TITLE]}",
            this.stumbleupon = "http://www.stumbleupon.com/submit?url={[URL]}&title={[TITLE]}";   
            this.delicious = "http://del.icio.us/post?url={[URL]}&title={[TITLE]]}";
            this.reddit = "http://www.reddit.com/submit?url={[URL]}&title={[TITLE]}";
            //this.delicious = "http://del.icio.us/post?url={[URL]}&title={[TITLE]]}&notes={[DESCRIPTION]}";

            this.init();
		}

		// Avoid Plugin.prototype conflicts
		$.extend(Plugin.prototype, {
            init: function () {
                
                this.settings.custom = $(this.element).data('custom');
                if ($(this.element).hasClass('custom')) this.settings.custom = true;
                
                this.settings.group = $(this.element).data('group');
                if ($(this.element).hasClass('sharegroup')) this.settings.group = true;
                
                if (this.settings.group !==  undefined && this.settings.group === true) {
                    this.setButtonsGroup();
                }else{
                    this.setButton();
                }

            },
            
            /* ====================================================== */
            /* GET PARAMETERS */
            /* ====================================================== */
            getParameters: function () {
                var params = {};
                    params.social = $(this.element).data('social'); 
                    params.title = $(this.element).data('title');
                    params.link = $(this.element).data('link');
                    params.media = $(this.element).data('media');
                    params.domain = this.shareDomain;
                    params.size = this.settings.size;
                    params.style = this.settings.style;

                if ( params.social === "" || params.social === undefined ) alert('shareMeUp: Error! No Element!');
                if ( params.media === undefined && this.shareMedia !== undefined ) params.media = this.shareMedia; 

                if ( params.title === "" || params.title === undefined) params.title = this.shareTitle;
                if ( params.link === "" || params.link === undefined) params.link = this.shareLink;

                return params;
            },
            
            /* ====================================================== */
            /* GET BUTTON SIZE */
            /* ====================================================== */
            getBtnSize: function (btnSize) {
                
                switch(btnSize) {
                    case "small":
                        var btnPxSize = "15px"
                        break;
                    case "medium":
                        var btnPxSize = "30px"
                        break;
                    case "large":
                        var btnPxSize = "40px"
                        break;
                    default:
                        var btnPxSize = "30px"
                        break;
                } 
                
                return btnPxSize;
            },
            
            /* ====================================================== */
            /* SET SHARE BUTTONS GRUOP */
            /* ====================================================== */
            setButtonsGroup: function () {
                var
                    markup = "",
                    plugin = this,
                    params = this.getParameters(),
                    socialsArray = params.social;
                
                socialsArray = socialsArray.replace(" ","");
                socialsArray = socialsArray.split(",");
                
                $.each(socialsArray, function(index) {
                    
                    params.social = socialsArray[index];
                    
                    var linkString = plugin[params.social],
                        url = linkString.replace('{[URL]}',params.link);
                        url = url.replace('{[TITLE]}',params.title);
                        url = url.replace('{[MEDIA]}',params.media);
                        url = url.replace('{[DOMAIN]}',params.domain);
                    
                    var btnPxSize = plugin.getBtnSize(params.size);
                    var content = '<img src="' + plugin.settings.imgPath + params.style + '/btn_' + params.style + '_' + params.social + '_' + params.size + '.png" style="width:100%;height:auto;" alt="'+ params.social +'">'; 
                    
                    markup += '<span style="width:'+ btnPxSize +'; height:'+ btnPxSize +'; display:inline-block;"><a class="sharemeup-link" href="'+ url +'">'+ content +'</a></span>\n'; 
                });
                
                $(this.element).html(markup);
                this.openShrarePopup();
            },
            
            /* ====================================================== */
            /* SET SHARE BUTTON */
            /* ====================================================== */
            setButton: function () {
                
                var 
                    markup = "",
                    params = this.getParameters();

                var linkString = this[params.social];
                var url = linkString.replace('{[URL]}',params.link);
                    url = url.replace('{[TITLE]}',params.title);
                    url = url.replace('{[MEDIA]}',params.media);
                    url = url.replace('{[DOMAIN]}',params.domain);

                if ( this.settings.custom !== undefined && this.settings.custom === true ) {
                    
                    var content = $(this.element).html(); 

                }else{
                    
                    var btnPxSize = this.getBtnSize(params.size);
                                        
                    $(this.element).css({"width":btnPxSize,"height":btnPxSize,"display":"inline-block"});
                    var content = '<img src="' + this.settings.imgPath + params.style + '/btn_' + params.style + '_' + params.social + '_' + params.size + '.png" style="width:100%;height:auto;" alt="'+ params.social +'">'; 
                }
                
                if(params.social === "pinterest") {
                    var dataAttribute = ' data-pin-config="above"';
                }else{
                    var dataAttribute = '';
                }
                
                markup = '<a class="sharemeup-link" href="' + url + '"' + dataAttribute +' target="_blank">' + content + '</a>';
                $(this.element).html(markup);
                this.openShrarePopup();

            },
            
            /* ====================================================== */
            /* OPEN SHARE WINDOW POPUP */
            /* ====================================================== */
            openShrarePopup: function() {
                $(this.element).find('a').on('click', function(e) {
                    e.preventDefault(e);
                    var vw = $(window).width();
                    var vh = $(window).height();
                    var popupW = vw/2;
                    var popupH = vh/1.1;
                    var popupT = vh/2 - popupH/2;
                    var popupL = vw/2 - popupW/2;
                    var newwindow = window.open($(this).attr('href'),'ShareMeUp','height='+popupH+',width='+popupW+',top='+popupT+',left='+popupL);
                    if (window.focus) {newwindow.focus()}
                    return false;
                });
            }
		});

		// A really lightweight plugin wrapper around the constructor,
		// preventing against multiple instantiations
		$.fn[ pluginName ] = function ( options ) {
            return this.each(function() {
                    if ( !$.data( this, "plugin_" + pluginName ) ) {
                            $.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
                    }
            });
		};

})( jQuery, window, document );
