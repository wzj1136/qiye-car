/*
* @Author: lenovo
* @Date:   2018-09-01 15:04:59
* @Last Modified by:   lenovo
* @Last Modified time: 2018-09-01 15:53:20
*/
	let imgs=document.querySelectorAll(".pro-lunbo");
	let dots=document.querySelectorAll(".dot1");
	let banner=document.querySelectorAll(".tu")[0];
	let left=document.querySelectorAll(".bto-left")[0];
	let right=document.querySelectorAll(".bto-right")[0];
	// console.log(imgs,dots,banner,left,right);
	// imgs[0].style.zIndex=2;
	// dots[0].classList.add("color");
	// zlunbo_lr(imgs,dots,banner,"color",3,2000,left,right);

	// // 移入轮播点
	for(let i=0;i<dots.length;i++){
		dots[i].onmouseover=function(){
			for(let j=0;j<dots.length;j++){
				imgs[j].style.zIndex=1;
				dots[j].classList.remove("color");
			}
			imgs[i].style.zIndex=2;
			dots[i].classList.add("color");
		}
	}


	// 自动播放
	// let t=setInterval(move,2000);
	let num=0;
	function fn(){
		num++;
		if (num==imgs.length) {
			num=0;
		}
			for(let j=0;j<dots.length;j++){
				imgs[j].style.zIndex=1;
				dots[j].classList.remove("color");
			}
			imgs[num].style.zIndex=2;
			dots[num].classList.add("color");
	}

		function fn1(){
		num--;
		if (num<0) {
			num=imgs.length-1;
		}
			for(let j=0;j<dots.length;j++){
				imgs[j].style.zIndex=1;
				dots[j].classList.remove("color");
			}
			imgs[num].style.zIndex=2;
			dots[num].classList.add("color");
	}

	left.onclick=function(){
		fn1();
	}
	right.onclick=function(){
		fn();
	}

	banner.onmouseover=function(){
		clearInterval(t);
	}
	banner.onmouseout=function(){
		t=setInterval(fn,2000)
	}
	 window.onblur=function () {
        clearInterval(t);
    }
    window.onfocus=function () {
        t=setInterval(move,2000);
    }