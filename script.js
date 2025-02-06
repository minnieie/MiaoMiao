document.getElementById("menu-toggle").addEventListener("click", function() {
    var menu = document.getElementById("menu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
});
function toggleMenu() {
    var menu = document.getElementById("nav-menu");
    menu.classList.toggle("show");
}

function toggleModal() {
    var modal = document.getElementById("login-modal");
    modal.classList.toggle("hidden");
}

document.getElementById('account-icon').addEventListener('click', function(event) {
    event.preventDefault();
    toggleModal();
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add your login logic here
    toggleModal();
    // Show the account page after login
    document.querySelector('.account-section').classList.remove('hidden');
});

function createAccount() {
    // Add your create account logic here
    toggleModal();
    // Show the account page after account creation
    document.querySelector('.account-section').classList.remove('hidden');
}
