document.addEventListener("DOMContentLoaded", function () {
    // Open review modal
    document.querySelector('.post-review').addEventListener('click', function () {
        document.querySelector('.review-modal').style.display = 'flex';
    });

    // Close review modal
    document.querySelector('.close-btn').addEventListener('click', function () {
        document.querySelector('.review-modal').style.display = 'none';
    });

    // Ensure the review modal is showing
    console.log("Review Modal JS Loaded");
});

document.addEventListener("DOMContentLoaded", function () {
    // Open review modal
    document.querySelector('.post-review').addEventListener('click', function () {
        document.querySelector('.review-modal').style.display = 'flex';
    });

    // Close review modal
    document.querySelector('.close-btn').addEventListener('click', function () {
        document.querySelector('.review-modal').style.display = 'none';
    });

    // Handle review submission
    document.querySelector('.submit-review').addEventListener('click', function () {
        console.log("Submit button clicked!"); // Debugging log

        // Close review modal
        document.querySelector('.review-modal').style.display = 'none';

        // Show points popup
        document.querySelector('.points-popup').style.display = 'flex';
    });

    // Close the points popup
    document.querySelector('.close-points-btn').addEventListener('click', function () {
        document.querySelector('.points-popup').style.display = 'none';
    });
});


// Star Rating System (Fix class name)
document.querySelectorAll('.rstar').forEach(star => {
    star.addEventListener('click', function () {
        document.querySelectorAll('.rstar').forEach(s => s.classList.remove('active'));
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
    const caption = document.querySelector('.caption-input').value.trim();
    const selectedStar = document.querySelector('.rstar.active');
    
    if (!selectedStar) {
        alert("Please select a star rating.");
        return;
    }
    
    if (caption === "") {
        alert("Please enter a caption for your review.");
        return;
    }

    document.querySelector('.review-modal').style.display = 'none';
    document.querySelector('.points-popup').style.display = 'flex';
});

// Close the points popup
document.querySelector('.close-points-btn').addEventListener('click', function () {
    document.querySelector('.points-popup').style.display = 'none';
});