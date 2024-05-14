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