// Function to determine if the club is open based on the specified opening hours
function isClubOpen() {
    const currentTime = new Date(); // Get current time in local timezone
    const currentDay = currentTime.getDay(); // Get current day (0-6, where 0 is Sunday)

    // Define the opening hours for each day
    const openingHours = {
        0: { open: false }, // Sunday
        1: { open: true,  start: 8,  end: 18 }, // Monday
        2: { open: true,  start: 8,  end: 18 }, // Tuesday
        3: { open: true,  start: 8,  end: 18 }, // Wednesday
        4: { open: true,  start: 8,  end: 18 }, // Thursday
        5: { open: true,  start: 8,  end: 18 }, // Friday
        6: { open: true,  start: 8,  end: 18 }  // Saturday
    };

    // Get the opening hours for the current day
    const todayHours = openingHours[currentDay];

    // Check if the club is open based on current time and opening hours
    if (!todayHours.open) {
        return false; // Club is closed on Sundays
    }

    const currentHour = currentTime.getHours(); // Get current hour
    return (currentHour >= todayHours.start && currentHour < todayHours.end);
}

// Function to update the opening hours message
function updateOpeningHoursMessage() {
    const isOpen = isClubOpen(); // Check if the club is open
    const openingHoursMessage = document.getElementById("opening-hours-message");

    // Update the opening hours message based on whether the club is open or closed
    if (isOpen) {
        openingHoursMessage.textContent = "Our club is currently open.";
        openingHoursMessage.style.color = "#00aa00"; // Green color for open
    } else {
        openingHoursMessage.textContent = "Our club is currently closed.";
        openingHoursMessage.style.color = "#aa0000"; // Red color for closed
    }
}

// Call the function to update the opening hours message when the page loads
window.onload = updateOpeningHoursMessage;
