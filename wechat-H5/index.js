var send=document.getElementById('send');
var parent =document.getElementById('content-items');
send.addEventListener('click',function(){
    //css写法
/* <li class="content-item">
<div class="left-pic">
    <img src="./images/user.jpg" alt="">
</div>
<div class="message">
    <p class="name">宝宝宝宝</p>
    <p class="detail">晚上一起看电影</p>
</div>
<div class="time">
    <span>下午3:00</span>
</div>
</li> */

// jq
// var html=$ ('<li class="content-item">'+
// '<div class="left-pic">'+
//     '<img src="./images/user.jpg" alt="">'+
// '</div>'+
// '<div class="message">'+
//     '<p class="name">宝宝宝宝</p>'+
//     '<p class="detail">晚上一起看电影</p>'+
// '</div>'+
// '<div class="time">'+
//     '<span>下午3:00</span>'+
// '</div>'+
// '</li>')
// html.appendTo(parent);

//原生js写法
var li=document.createElement('li');//创建li标签
li.setAttribute('class','content-item');//为li标签添加class属性，类名为content-item

var divPic =document.createElement('div');
divPic.setAttribute('class','left-pic');
li.appendChild(divPic);//将divPic标签放到li标签里去，

var img =document.createElement('img');
img.setAttribute('src','./images/user.jpg');
divPic.appendChild(img);

var message=document.createElement('div');
message.setAttribute('class','message');
li.appendChild(message);

var p1=document.createElement('p');
p1.setAttribute('class','name');
var p1txt =document.createTextNode('宝宝宝宝');//添加文本
p1.appendChild(p1txt);
message.appendChild(p1);

var p2=document.createElement('p');
p2.setAttribute('class','detail');
var p2txt =document.createTextNode('晚上一起看电影');
p2.appendChild(p2txt);
message.appendChild(p2);

var time=document.createElement('div');
time.setAttribute('class','time');
li.appendChild(time);

var span1=document.createElement('span');
var spantext =document.createTextNode('下午3:00');
time.appendChild(span1);
span1.appendChild(spantext);

parent.appendChild(li)
})
