var shareMeUp = function (params) {
    
    this.params = params;
    
    this.init = function () {
        $('body').one().prepend('<link rel="stylesheet" href="../../src/css/sharemeup.css">');
                    
        if ( this.params.async === true ) {
            $(window).on('load', ajaxCaller(this.params));
        } else {
            $(document).on('ready', ajaxCaller(this.params));            
        }
        
    };
    
    function ajaxCaller(params) {
        $.ajax({
            url: '../../src/jquery.sharemeup.js',
            success: function() {
                $('.sharemeup').shareMeUp({
                    size: params.size,
                    style: params.style,
                    imgPath: "../../icons/"
                });
            },
            error: function() {
                alert('error');
            }
        });
    }
}