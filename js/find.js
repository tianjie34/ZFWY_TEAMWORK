var tel = document.getElementById('tel')  //手机
var text = document.getElementById('text')//验证码
var pass = document.getElementById('pass') //设置密码
var pass_ = document.getElementById('pass-1') //确认密码
var btn = document.getElementsByClassName('btn')[0] //注册

//验证手机号

var reg = /13[0-9]{9}/;
tel.onfocus = function () {
    document.getElementById('tel').placeholder = '请输入手机号码'
}
tel.onblur = function () {
    if (reg.test(tel.value) == false) {
        document.getElementById('tel').value = ''
        document.getElementById('tel').placeholder = '请输入正确的手机号'
    } else {
        document.getElementById('tel').style.color = 'green'
    }
}
var str = 0
var num = 60

var button = document.getElementsByTagName('button')[0]
button.onclick = function () {
    clearInterval(timer);
    timer = setInterval(function () {
        num--
        button.innerHTML = `${num}秒重发`
        if (num == 57) {

            var str = Math.round(Math.random() * 1000)
            str > 1000 ? str : str += 1000
            alert(str)
            text.value = str
            text.onfocus = function () {
                document.getElementById('text').placeholder = '请输入手机号码'

            }
            text.onblur = function () {
                if (text.value != str) {
                    document.getElementById('text').value = ''
                    document.getElementById('text').placeholder = '验证码不正确'
                } else {
                    document.getElementById('text').style.color = 'green'
                }
            }

        }
        if (num == 0) {
            clearInterval(timer)
        }
    }, 1000)
}
//设置密码
var passReg = /^(?=.[a-z])(?=.[A-Z])(?=.*\d)[\s\S]{8,16}$/;
pass.onfocus = function () {
    document.getElementById('pass').placeholder = '请输入新密码'
}
pass.onblur = function () {
    if (passReg.test(pass.value) == false) {
        document.getElementById('pass').value = ''
        document.getElementById('pass').placeholder = '密码格式不正确'
    } else {
        document.getElementById('pass').style.color = 'green'
        document.getElementById('pass').value = pass.value
    }
}
//确认密码
pass_.onfocus = function () {
    document.getElementById('pass-1').placeholder = '请确认密码'
}
pass_.onblur = function () {

    if (passReg.test(pass_.value) == false) {
        document.getElementById('pass-1').value = ''
        document.getElementById('pass-1').placeholder = '密码格式不正确'
    }
    if (pass.value !== pass_.value) {
        document.getElementById('pass-1').value = ''
        document.getElementById('pass-1').placeholder = '二者密码不一致'
    }
    else {
        document.getElementById('pass-1').style.color = 'green'
    }
}




btn.onclick = function () {
    if (tel.value != '' && text.value != '' && pass.value != '' && pass_.value != '') {
        alert('登录成功')
        setCookie('succeed', true)
        setCookie('user', tel.value)
        setCookie('password', pass.value)
        location.href = './login.html'
    } else {
        alert('登录失败')

    }
}

