import axios from 'axios';
export const fetchTrendingMovies = async () => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?language=sk-SK`, {
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZGNkNzFjNjI4ODEzZTI4MGQ0NTZhMWY4ZjUyMTkzZCIsInN1YiI6IjYzZTEwMzEwY2QyMDQ2MDA5ZDRmZThjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NWQ5ys9AWQsXfSp3jfK559ACJOE6F2Ubu7dlfoOSVL0'
            }
      });
      return response.data.results;
    } catch (error) {
      console.error('Chyba pri načítaní trendov', error);
      return [];
    }
  };

  export const searchMovies = async (searchQuery) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?language=sk-SK&query=${searchQuery}&page=1&include_adult=false`, {
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZGNkNzFjNjI4ODEzZTI4MGQ0NTZhMWY4ZjUyMTkzZCIsInN1YiI6IjYzZTEwMzEwY2QyMDQ2MDA5ZDRmZThjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NWQ5ys9AWQsXfSp3jfK559ACJOE6F2Ubu7dlfoOSVL0'
            }
      });
      return response.data.results;
    } catch (error) {
      console.error('Chyba pri hľadaní filmov', error);
      return [];
    }
  };