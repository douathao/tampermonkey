// ==UserScript==
// @name         Youtube - Speedup video
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  set video playback rate to 2.5
// @author       douathao
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @updateURL    https://raw.githubusercontent.com/douathao/tampermonkey/main/youtube-speedup-video.js
// @downloadURL  https://raw.githubusercontent.com/douathao/tampermonkey/main/youtube-speedup-video.js
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
    document.querySelector('video').playbackRate = 2.5;
  } else {
    waitForVideo();
  }

  async function waitForVideo() {
    const videoPlayer = await waitFor('video');

    console.log(
      '%c-- [Tampermonkey] Setting video playback speed 2.5 --',
      'background: #222; color: #bada55'
    );
    videoPlayer.playbackRate = 2.5;
  }

  function waitFor(selector, scope) {
    const pause = 10;
    let maxTime = 10000;

    return new Promise((resolve) => {
      function inner() {
        if (maxTime <= 0) {
          throw 'Timeout for select ' + selector;
        }
        const element = (scope ?? document).querySelector(selector);

        if (element) {
          resolve(element);
          return;
        }
        maxTime -= pause;
        setTimeout(inner);
      }

      inner();
    });
  }
})();
