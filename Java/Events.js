document.addEventListener('DOMContentLoaded', function() {
    const eventTitles = document.querySelectorAll('.event-title');
    
    eventTitles.forEach(title => {
        title.addEventListener('click', function() {
            const event = this.parentElement;
            event.classList.toggle('active');
        });
    });
});      