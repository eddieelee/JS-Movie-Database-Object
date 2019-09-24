var movies = [{
    title: "Joker",
    hasWatched: false,
    rating: 5
  },
  {
    title: "It Chapter Two",
    hasWatched: true,
    rating: 5
  },
  {
    title: "Angel Has Fallen",
    hasWatched: true,
    rating: 5
  },
  {
    title: "Good Boys",
    hasWatched: true,
    rating: 4.5
  }
]
/*
movies.forEach(function(movie) {
  var result = "You have ";
  if (movie.hasWatched) {
    result += "watched ";
  } else {
    result += "not seen ";
  }
  result += "\"" + movie.title + "\" - ";
  result += movie.rating + " stars";
  console.log(result);
});
*/
function movieString(movie) {
  var result = "You have ";
  if (movie.hasWatched) {
    result += "watched ";
  } else {
    result += "not seen ";
  }
  result += "\"" + movie.title + "\" - ";
  result += movie.rating + " stars";
  return result;
};

movies.forEach(function(movie) {
  console.log(movieString(movie));
});
