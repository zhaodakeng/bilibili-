// ==UserScript==
// @name         bilibili视频自动宽屏
// @namespace    http://zjfhome.320.io
// @version      1.2
// @description  bilibili视频自动宽屏显示并且自动播放
// @author       Email：a961011576@qq.com
// @match        *://*.bilibili.com/video/*
// @grant        none
// @run-at document-idle
// @license MIT
// ==/UserScript==
(function () {
    'use strict';
    let observer = new MutationObserver(()=>{
        let danmakuBox =document.querySelector(".danmaku-box");
        let mt = window.getComputedStyle(danmakuBox,undefined).getPropertyValue("margin-top")
        // console.log('监听到了变化')
        if(mt.includes('0')){
            init()
        }
    });
    let totalNums = document.querySelector(".tit");
    observer.observe(totalNums, {
        'childList': true,
        'subtree': true
    })
    let init=()=>{
        /*定时器循环ms*/
        let time = 50
        let interval = setInterval(()=>{
            console.log(interval)
            //宽屏DOM
            let playDom = document.querySelector('.bilibili-player-iconfont.bilibili-player-iconfont-widescreen-off.player-tooltips-trigger') //宽屏dom
            //playDom = videodom.onloadstart = document.querySelector('.bilibili-player-iconfont.bilibili-player-iconfont-web-fullscreen-off.player-tooltips-trigger')//网页全屏dom
            /*尝试宽屏*/
            if (playDom) {
                window.clearInterval(interval)
                playDom.click()
                document.querySelector(".danmaku-wrap").style.display="none"
            }
        },time)
    }

})();