  function toggleVideo(videoId) {
        var videoContainer = document.getElementById("videoContainer");
        var videos = videoContainer.getElementsByTagName("video");
    
        // Hide all videos
        for (var i = 0; i < videos.length; i++) {
            videos[i].pause(); // Pause all videos
            videos[i].style.display = "none"; // Hide all videos
        }
    
        // Show the clicked video
        var video = document.getElementById(videoId);
        if (video) {
            video.style.display = "block"; // Show the clicked video
            video.play(); // Play the clicked video
        }
    
        // Show video10 if the same button is pressed as the video playing
        var video10 = document.getElementById('video10');
        if (video10) {
            if (videoId === 'video10') {
                video10.style.display = 'block'; // Show video10 if the same button is pressed
                video10.play(); // Play video10
            } else {
                video10.style.display = 'none'; // Hide video10 if a different button is pressed
            }
        }
    }
    