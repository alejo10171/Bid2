import reviews from '../database/reviews.json' assert {type: 'json'};

export function getReviews() {
  let html = "";

  for(let i = 0; i < reviews.length; i++) {

    const review = reviews[i];

    html += `<div class="review-user">
      <div class="review-user-img">
          <img src="assets/${review.img}" alt="${review.name_book}">
      </div>
      <div class="review-user-info">
        <div class="review-user-info-title">
          <div class="stars">
            ${getStars(review.stars)}
          </div>
          <h3>${review.name_book}</h3>
        </div>
        <p>${review.review}</p>
      </div>
    </div>`;
  }

  document.getElementById('reviews').innerHTML = html;
}

function getStars(value) {
  let html = "";

  for(let i = 0; i < 5; i++) {
    if(i < value) {
      html += `<i class="fas fa-star"></i>`;
    } else {
      html += `<i class="far fa-star"></i>`;
    }
  }

  return html;
}

getReviews();