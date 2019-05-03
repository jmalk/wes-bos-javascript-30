function $ (selector) {
  return document.querySelector(selector);
}
function $all (selector) {
  return document.querySelectorAll(selector);
}

const video = $("video.player__video");
const progress = $('.progress');
const progressFilled = $('.progress__filled');
const playPauseButton = $('button[title="Toggle Play"]');
const skipBackButton = $('button[data-skip="-10"]');
const skipForwardButton = $('button[data-skip="25"]');
const volumeInput = $('input[name="volume"]');
const playbackRateInput = $('input[name="playbackRate"]');

const playIcon = '►';
const pauseIcon = '❚ ❚';

let isSeeking = false;

video.ontimeupdate = function () {
  const percentageComplete = (video.currentTime / video.duration) * 100;
  progressFilled.style['flex-basis'] = `${percentageComplete}%`;
};

progress.addEventListener('mousedown', function () {
  isSeeking = true;
});

progress.addEventListener('mousemove', function ({ offsetX }) {
  if (isSeeking) {
    video.currentTime = (offsetX / progress.clientWidth) * video.duration;
  }
});

progress.addEventListener('mouseup', function () {
  isSeeking = false;
});

playPauseButton.onclick = function () {
  video.paused ? video.play() : video.pause();
  playPauseButton.textContent = video.paused ? playIcon : pauseIcon;
};

skipBackButton.onclick = function () {
  video.currentTime = video.currentTime - 10;
};

skipForwardButton.onclick = function () {
  video.currentTime = video.currentTime + 25;
};

volumeInput.addEventListener('input', function (event) {
  video.volume = event.srcElement.value;
});

playbackRateInput.addEventListener('input', function (event) {
  video.playbackRate = event.srcElement.value;
});