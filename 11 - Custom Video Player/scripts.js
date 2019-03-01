function $(selector) {
  return document.querySelector(selector);
}
function $all(selector) {
  return document.querySelectorAll(selector);
}

const video = $("video.player__video");
const playButton = $('button[title="Toggle Play"]');

playButton.onclick = function() {
  video.play();
};
