function $ (selector) {
  return document.querySelector(selector);
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

video.addEventListener('timeupdate', function () {
  const percentageComplete = (video.currentTime / video.duration) * 100;
  progressFilled.style['flex-basis'] = `${percentageComplete}%`;
});

video.addEventListener('click', togglePlay);
video.addEventListener('play', updatePlayPauseButton);
video.addEventListener('pause', updatePlayPauseButton);

function togglePlay () {
  video.paused ? video.play() : video.pause();
}

function updatePlayPauseButton () {
  playPauseButton.textContent = video.paused ? playIcon : pauseIcon;
}

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

playPauseButton.addEventListener('click', function () {
  togglePlay();
});

skipBackButton.addEventListener('click', function () {
  video.currentTime = video.currentTime - 10;
});

skipForwardButton.addEventListener('click', function () {
  video.currentTime = video.currentTime + 25;
});

volumeInput.addEventListener('input', function (event) {
  video.volume = event.srcElement.value;
});

playbackRateInput.addEventListener('input', function (event) {
  video.playbackRate = event.srcElement.value;
});