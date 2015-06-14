var shareMeUp = function (params) {
    
    this.params = params;
    
    this.init = function () {
        $('body').one().prepend('<link rel="stylesheet" href="https://cdn.rawgit.com/Brainleaf/shareMeUp/master/cdn/alpha/latest/css/sharemeup.min.css">');
                    
        if ( this.params.async === true ) {
            $(window).on('load', ajaxCaller(this.params));
        } else {
            $(document).on('ready', ajaxCaller(this.params));            
        }
        
    };
    
    function ajaxCaller(params) {
        $.ajax({
            url: 'https://cdn.rawgit.com/Brainleaf/shareMeUp/master/cdn/alpha/latest/js/jquery.sharemeup.min.js',
            success: function() {
                $('.sharemeup').shareMeUp({
                    size: params.size,
                    style: params.style,
                    imgPath: "https://cdn.rawgit.com/Brainleaf/shareMeUp/master/cdn/alpha/latest/img/sharemeup/"
                });
            },
            error: function() {
                alert('error');
            }
        });
    }
}