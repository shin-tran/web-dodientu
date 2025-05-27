export const renderStars = (starNumber) => {
  let starsHtml = "";
  const fullStars = Math.floor(starNumber);
  const halfStar = starNumber % 1 !== 0;
  for (let i = 0; i < fullStars; i++) {
    starsHtml += `<i class="fas fa-star"></i>`;
  }
  if (halfStar) {
    starsHtml += `<i class="fas fa-star-half-alt"></i>`;
  }
  for (let i = 0; i < 5 - Math.ceil(starNumber); i++) {
    starsHtml += `<i class="far fa-star"></i>`;
  }
  return starsHtml;
};
