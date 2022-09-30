// Adds a video background
// Source: https://www.youtube.com/c/ibracorp

let video = `
<div class="background-wrap"><video id="video-bg-elem" preload="auto" loop="loop" autoplay="true" muted="muted"> <source src="https:\/\/themes.reid.ca\/css\/addons\/unraid\/login-page\/ibracorp\/video\/ibra_head.mp4" type="video\/mp4">Video not supported</video></div>
`
document.body.innerHTML += video
