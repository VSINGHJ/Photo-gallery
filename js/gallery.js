/* JavaScript */
function changeImage(event) {
    // Get the src of the thumbnail
    var thumbnailSrc = event.target.src;
    // Replace '-small' in the thumbnail src with '-large'
    var largeSrc = thumbnailSrc.replace('-small', '-large');
    // Change the src of the featured image
    document.querySelector('#gallery figure img').src = largeSrc;
    // Change the figcaption to the alt text of the thumbnail
    document.querySelector('#gallery figure figcaption').textContent = event.target.alt;
}
