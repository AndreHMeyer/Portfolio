// MENU SHOW 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

// REMOVE MENU MOBILE
const navLinks = document.querySelectorAll('.navLink')

function linkAction(){
    const navInMenu = document.getElementById('nav-menu')

    navInMenu.classList.remove('show')
}
navLinks.forEach(n => n.addEventListener('click', linkAction))

// REMOVE THE VALIDATION MESSAGE ON INPUT
const inputs = document.querySelectorAll('[required]');
inputs.forEach(input => {
    input.addEventListener('input', () => {
        input.setCustomValidity('');
    });
});


// SCROLL SECTIONS ACTIVE LINK 
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.navMenu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.navMenu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showBackToTopButtonOnScroll()
}

function showBackToTopButtonOnScroll() {
    if (scrollY > 450) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

window.addEventListener('scroll', scrollActive)

// SCROLL REVEAL ANIMATION 
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.homeData',{}); 
sr.reveal('.aboutInfo',{delay: 400}); 
sr.reveal('.homeLinksIcon',{ interval: 200}); 
sr.reveal('.skillsData, .workImg, .contactInput',{interval: 200}); 
