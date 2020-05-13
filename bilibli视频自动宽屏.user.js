// ==UserScript==
// @name         bilibli视频自动宽屏
// @namespace    http://zjfhome.320.io
// @version      0.1
// @description  bilibili视频自动宽屏
// @author       zjf-a961011576@qq.com
// @match        https://www.bilibili.com/*
// @grant        none
// @run-at document-idle
// ==/UserScript==

(function() {
    'use strict';
    let init
    let videodom=undefined
    videodom= document.querySelector('video')
    if(videodom!=undefined){
        let interval= setInterval(()=>{
            /*宽屏DOM*/
            let playDom = videodom.onloadstart=document.getElementsByClassName('bilibili-player-iconfont bilibili-player-iconfont-widescreen-off player-tooltips-trigger')[0]
            if(playDom){
                /*结束定时*/
                clearInterval(interval)
                playDom.click()
                videodom.play()
            }
        },50)
    }
})();