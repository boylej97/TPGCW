document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.querySelector('.menu-title').addEventListener('click', function() {
            item.classList.toggle('expanded');
        });

        item.querySelector('.close-details').addEventListener('click', function() {
            item.classList.remove('expanded');
        });
    });
});