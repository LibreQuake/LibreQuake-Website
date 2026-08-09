function setSpecialImage() {
    var today = new Date();
    var month = today.getMonth() + 1; // January is 0!
    var day = today.getDate();

    console.log("Today's date:", today);
    console.log("Month:", month, "Day:", day);

    // Set image based on date
    var imageUrl = 'media/lq_logo.png'; // Default image

    if (month === 9 && day === 24) {
        imageUrl = 'media/librequartz.png';
    } else if ((month === 10 && day >= 29) || (month === 11 && day <= 1)) {
        imageUrl = 'media/lqhalloween.png';
    } else if (month === 12 && day >= 20 && day <= 26) {
        imageUrl = 'media/lqxmas.png';
    } else if (month === 6 && day >= 1 && day <= 30) {
        imageUrl = 'media/pride.png';
    } else if (month === 7 && day >= 1 && day <= 31) {
        imageUrl = 'media/prideD1.png';
    }

    console.log("Image URL:", imageUrl);
    document.getElementById('logo-image').src = imageUrl;
}
