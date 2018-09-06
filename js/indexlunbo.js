/*
* @Author: lenovo
* @Date:   2018-09-01 15:54:36
* @Last Modified by:   lenovo
* @Last Modified time: 2018-09-01 15:54:53
*/
    window.onload=function(){
    // let imgs=document.querySelectorAll(".beijin0");
    // let dots=document.querySelectorAll(".dot-one");
    // let banner=document.querySelectorAll(".banner")[0];
    // let left=document.querySelectorAll(".ban-left")[0];
    // let right=document.querySelectorAll(".ban-right")[0];
    // let widths=parseInt(getComputedStyle(imgs[0],null).width);
    // let now=0;
    // let next=0;
    // let flag=true;
    // imgs[0].style.left=0;
    // dots[0].classList.add("color");
    // // 创建时间函数自动轮播
    // let t6=setInterval(zmove,3000);
    // // 自动向左
    // function zmove(){
    //     next++;
    //     if (next==imgs.length){
    //         next=0;
    //     }
    //     imgs[next].style.left=widths+"px";
    //     animate(imgs[now],{left:-widths});
    //     animate(imgs[next],{left:0},function () {
    //         flag=true;
    //     })
    //     dots[next].classList.add("color");
    //     dots[now].classList.remove("color");
    //     now=next;
    // }
    // function zmove1(){
    //     next--;
    //     if (next<0){
    //         next=imgs.length-1;
    //     }
    //     imgs[next].style.left=-widths+"px";
    //     // console.log(imgs[now],imgs[next],widths);
    //     animate(imgs[now],{left:widths});
    //     animate(imgs[next],{left:0},function () {
    //         flag=true;
    //     });
    //     dots[now].classList.remove("color");
    //     dots[next].classList.add("color");
    //     now=next;
    // }
    // for (let i=0;i<dots.length;i++){
    //     dots[i].onclick=function () {
    //        if (now==i){
    //            return
    //        } else if (now<i){
    //            imgs[i].style.left=widths+"px";
    //            animate(imgs[now],{left:-widths});
    //            animate(imgs[i],{left:0},function () {
    //                flag=true;
    //            })
    //            dots[i].classList.add("color");
    //            dots[now].classList.remove("color");
    //            next=now=i;
    //        }else {
    //            imgs[i].style.left=-widths+"px";
    //            animate(imgs[now],{left:widths});
    //            animate(imgs[i],{left:0},function () {
    //                flag=true;
    //            });
    //            dots[now].classList.remove("color");
    //            dots[i].classList.add("color");
    //            next=now=i;
    //        }
    //     }
    // }
    //
    //
    // left.onclick=function(){
    // //     if (!flag){
    // //         return;
    // // }
    // //     flag=false;
    //     zmove1();
    // }
    // right.onclick=function(){
    //     if (!flag){
    //         return;
    //     }
    //     flag=false;
    //     zmove();
    // }
    //
    // banner.onmouseenter=function(){
    //     clearInterval(t6);
    // }
    // banner.onmouseleave=function(){
    //     t6=setInterval(zmove(),3000)
    // }
    // window.onblur=function(){
    //     clearInterval(t6);
    // }
    // window.onfocus=function(){
    //     t6=setInterval(zmove(),3000)
    // }
    //
    //




//获取页面开始滚动时的距离
    window.onscroll=function(){
        let bh=document.body.scrollTop||document.documentElement.scrollTop;
        let nav=document.querySelector("nav2");
        if(bh>300){
            nav.style.top="0";
        }else{
            nav.style.top="-90px";
        }
    }

    let button=document.querySelector(".button1");
    let inner=document.querySelector(".inner1");
    button.onclick=function () {
        inner.style.height=210+"px";
    }
    inner.onmouseleave=function () {
        inner.style.height=0;
    }


}