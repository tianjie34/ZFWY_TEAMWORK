//tap切换
//找到隐藏的
var none = document.getElementsByClassName('none')
//找到所有的li
var item = document.querySelectorAll('.title li')
for (var i = 0; i < item.length; i++) {
    item[i].setAttribute("index", i);
    item[i].onclick = function () {
        //当点击的时候取下标
        var index = this.getAttribute("index");
        console.log(index);
        //排他法 给选中的选项添加样式(active),其余的设置空
        for (var j = 0; j < item.length; j++) {
            item[j].className = "";
            item[index].className = "active";
        }
        for (var k = 0; k < none.length; k++) {
            none[k].style.display = "none";
            none[index].style.display = "block";
        }
    }
}
//验证手机号
var tel = document.getElementById('tel')
var reg = /^1[3-9][0-9]{9}$/;
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
//设置密码
var pass = document.getElementById('pass')
var passReg = /^[A-Z]{1}[A-Za-z0-9]{7,14}/;
pass.onfocus = function () {
    document.getElementById('pass').placeholder = '请输入密码'
}
pass.onblur = function () {
    if (passReg.test(pass.value) == false) {
        document.getElementById('pass').value = ''
        document.getElementById('pass').placeholder = '密码输入不正确'
    } else {
        document.getElementById('pass').style.color = 'green'
    }
}
var but = document.getElementsByClassName('but')[0]
but.onclick = function () {
    if (tel.value != '' && pass.value != '') {
        alert('登录成功')
        setCookie('succeed', true)
        setCookie('user', tel.value)
        location.href = './myLogin.html'
    } else {
        alert('登录失败')
    }
}
//短信快捷登录
var tell = document.getElementById('tell')
var reg = /^1[3-9][0-9]{9}$/;
tell.onfocus = function () {
    document.getElementById('tell').placeholder = '请输入手机号码'
}
tell.onblur = function () {
    if (reg.test(tell.value) == false) {
        document.getElementById('tell').value = ''
        document.getElementById('tell').placeholder = '请输入正确的手机号'

    } else {
        document.getElementById('tell').placeholder = '输入正确'
        document.getElementById('tell').style.color = 'green'
    }
}
var str = 0
var num = 60
var text = document.getElementById('text')
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
            but.onclick = function () {
                if (tell.value != '' && text.value == str) {
                    alert('登录成功')
                    setCookie('succeed', true)
                    setCookie('user', tell.value)
                    location.href = './myLogin.html'
                } else {
                    alert('登录失败')
                    text.value = ''
                    text.placeholder = '请重新输入'
                }
            }
        }
        if (num == 0) {
            clearInterval(timer)
        }
    }, 1000)
}


var succeed = getCookie('succeed')
var user = getCookie('user')
var password = getCookie('password')

if (succeed) {
    document.getElementById('tel').value = user
    document.getElementById('pass').value = password
}