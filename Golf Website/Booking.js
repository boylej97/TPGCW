document.addEventListener('DOMContentLoaded', function() {
    // Individual booking form
    var individualForm = document.getElementById('individual-booking');
    var individualIncludeMeal = document.getElementById('individual-include-meal');

    individualForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Retrieve form data
        var individualName = document.getElementById('individual-name').value;
        var holeType = document.querySelector('#individual-booking input[name="hole-type"]:checked').value;
        var includeMeal = individualIncludeMeal.checked;

        // Calculate total cost
        var costPerPerson = holeType === '9-holes' ? 15 : 30;
        var mealCost = includeMeal ? 7.5 : 0;
        var totalCost = costPerPerson + mealCost;

        // Display total cost
        alert('Total cost for ' + individualName + ': £' + totalCost.toFixed(2));

        // Reset total cost
        totalCost = 0;

        // Reset form fields
        individualForm.reset();
    });

    // Group booking form
    var groupForm = document.getElementById('group-booking');
    var groupIncludeMeal = document.getElementById('group-include-meal');

    groupForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Retrieve form data
        var groupName = document.getElementById('group-name').value;
        var numberOfGolfers = document.getElementById('number-of-golfers').value;
        var includeMeal = groupIncludeMeal.checked;

        // Calculate total cost
        var costPerPerson = numberOfGolfers * 30; // Assuming 9 holes for each person
        var mealCost = includeMeal ? (numberOfGolfers * 7.5) : 0;
        var totalCost = costPerPerson + mealCost;

        // Display total cost
        alert('Total cost for ' + groupName + ': £' + totalCost.toFixed(2));

        // Reset total cost
        totalCost = 0;

        // Reset form fields
        groupForm.reset();
    });

    // Tournament booking form
    var tournamentForm = document.getElementById('tournament-booking');

    tournamentForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Retrieve form data
        var tournamentName = document.getElementById('tournament-name').value;
        var numberOfTeams = document.getElementById('number-of-teams').value;

        // Calculate total cost
        var costPerTeam = numberOfTeams * 120; // Assuming 18 holes for each team
        var totalCost = costPerTeam;

        // Display total cost
        alert('Total cost for ' + tournamentName + ': £' + totalCost.toFixed(2));

        // Reset total cost
        totalCost = 0;

        // Reset form fields
        tournamentForm.reset();
    });

    // Toggle visibility of booking forms based on selected option
    var bookingOption = document.getElementById('booking-option');

    bookingOption.addEventListener('change', function() {
        var selectedOption = bookingOption.value;

        if (selectedOption === 'individual') {
            individualForm.style.display = 'block';
            groupForm.style.display = 'none';
            tournamentForm.style.display = 'none';
        } else if (selectedOption === 'group') {
            individualForm.style.display = 'none';
            groupForm.style.display = 'block';
            tournamentForm.style.display = 'none';
        } else if (selectedOption === 'tournament') {
            individualForm.style.display = 'none';
            groupForm.style.display = 'none';
            tournamentForm.style.display = 'block';
        } else {
            individualForm.style.display = 'none';
            groupForm.style.display = 'none';
            tournamentForm.style.display = 'none';
        }
    });
});
