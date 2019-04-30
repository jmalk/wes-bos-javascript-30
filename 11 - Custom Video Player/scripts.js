function $ (selector) {
  return document.querySelector(selector);
}
function $all (selector) {
  return document.querySelectorAll(selector);
}

const video = $("video.player__video");
const playPauseButton = $('button[title="Toggle Play"]');

const playIcon = '►';
const pauseIcon = '❚ ❚';

playPauseButton.onclick = function () {
  video.paused ? video.play() : video.pause();
  playPauseButton.textContent = video.paused ? playIcon : pauseIcon;
};
