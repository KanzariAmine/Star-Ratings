//Initial Ratings
const ratings = {
  sony: 4.7,
  samsung: 3.4,
  vizio: 2.3,
  panasonic: 3.6,
  phillips: 2,
};
//Total Stars
const starsTotal = 5;

//Run getRatings when DOM loads
document.addEventListener("DOMContentLoaded", getRatings);

//Form control
const productSelect = document.getElementById("product-select");
const ratingControl = document.getElementById("rating-control");

//init product
let product;

//Product select change
productSelect.addEventListener("change", (e) => {
  product = e.target.value;
  //Enable the rating control
  ratingControl.disabled = false;
  ratingControl.value = ratings[product];
});

//Rating control change
ratingControl.addEventListener("blur", (e) => {
  let newRating = e.target.value;

  //Make sure 5 or under
  if (newRating > 5 || newRating < 1) {
    alert("Please rate 1 - 5");
    return;
  }

  //Change rating
  ratings[product] = newRating;

  getRatings();
});

//GET ratings
function getRatings() {
  for (let rating in ratings) {
    //Calculate the percentage
    const starsPercentage = (ratings[rating] / starsTotal) * 100;

    //Round to nearest 10
    const starsPercentageRounded = `${Math.round(starsPercentage / 10) * 10}%`;

    //Set width of stars-inner to percentage
    document.querySelector(
      `.${rating} .stars-inner`
    ).style.width = starsPercentageRounded;

    //Add number rating
    document.querySelector(`.${rating} .number-rating`).innerHTML =
      ratings[rating];
  }
}
