document.addEventListener('DOMContentLoaded', function() {
    var individualForm = document.getElementById('individual-booking');
    var individualIncludeMeal = document.getElementById('individual-include-meal');
    var groupForm = document.getElementById('group-booking');
    var groupIncludeMeal = document.getElementById('group-include-meal');
    var tournamentForm = document.getElementById('tournament-booking');
    var bookingOption = document.getElementById('booking-option');

    individualForm.addEventListener('submit', function(event) {
        event.preventDefault();

        var individualName = document.getElementById('individual-name').value;
        var holeType = document.querySelector('#individual-booking input[name="hole-type"]:checked').value;
        var includeMeal = individualIncludeMeal.checked;
        var costPerPerson = holeType === '9-holes' ? 15 : 30;
        var mealCost = includeMeal ? 7.5 : 0;
        var totalCost = costPerPerson + mealCost;

        alert('Total cost for ' + individualName + ': £' + totalCost.toFixed(2));

        totalCost = 0;
        individualForm.reset();
    });

    groupForm.addEventListener('submit', function(event) {
        event.preventDefault();

        var groupName = document.getElementById('group-name').value;
        var numberOfGolfers = document.getElementById('number-of-golfers').value;
        var includeMeal = groupIncludeMeal.checked;
        var costPerPerson = numberOfGolfers * 30;
        var mealCost = includeMeal ? (numberOfGolfers * 7.5) : 0;
        var totalCost = costPerPerson + mealCost;

        alert('Total cost for ' + groupName + ': £' + totalCost.toFixed(2));

        totalCost = 0;
        groupForm.reset();
    });

    tournamentForm.addEventListener('submit', function(event) {
        event.preventDefault();

        var tournamentName = document.getElementById('tournament-name').value;
        var numberOfTeams = document.getElementById('number-of-teams').value;
        var costPerTeam = numberOfTeams * 120;
        var totalCost = costPerTeam;

        alert('Total cost for ' + tournamentName + ': £' + totalCost.toFixed(2));

        totalCost = 0;
        tournamentForm.reset();
    });

    bookingOption.addEventListener('change', function() {
        var selectedOption = bookingOption.value;
        var forms = [individualForm, groupForm, tournamentForm];

        forms.forEach(function(form) {
            form.style.display = 'none';
        });

        if (selectedOption === 'individual') {
            individualForm.style.display = 'block';
        } else if (selectedOption === 'group') {
            groupForm.style.display = 'block';
        } else if (selectedOption === 'tournament') {
            tournamentForm.style.display = 'block';
        }
    });
});

function toggleStarters() {
    var startersList = document.getElementById('starters-list');
    startersList.style.display = (startersList.style.display === 'none') ? 'block' : 'none';
}
function toggleMains() {
    var mainsList = document.getElementById('mains-list');
    mainsList.style.display = (mainsList.style.display === 'none') ? 'block' : 'none';
}
function toggleDeserts() {
    var desertsList = document.getElementById('deserts-list');
    desertsList.style.display = (desertsList.style.display === 'none') ? 'block' : 'none';
}

function toggleDrinks() {
    var drinksList = document.getElementById('drinks-list');
    drinksList.style.display = (drinksList.style.display === 'none') ? 'block' : 'none';
}
function togglePRevents() {
var PReventslist = document.getElementById('PRevents-list');
PReventslist.style.display = (PReventslist.style.display === 'none') ? 'block' : 'none';
}
function toggleUPevents() {
    var UPeventslist = document.getElementById('UPevents-list');
    UPeventslist.style.display = (UPeventslist.style.display === 'none') ? 'block' : 'none';
    }
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
    