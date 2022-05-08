function movieRatings(input) {
   
    let numberOfMovies = Number(input.shift());
    
   
    let sum = 0;

    let maxRating = Number.MIN_SAFE_INTEGER;
    let maxRatingTitle = '';
    let minRating = Number.MAX_SAFE_INTEGER;
    let minRatingTitle = '';


    for(let i = 1; i <= numberOfMovies; i++) {

       let movieName = input.shift();
       let movieRating = Number(input.shift());

       sum += movieRating

       if(movieRating > maxRating) {
           maxRating = movieRating;
           maxRatingTitle = movieName;
       }

       if(movieRating < minRating) {
           minRating = movieRating;
           minRatingTitle = movieName;
       }
     
    }
    let avgRating = sum / numberOfMovies;
    console.log(`${maxRatingTitle} is with highest rating: ${maxRating.toFixed(1)}`);
    console.log(`${minRatingTitle} is with lowest rating: ${minRating.toFixed(1)}`);
    console.log(`Average rating: ${avgRating.toFixed(1)}`)
}

movieRatings([
'5',
'A Star is Born',
'7.8',
'Creed 2',
'7.3',
'Mary Poppins',
'7.2',
'Vice',
'7.2',
'Captain Marvel',
'7.1'
]);