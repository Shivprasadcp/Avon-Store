const ratingIcons = document.querySelectorAll('.review-rating ion-icon');

for (const ratingIcon of ratingIcons) {
  ratingIcon.addEventListener('click', function() {
    const rating = this.getAttribute('name');

    document.querySelector('.review-rating').setAttribute('rating', rating);
  });
}
