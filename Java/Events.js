document.addEventListener("DOMContentLoaded", function() {
    const events = document.querySelectorAll('.event');

    events.forEach(event => {
        event.querySelector('.event-title').addEventListener('click', function() {
            event.classList.toggle('expanded');
        });

        event.querySelector('.close-details').addEventListener('click', function() {
            event.classList.remove('expanded');
        });
    });
});
