// Function to toggle videos
function toggleVideo(videoId) {
    var video10 = document.getElementById('video10');
    var currentVideo = document.getElementById(videoId);

    // Pause and hide all videos except the clicked video
    var videos = document.querySelectorAll('video');
    videos.forEach(function(video) {
        if (video.id !== videoId) {
            video.pause(); // Pause other videos
            video.currentTime = 0; // Reset video to start
            video.style.display = 'none'; // Hide other videos
        }
    });

    // If the clicked video is already playing, hide it
    if (currentVideo.style.display !== 'none') {
        currentVideo.pause(); // Pause the clicked video
        currentVideo.style.display = 'none'; // Hide the clicked video

        // Play video10 if the same button is clicked again
        video10.style.display = 'block'; // Show video10
        video10.play(); // Play video10

        // Update current video placeholder for video10
        var currentVideoText = document.getElementById("currentVideo");
        currentVideoText.textContent = "Current Video: Full Course Flyover";
    } else {
        // Hide and pause video10 if it's playing
        if (video10.style.display !== 'none') {
            video10.pause(); // Pause video10
            video10.style.display = 'none'; // Hide video10
        }

        currentVideo.style.display = 'block'; // Show the clicked video
        currentVideo.play(); // Play the clicked video

        // Update current video placeholder for other videos
        var currentVideoText = document.getElementById("currentVideo");
        currentVideoText.textContent = "Current Video: Hole " + videoId.split("video")[1];
    }
}

// Auto play video10 when the page loads
window.onload = function() {
    var video10 = document.getElementById('video10');
    video10.style.display = 'block'; // Show video10
    video10.play(); // Auto play video10

    // Update current video placeholder for video10
    var currentVideoText = document.getElementById("currentVideo");
    currentVideoText.textContent = "Current Video: Full Course Flyover";
};
