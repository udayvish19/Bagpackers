// JavaScript
// Add event listener to navigation menu
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".header nav a");
    navLinks.forEach(function(link) {
        link.addEventListener("click",function(event) {
            event.preventDefault();
            const target = event.target.getAttribute("href");
            document.querySelector(target).scrollIntoView({ behavior: "smooth" });
        });
    });
});

// Add animation to team members
document.addEventListener("DOMContentLoaded", function() {
    const teamMembers = document.querySelectorAll(".team-member");
    teamMembers.forEach(function(member) {
        member.addEventListener("mouseover", function() {
            member.classList.add("animate");
        });
        member.addEventListener("mouseout", function() {
            member.classList.remove("animate");
        });
    });
});
