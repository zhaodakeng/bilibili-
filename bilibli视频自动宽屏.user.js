// ==UserScript==
// @name         bilibili视频自动宽屏
// @namespace    http://zjfhome.320.io
// @version      0.3
// @description  bilibili视频自动宽屏显示并且自动播放
// @author       zjf-a961011576@qq.com
// @match        *://*.bilibili.com/*
// @grant        none
// @run-at document-idle
// ==/UserScript==


(function () {
    'use strict';
    let videodom = undefined
    /*定时器循环ms*/
    let time = 10
    /*播放视频*/
    let videoPlay=()=> {
        let interval = 0
        let playDom = undefined
        /*尝试播放视频*/
        let play = () => {
            //宽屏DOM
            playDom = videodom.onloadstart = document.getElementsByClassName('bilibili-player-iconfont bilibili-player-iconfont-widescreen-off player-tooltips-trigger')[0]
            if (playDom) {
                //结束定时
                if (interval)
                    clearInterval(interval)
                playDom.click()
                videodom.play()
                try {
                    document.querySelector("#playerWrap").scrollIntoView({behavior: "smooth"})
                }catch (e) {
                }
            }
        }
        play()
        //如果第一次尝试执行后未成功时开启定时
        if(!playDom){
            interval = setInterval(() => {
                play()
            }, time)
        }

    }
    /*获取videoDom*/
    let getVideoDom = () => {
        videodom = document.querySelector('video')
        if (videodom) {
            if(videoDomInterval) //当有定时器时调用
                clearInterval(videoDomInterval)
            videoPlay()
        }
    }
    let videoDomInterval = 0
    getVideoDom()
    if(!videodom)//初始化未成功时开启定时器
        videoDomInterval = setInterval(getVideoDom, time)
})();

