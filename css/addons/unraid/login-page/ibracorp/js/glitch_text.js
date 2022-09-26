// Adds a video background
// Source: https://www.youtube.com/

let video = `
<div class="background-wrap"><video id="video-bg-elem" preload="auto" autoplay="true" loop="loop" muted="muted"> <source src="https:\/\/mountaingod2.github.io\/theme.park\/css\/addons\/unraid\/login-page\/ibracorp\/video\/glitch_text.mp4" type="video\/mp4">Video not supported</video></div>
`
document.body.innerHTML += video
