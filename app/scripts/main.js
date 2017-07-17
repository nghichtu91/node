/***************************************************
Description: Script dùng chung cho tất cả các trang
****************************************************/
var mainJs = (function(){
    return {
        customScroll: customScroll,
        comboboxStyle: comboboxStyle
    };

    function customScroll (params, refresh){
        var o = $.extend({
            selector: '.customScroll',
            theme:'light',
            scrollbarPosition:'outside',
            scrollButtons:{
                enable: false
            }
        },params);

        if($(o.selector).length){
            if(!refresh){
                $(o.selector).mCustomScrollbar(o);
            } else {
                $(o.selector).mCustomScrollbar('update');
            }
        }
    }

    function comboboxStyle(){
        var $ddl = $('.combobox');
        if($ddl.length){
            $ddl.select2({
                openOnEnter: false,
                dropdownAutoWidth: true
            });
        }
    }
})();