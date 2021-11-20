let reviewsContainerE1 = document.getElementById("reviewsContainer");
let titleInputE1 = document.getElementById("titleInput");
let reviewTextAreaE1 = document.getElementById("reviewTextarea");

function onAddReview() {
    let movieTitle = titleInputE1.value;
    let movieReview = reviewTextAreaE1.value;
    
    if (movieTitle === "") {
        alert("Please enter a movie Title");
        return;
    }

    let movieTitleE1 = document.createElement("h1");
    movieTitleE1.textContent = "Movie Title: " + movieTitle;
    movieTitleE1.classList.add("movie-title");
    reviewsContainerE1.appendChild(movieTitleE1);

    let movieReviewE1 = document.getElementById("p");
    movieReviewE1.textContent = "Review: " + movieReview;
    reviewsContainerE1.appendChild(movieReviewE1);

    let horizantalLineE1 = document.createElement("hr");
    reviewsContainerE1.appendChild(horizantalLineE1);

    titleInputE1.value = "";
    reviewTextAreaE1.value = "";

}