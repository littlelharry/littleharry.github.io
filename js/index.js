//play点击事件
function play(url) {
    var rul = document.getElementById("url").value; //获取input链接
    if(url){
        rul = url
    }
    if (rul == "") {
        alert("请输入链接")
    } else {
        var jxApi = document.getElementById("jk"); //获取选择按钮
        var jxurl = document.getElementById("jk").selectedIndex; //获取选中的
        var jkv = jxApi.options[jxurl].value; //获取选择接口链接
        var paly = document.getElementById("palybox"); //获取播放窗口位置
        paly.src = jkv + rul; //接口赋值

        //ajax数据传递

        var tittext = document.getElementById("tittext");
        //1,create ajax核心对象：
        var xhr = getxhr();
        //2,以post的方式与服务器建立连接；
        xhr.open("post", "data/title.php", true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        //3,发送一个http请求:
        xhr.send("titurl=" + rul);
        console.log(xhr.readyState);
        //获取服务器状态码
        xhr.onreadystatechange = function () {
            console.log(xhr.readyState)
            console.log(xhr.status)
            if (xhr.readyState == 4 && xhr.status == 200) {
                tittext.innerHTML = xhr.responseText; //获取服务器响应数据
            }
        }

        function getxhr() {
            var xhr = null;
            if (window.XMLHttpRequest) {
                xhr = new XMLHttpRequest();
            } else {
                xhr = new ActiveXObject("Microsoft.XMLHttp");
            }
            return xhr;
        }
    }
}
function closeAD() {
    $('#closePoPBD').click();
}


function hiddendiv() {
    document.getElementById("pop").style.display = "none";
}
function blockdiv() {
    document.getElementById("pop").style.display = "block";
}

$(document).ready(function () {
    // setInterval("closeAD();", 1000);
    var urlList = [
        {
            url: 'https://www.nxflv.com/?url=',
            support: '爱奇艺'
        },
        {
            url: 'https://jx.playerjy.com/?url=',
            support: '爱奇艺'
        },
        {
            url: 'https://www.ckmov.com/?url=',
            support: '爱奇艺'
        },
        // {
        //     url: 'https://www.yemu.xyz/?url=',
        //     support: '爱奇艺'
        // },
        
    ]
    var html = ''
    urlList.forEach((url,index)=>{
        html+= `<option value="${url.url}">线路${index}（${url.support}）</option>\n`
    })
    $('#jk').append(html)
    setTimeout(() => {
        let url = 'https://www.iqiyi.com/v_19rrluwf4o.html'
        play(url)
    }, 200);
})