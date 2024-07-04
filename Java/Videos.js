function toggleVideo(videoId) {
    // Hide all iframes and stop videos
    var iframes = document.getElementsByTagName('iframe');
    for (var i = 0; i < iframes.length; i++) {
        iframes[i].style.display = 'none';
        iframes[i].src = iframes[i].src; // Stop the video
    }

    // Show the selected iframe and autoplay the video
    var selectedIframe = document.getElementById(videoId);
    selectedIframe.style.display = 'block';
    selectedIframe.src += "&autoplay=1"; // Add autoplay to the src

    document.getElementById('currentVideo').innerText = "Current Video: " + videoId.replace('video', 'Hole ');
}

window.onload = function() {
    var iframes = document.getElementsByTagName('iframe');
    for (var i = 0; i < iframes.length; i++) {
        iframes[i].onload = function() {
            this.style.height = this.contentWindow.document.body.scrollHeight + 'px';
        };
    }
};

// Function to adjust iframe height based on its content
function adjustIframeHeight() {
    var iframes = document.getElementsByTagName('iframe');
    for (var i = 0; i < iframes.length; i++) {
        var iframe = iframes[i];
        var body = iframe.contentWindow.document.body;
        if (body) {
            // Reset the iframe height to auto to get the correct scrollHeight
            iframe.style.height = 'auto';
            // Get the scrollHeight of the body inside the iframe
            var height = body.scrollHeight;
            // Set the iframe height to fit its content
            iframe.style.height = height + 'px';
        }
    }
}

// Function to adjust iframe heights on window resize
function adjustIframesOnResize() {
    // Call adjustIframeHeight when window resizes
    window.addEventListener('resize', function() {
        adjustIframeHeight();
    });
}

// Call adjustIframeHeight on window load and resize
window.addEventListener("load", function() {
    adjustIframeHeight();
    adjustIframesOnResize();
});
