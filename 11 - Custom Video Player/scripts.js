function $ (selector) {
  return document.querySelector(selector);
}
function $all (selector) {
  return document.querySelectorAll(selector);
}

const video = $("video.player__video");
const progressFilled = $('.progress__filled');
const playPauseButton = $('button[title="Toggle Play"]');
const skipBackButton = $('button[data-skip="-10"]');

const playIcon = '►';
const pauseIcon = '❚ ❚';

video.ontimeupdate = function (event) {
  const percentageComplete = (video.currentTime / video.duration) * 100;
  progressFilled.style['flex-basis'] = `${percentageComplete}%`;
};

playPauseButton.onclick = function () {
  video.paused ? video.play() : video.pause();
  playPauseButton.textContent = video.paused ? playIcon : pauseIcon;
};

skipBackButton.onclick = function () {
  video.currentTime = video.currentTime - 10;
};