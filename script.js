const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt the user to select media stream

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log(error);
    }
}

button.addEventListener('click', async () => {
    //disable the button
    button.disabled = true;

    await videoElement.requestPictureInPicture().catch(error => {
        // Error handling
        console.log(error);
      });
    //reset button
    button.disabled = false
});


// On Load
selectMediaStream();