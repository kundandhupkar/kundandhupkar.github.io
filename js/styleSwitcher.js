const links = document.querySelectorAll('.alternate-style'),
    totalLinks = links.length;

function setActiveStyle(color) {
    for (let i = 0; i < totalLinks; i++) {
        if (color === links[i].getAttribute('title')) {
            links[i].removeAttribute('disabled');
        } else {
            links[i].setAttribute('disabled', true);
        }
    }
}

// Set default theme to dark on page load
document.addEventListener('DOMContentLoaded', () => {
    // Add dark class to body by default
    document.body.classList.add('dark');

    // Set the dark theme toggle as checked
    for (let i = 0; i < totalBodySkin; i++) {
        if (bodySkin[i].value === 'dark') {
            bodySkin[i].checked = true;
        }
    }
});

// Body skin toggle
const bodySkin = document.querySelectorAll('.body-skin'),
    totalBodySkin = bodySkin.length;

for (let i = 0; i < totalBodySkin; i++) {
    bodySkin[i].addEventListener('change', function() {
        if (this.value === 'dark') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    });
}

// Toggle style switcher
document.querySelector('.toggle-style-switcher').addEventListener('click', () => {
    document.querySelector('.style-switcher').classList.toggle('open');
});
