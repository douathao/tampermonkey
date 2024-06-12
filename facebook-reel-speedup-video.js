// ==UserScript==
// @name         Facebook Reel - Speedup video
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  set video playback rate to 2.5
// @author       douathao
// @match        https://www.facebook.com/reel/*
// @icon         https://cdn-icons-png.flaticon.com/128/5968/5968764.png
// @updateURL    https://raw.githubusercontent.com/douathao/tampermonkey/main/facebook-reel-sppedup-video.js
// @downloadURL  https://raw.githubusercontent.com/douathao/tampermonkey/main/facebook-reel-sppedup-video.js
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  const videoPlayer = document.querySelector('video');

  if (videoPlayer) {
    console.log(
      '%c-- [Tampermonkey] Setting video playback speed 2.5 --',
      'background: #222; color: #bada55'
    );
    videoPlayer.muted = false;
    videoPlayer.playbackRate = 2;
  }
})();
