// Count Down
var countDownDate = new Date("Jan 2, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);
// Count Down

// Navbar
const navIcon = document.getElementById('nav-icon');
const navToggle = () => {
    navIcon.classList.toggle('nav-toggle');
}

const widthChange = () => {
    var w = window.outerWidth;
    if (w > 767) {
        navIcon.classList.add('nav-toggle');
    }
    // if (w < 991 && w > 767 ){
    //     document.getElementById('statistic-border-2').classList.remove('statistic-border');
    // }
    // if ( w < 767 ){
    //     document.getElementById('statistic-border-1').classList.remove('statistic-border');
    //     document.getElementById('statistic-border-2').classList.remove('statistic-border');
    //     document.getElementById('statistic-border-3').classList.remove('statistic-border');
    // }
    // if ( w > 767 && w <991 ){
    //     document.getElementById('statistic-border-1').classList.add('statistic-border');
    //     document.getElementById('statistic-border-3').classList.add('statistic-border');
    // }
    // if ( w > 991 ){
    //     document.getElementById('statistic-border-1').classList.add('statistic-border');
    //     document.getElementById('statistic-border-2').classList.add('statistic-border');
    //     document.getElementById('statistic-border-3').classList.add('statistic-border');
    // }
}
window.addEventListener("resize", widthChange);
// Count Down

// Statistic
function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}
const views = document.getElementById("view-id");
animateValue(views, 0, 3023, 1000);
const speakers = document.getElementById("speakers-id");
animateValue(speakers, 0, 156, 1000);
const subscribers = document.getElementById("subscribers-id");
animateValue(subscribers, 0, 2340, 1000);
const events = document.getElementById("events-id");
animateValue(events, 0, 12650, 1000);
// Statistic

// Animation
const observer1 = new IntersectionObserver((e) => {
    e.forEach((e) => {
        console.log(e);
        if (e.isIntersecting) {
            e.target.classList.add('topic-img-1');
        }
    });
});

const observer2 = new IntersectionObserver((e) => {
    e.forEach((e) => {
        console.log(e);
        if (e.isIntersecting) {
            e.target.classList.add('topic-img-2');
        }
    });
});

const hiddenElement1 = document.querySelectorAll('.img-odd');
const hiddenElement2 = document.querySelectorAll('.img-even');

hiddenElement1.forEach((e) => observer1.observe(e));
hiddenElement2.forEach((e) => observer2.observe(e));
// Animation
