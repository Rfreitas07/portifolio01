let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
navLinks.forEach(links => {
    links.classList.remove('active');
    document.querySelector('header nav a [href*=' + id + ' ]').classList.add
    ('active')
})
        }
    })
}


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

const form = document.querySelector('form');

function sendEmail(){
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "username",
        To: "them@website.com",
        From: "ferreiradefreitasrenata@gmail.com",
        Subject: "This is the subject",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );
}