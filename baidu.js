$(function(){
    var $user=$('#userName');
    var $tel=$('#tel');
    var $pwd=$('#pwd');
    var $yz=$('#yz');
    var $getyz=$('#getyz');
    var $getin=$('#getin');
    var $userMsg=$('#userMsg');
    var $telMsg=$('#telMsg');
    var $pwdMsg=$('#pwdMsg');
    var $yzMsg=$('#yzMsg');

    $user.focus(function(){
        $userMsg.html("");
    })
    $tel.focus(function(){
        $telMsg.html("");
    })
    $pwd.focus(function(){
        $pwdMsg.html("");
    })
    $yz.focus(function(){
        $yz.html("");
    })
    $user.focusout(function(){
        valiuser();
    })
    $tel.focusout(function(){
        valitel();
    })
    $pwd.focusout(function(){
        valipwd();
    })
    $yz.focusout(function(){
        valiyz();
    })
    $getyz.click(function(){
        console.log("b");

        if(valitel()){
            console.log("b");
            $getyz.attr("disabled", true);
            $getyz.css("backgroundColor","#ccc");
            count();
        }
        
    
        if(!valiuser() && !valitel() && !valipwd() && !valiyz() ) return;
    })

    function valiuser(){
        var reg=/^\d+$/;
        var reg1=/^[\u4e00-\u9fa5_a-zA-Z0-9]+$/;
        // 若为纯数字
        if(reg.test($user.val()) || !reg1.test($user.val())){
            $userMsg.html('用户名仅支持中英文、数字和下划线且不能为纯数字');
            return false;
        }
        if($user.val().match(".*[a-zA-Z]+.*")){
            if($user.val().match(/[a-z]/ig).length>=14){
                $userMsg.html('最长14个英文或7个汉字');
                return false;
            }
        }
        if(/[\u4E00-\u9FA5\uFE30-\uFFA0]/.test($user.val())){
            if($user.val().match(/[\u4e00-\u9fa5]/).length>=7){
                $userMsg.html('最长14个英文或7个汉字');
                return false;
            }
        }
        $userMsg.html("");
        return true;
    }

    function valitel(){
        var reg=/^1[3456789]\d{9}$/;
        // null
        if($tel.val()===""){
            $telMsg.html('请输入手机号');
            // $tel.select();
            return false;
        }
        // 数字
        if(!reg.test($tel.val())){
            $telMsg.html('手机号码格式不正确');
            // $tel.select();
            return false;
        }
        return true;
    }

    function valipwd(){
        if($pwd.val()==="" || ($pwd.val().indexOf(' ')!=-1) ){
            $pwdMsg.html('密码设置不符合要求');
            return false;
        }
        if($pwd.val().length<8 || $pwd.val().length>14){
            $pwdMsg.html('密码设置不符合要求');
            return false;
        }
    }

    function valiyz(){
        setTimeout(function(){
            if($yz.val()===""){
                $pwd.html('请求超时，请稍后再试');
                return false;
            }
        },6000)

    }

    function count(){
        var count = 60;
        var countdown = setInterval(CountDown, 1000); 
        function CountDown() {
            console.log($getyz.html())
            $getyz.val("重新发送(" + count + "s)");
            $getyz.html("重新发送(" + count + "s)"); 
                if (count == 0) {
                    $getyz.val("重新发送").removeAttr("disabled"); 
                    $getyz.css("backgroundColor","#63B8FF");
                    clearInterval(countdown); 
                } 
                count--; 
        } 
    }
    
    return true;
});



