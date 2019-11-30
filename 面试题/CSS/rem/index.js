// rem单位所代表的尺寸大小和屏幕宽度成正比
// 首先，设置rem单位所代表的尺寸大小和屏幕宽度成正比，有3中方案,先不必纠结其中的数值：

// 媒体查询, 设定每种屏幕对应的font-size 1

@media screen and (min-width:240px) {
    html, body, button, input, select, textarea {
        font-size:9px;
    }
}
@media screen and (min-width:320px) {
	html, body, button, input, select, textarea {
		font-size:12px;
	}
}
// 红米Note2
@media screen and (min-width:360px) {
	html, body, button, input, select, textarea {
		font-size:13.5px;
	}
}
@media screen and (min-width:375px) {
	html, body, button, input, select, textarea {
		font-size:14.0625px;
	}
}

// js设置html的font-size大小 2

document.documentElement.style.fontSize = document.documentElement.clientWidth / 750 + 'px';


// 使用vw设置，vw也是一个相对单位，100vw等于屏幕宽度 3

html{
    font-size: 10vw;
}
// 这3种方式，都可以设置html的font-size和屏幕宽度成正比。这3种的单位是css尺寸,无论第一种方法的min-width还是第二种document.documentElement.clientWidth都是相对于设备的css尺寸而言，在iphonex和iphone8得到的结果都是375px。

