// ==UserScript==
// @name         Crunchyroll - Speedup video
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  set video playback rate to 2
// @author       douathao
// @match        https://static.crunchyroll.com/*/player.html
// @icon         https://www.crunchyroll.com/build/assets/img/favicons/favicon-96x96.png
// @updateURL    https://raw.githubusercontent.com/douathao/tampermonkey/main/crunchyroll-speedup-video.js
// @downloadURL  https://raw.githubusercontent.com/douathao/tampermonkey/main/crunchyroll-speedup-video.js
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  const videoPlayer = document.querySelector('video');

  if (videoPlayer) {
    console.log(
      '%c-- [Tampermonkey] Setting video playback speed 2 --',
      'background: #222; color: #bada55'
    );
    document.querySelector('video').playbackRate = 2;
  }
})();
