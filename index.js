let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, event) {
    Array.from(tablinks).forEach((tablink) => {
        tablink.classList.remove("active-link");
    });
    Array.from(tabcontents).forEach((tabcontent) => {
        tabcontent.classList.remove("active-tab");
    });
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');

// Toggle hamburger menu and mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

// Event delegation for menu item clicks
mobile_menu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    }
});

// Change header background on scroll
document.addEventListener('scroll', () => {
    const scroll_position = window.scrollY;
    header.style.backgroundColor = scroll_position > 250 ? '#29323c' : 'transparent';
});

