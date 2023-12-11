document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {  
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
        }
    });

    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('onclick').match(/'([^']+)'/)[1];

            // Hide all tab contents and remove active class from all buttons
            tabContents.forEach(content => content.style.display = 'none');
            tabButtons.forEach(btn => btn.classList.remove('active'));

            // Show the clicked tab content and set button as active
            document.getElementById(targetTab).style.display = 'block';
            button.classList.add('active');
        });
    });

    // Trigger click on the first tab to open it by default
    if (tabButtons.length > 0) {
        tabButtons[0].click();
    }
});
