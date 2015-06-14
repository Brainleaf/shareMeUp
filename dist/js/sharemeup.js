var shareMeUp = function (params) {
    
    this.params = params;
    this.params.css = "css/sharemeup.min.css";
    this.params.plugin = "js/jquery.sharemeup.js";
    this.params.imgPath = "img/sharemeup/"
    
    this.init = function () {
        $('body').one().prepend('<link rel="stylesheet" href="'+ this.params.css +'">');
                    
        if ( this.params.async === true ) {
            $(window).on('load', ajaxCaller(this.params));
        } else {
            $(document).on('ready', ajaxCaller(this.params));            
        }
        
    };
    
    function ajaxCaller(params) {
        $.ajax({
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