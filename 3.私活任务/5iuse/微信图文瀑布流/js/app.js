var isIE = false;
var isIE8 = false;
var isIE9 = false;
var isIE10 = false;
var _hasAppendHead=false;
var validRule=window.validRule || {};
validRule.isQQ = function (value) {
    var rule = /^[1-9]\d{4,12}$/;
    return rule.test(value);
};//是否QQ
validRule.isCaptcha = function (value) {
    var rule = /^[A-Za-z0-9]{4}$/;
    return rule.test(value);
};//是否4位数字字母验证码
validRule.isMobileCode = function (value) {
    var rule = /^[A-Za-z0-9]{6}$/;
    return rule.test(value);
};//是否6位手机验证码
validRule.isMobile = function (value) {
    var length = value.length;
    var rule = /^1[3-8][0-9]\d{4,8}$/;
    return length == 11 && rule.test(value);
};//是否手机号
$(window).on('scroll', function (e) {
    handlerScroll()
});

var App = function () {
    // IE mode

    //删除单页
    var pageShow=function(){

        var $length=$(".account-list-pagination li").length;

        if($length<3){

            $(".grid-pagination-wrap").remove();
        }
    }

    var handleInit = function () {

        isIE = !!navigator.userAgent.match(/Trident/);
        isIE8 = !!navigator.userAgent.match(/MSIE 8.0/);
        isIE9 = !!navigator.userAgent.match(/MSIE 9.0/);
        isIE10 = !!navigator.userAgent.match(/MSIE 10.0/);

        if (isIE) {
            jQuery('html').addClass('ie');
        }
        if (isIE8) {
            jQuery('html').addClass('ie8');
        }
        if (isIE9) {
            jQuery('html').addClass('ie9');
        }
        if (isIE10) {
            jQuery('html').addClass('ie10');
        }

        $('#copyButton').click(function(){
            toastr.error('复制失败，请选中您要复制的文字然后右键复制。','抱歉');
        });

        $('.RS-title-for-closed,.right-service.closed .RS-img').click(function () {
            $('.right-service').removeClass('closed');
        });
        $('.RS-title').click(function () {
            $('.right-service').addClass('closed');
        });

        handlerScroll();
    }

    function handleIEFixes() {
        //fix html5 placeholder attribute for ie7 & ie8
        if (isIE8 || isIE9) { // ie8 & ie9
            // this is html5 placeholder fix for inputs, inputs with placeholder-no-fix class will be skipped(e.g: we need this for password fields)
            jQuery('input[placeholder]:not(.placeholder-no-fix,:password), textarea[placeholder]:not(.placeholder-no-fix)').each(function () {

                var input = jQuery(this);
                if(input.attr('name')=='q'){
                    input.val('');
                    return;
                }
                if (input.val() == '' && input.attr("placeholder") != '') {
                    input.addClass("placeholder").val(input.attr('placeholder'));
                }

                input.focus(function () {
                    if (input.val() == input.attr('placeholder')) {
                        input.val('');
                    }
                });

                input.blur(function () {
                    if (input.val() == '' || input.val() == input.attr('placeholder')) {
                        input.val(input.attr('placeholder'));
                    }
                });
            });
        }
    }


    function handleBootstrap() {
        jQuery('.carousel').carousel({
            interval: 15000,
            pause: 'hover'
        });
        jQuery('.tooltips').tooltip();
        jQuery('.popovers').popover();
    }

    function handleMisc() {
        jQuery('.top').click(function () {
            jQuery('html,body').animate({
                scrollTop: jQuery('body').offset().top
            }, 'slow');
        }); //move to top navigator
    }

    function handleUniform() {
        if (!jQuery().uniform) {
            return;
        }
        var test = $("input[type=checkbox]:not(.toggle), input[type=radio]:not(.toggle, .star)");
        if (test.size() > 0) {
            test.each(function () {
                if ($(this).parents(".checker").size() == 0) {
                    $(this).show();
                    $(this).uniform();
                }
            });
        }
    }

    // Handles Bootstrap Popovers
    // last popep popover
    var lastPopedPopover;
    var handlePopovers = function () {
        jQuery('.popovers').popover();
        // close last poped popover
        $(document).on('click.bs.popover.data-api', function (e) {
            if (lastPopedPopover) {
                lastPopedPopover.popover('hide');
            }
        });
    }

    var handleFancybox = function () {
        if (!jQuery.fancybox) {
            return;
        }
        if (jQuery(".fancybox-button").size() > 0) {
            jQuery(".fancybox-button").fancybox({
                groupAttr: 'data-rel',
                prevEffect: 'none',
                nextEffect: 'none',
                closeBtn: true,
                helpers: {
                    title: {
                        type: 'inside'
                    }
                }
            });

            $('.fancybox-video').fancybox({
                type: 'iframe'
            });
        }
    }


    var addValidateRule = function () {
        if (jQuery.validator && jQuery.validator.addMethod) {
            jQuery.validator.addMethod("isMobile", function (value, element) {
                var length = value.length;
                var rule = /^1[3-8][0-9]\d{4,8}$/;
                return this.optional(element) || (length == 11 && rule.test(value));
            }, "请填写正确的手机号码");
            jQuery.validator.addMethod("isQQ", function (value, element) {
                var rule = /^\d{5,11}$/;
                return this.optional(element) || ( rule.test(value));
            }, "请填写正确的QQ号码");
            jQuery.validator.addMethod("isWxId", function (value, element) {
                var wxId = /[0-9a-zA-Z_-]{6,20}$/;
                return this.optional(element) || ( wxId.test(value));
            }, "请填写正确的微信号");
            jQuery.validator.addMethod("moreThan", function (value, element,name) {
                var elseVal=$('[name="'+name+'"]').val();
                if(value<elseVal){
                    return false;
                }
                return true;
            }, "请填写正确的值");
            jQuery.validator.addMethod("isOriginalId", function (value, element) {
                if(value.lenth>30){
                    return false;
                }
                var rule = /^[a-zA-Z]+_[0-9a-zA-Z]+$/;
                return this.optional(element) || ( rule.test(value));
            }, "请填写正确的原始ID");
            jQuery.validator.addMethod("notZh", function (value, element) {
                var isZh= (escape(value).indexOf("%u")<0);
                return this.optional(element) || isZh;
            }, "不能包含中文或特殊字符");
        }
    }



    /*版权信息置底控制*/
    var copyrightFIxBottom = function () {
        if ($(".copyright").length > 0) {
            var topHeight=$('.header').outerHeight();
            //if($('.header.navbar').length==0){
            //    topHeight=$('.header.signup-header').outerHeight();
            //}
            var bottomHeight=$('.copyright').outerHeight();
            var minHeight = $(window).height() - topHeight - bottomHeight - 60;
            $(".page-container").css("min-height", minHeight + 'px');
        }
    }
    /*/版权信息置底控制*/



    return {
        init: function () {
            handleInit();
            handleBootstrap();
            handleIEFixes();
            handleMisc();
            handleFancybox();
            handlePopovers();
            addValidateRule();
            copyrightFIxBottom();
            pageShow();
            $(window).resize(function(){
                copyrightFIxBottom();
            });
        },

        initUniform: function (els) {
            if (els) {
                jQuery(els).each(function () {
                    if ($(this).parents(".checker").size() == 0) {
                        $(this).show();
                        $(this).uniform();
                    }
                });
            } else {
                handleUniform();
            }
        },

        // wrapper function to scroll to an element
        scrollTo: function (el, offeset) {
            pos = el ? el.offset().top : 0;
            jQuery('html,body').animate({
                scrollTop: pos + (offeset ? offeset : 0)
            }, 'slow');
        },

        scrollTop: function () {
            App.scrollTo();
        },

        gridOption1: function () {
            $(function () {
                $('.grid-v1').mixitup();
            });
        },

        showLoading: function (target) {
            var oldHtml = target.html();
            target.addClass('js-loading disabled');
            var fa= target.find('i.fa');
            if(fa.length==0){
                try{
                    target.prepend('<i class="fa fa-spinner fa-loading"></i> ');
                }catch (e){

                }
            }else{
                fa.attr('class','fa fa-spinner fa-loading');
            }
            return {
                revert: function () {
                    target.html(oldHtml);
                    target.removeClass('js-loading disabled');
                }
            };
        },

        cutStr:function(str,len){
            if(str.length>len){
                str=str.substr(0,len-3)+'...';
            }
            return str;
        },
        showCS: function (qq) {
            if(qq==undefined){
                alert('未指定QQ号');
                return;
            }
            window.open('http://b.qq.com/webc.htm?new=0&sid='+qq+'&o=9i.com&q=7', '_blank', 'height=502, width=644,toolbar=no,scrollbars=no,menubar=no,status=no');
        }


    };
}();

