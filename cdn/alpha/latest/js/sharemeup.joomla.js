var shareMeUp = function (params) {
    
    this.params = params;
    this.params.css = "http://brainleaf.github.io/shareMeUp/cdn/alpha/latest/css/sharemeup.min.css";
    this.params.plugin = "http://brainleaf.github.io/shareMeUp/cdn/alpha/latest/js/jquery.sharemeup.min.js";
    this.params.imgPath = "http://brainleaf.github.io/shareMeUp/cdn/alpha/latest/img/sharemeup/"
    
    this.init = function () {
        jQuery('body').one().prepend('<link rel="stylesheet" href="'+ this.params.css +'">');
                    
        if ( this.params.async === true ) {
            jQuery(window).on('load', ajaxCaller(this.params));
        } else {
            jQuery(document).on('ready', ajaxCaller(this.params));            
        }
        
    };
    
    function ajaxCaller(params) {
        jQuery.ajax({
            url: params.plugin,
            success: function() {
                $('.sharemeup').shareMeUp({
                    size: params.size,
                    style: params.style,
                    imgPath: params.imgPath
                });
            },
            error: function() {
                alert('ShareMeUp: Ajax Error!');
            }
        });
    }
}
