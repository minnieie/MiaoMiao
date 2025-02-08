document.querySelector('.post-review').addEventListener('click', function () {
    document.querySelector('.review-modal').style.display = 'flex';
});

document.querySelector('.close-btn').addEventListener('click', function () {
    document.querySelector('.review-modal').style.display = 'none';
});

// Star Rating System
document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', function () {
        document.querySelectorAll('.star').forEach(s => s.classList.remove('active'));
        this.classList.add('active');
        let prevStar = this.previousElementSibling;
        while (prevStar) {
            prevStar.classList.add('active');
            prevStar = prevStar.previousElementSibling;
        }
    });
});

// Image Preview
document.getElementById('upload-img').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('preview-img').src = e.target.result;
            document.getElementById('preview-img').style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});

// Show points popup after posting
document.querySelector('.submit-review').addEventListener('click', function () {
    document.querySelector('.review-modal').style.display = 'none';
    document.querySelector('.points-popup').style.display = 'flex';
});

// Close the points popup
document.querySelector('.close-points-btn').addEventListener('click', function () {
    document.querySelector('.points-popup').style.display = 'none';
});