/**
 * 判断是否是url
 * @param str_url
 * @returns {boolean|*}
 * todo 微信图文 链接存在bug
 */
function isURL(str_url){
    var re=/^((https|http|ftp|rtsp|mms)?:\/\/)?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?(([0-9]{1,3}\.){3}[0-9]{1,3}|([0-9a-z_!~*'()-]+\.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\.[a-z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+\/?)$/;
    return re.test(str_url);
}

/**
 * 获取 URL 参数
 * @param name
 * @returns {*}
 */
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURIComponent(r[2]); return null;
}

function processAjaxData(answer, url){
    document.title = answer.pageTitle;
    window.history.pushState({"html":answer.html,"pageTitle":answer.pageTitle},"", url);
}

//验证手机号码
function goCheckAndGo(url){
    if(typeof CHECK_MOBILE_URL =="undefined"){
        var CHECK_MOBILE_URL='';
        try{
            console.log('goCheckAndGo 调用错误，未设置 CHECK_MOBILE_URL 全局变量');
        }catch (e){

        }
        return;
    }
    $.get(CHECK_MOBILE_URL,function(data){
        if( data.error == 0 ){
            if( data.res == 0 ){
                User.bindMobile(function(){
                    window.location.href=url;
                });
            }else{
                window.location.href=url;
            }
        }
    },'json');
}

function handlerScroll(){
    var scTop = $(window).scrollTop();
    var _head=$('.table-cps:not(.header-no-fix)');
    var body_tr=_head.find('tbody>tr');
    if(_head.length>0){
        if(body_tr.length<3){
            return;
        }
        var _head_startTop=_head.position().top+110;
        var thead_html=_head.find('thead').prop('outerHTML');
        var hasSort=$('.has-sort').length;
        hasSort=hasSort>0?' has-sort':'';
        var html=$('<table class="table table-cps table-hover table-advance table-head-fixed'+hasSort+'">'+thead_html+'</table>');
        html.find('.tooltips').attr('data-placement','bottom');
        if (scTop > _head_startTop) {
            if(!_hasAppendHead){
                _hasAppendHead=true;
                $('body').append(html);
                $('.tooltips').tooltip();
            }
        } else {
            if(_hasAppendHead){
                _hasAppendHead=false;
                $('.table-head-fixed').remove();
            }
        }
        if(typeof PAGE_TYPE !="undefined" && PAGE_TYPE=='admin'){
            var page_width=$(window).width();
            html.width(_head.width());
        }
    }
}