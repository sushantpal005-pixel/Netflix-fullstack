export const API_END_POINT = "http://localhost:8080/api/v1/user";
export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzFkM2QxNWVhNjU1NTFmZTMxNzc3YTBkZmVhZDVkMiIsIm5iZiI6MTc3MzY3NTQ1My42OTgsInN1YiI6IjY5YjgyM2JkZTQ2NWE4YjZlYTAyMDFlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FXs0wSd60OPAY12X5cVJfZ85UcqXG6XZHipqaiHUKNw'
  }
};

export const now_Playing_Movies = "https://api.themoviedb.org/3/movie/now_playing"