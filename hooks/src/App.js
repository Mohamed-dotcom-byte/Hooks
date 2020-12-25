import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import MovieList from './components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './components/Filter';

function App() {
  const [ movies , setMovies ] = useState(()=>{
    return [{
      title: "the Godfather",
      rate: "5",
      description:"The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      img:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR107,0,630,1200_AL_.jpg",
    },
  {
    title: "Interstellar",
    rate: "5",
    description:"The film chronicles the adventures of a group of explorers who use a recently discovered rift in space-time to push human limits and set off to conquer astronomical distances on an interstellar journey.",
    img:"https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
  },
{
  title: "The shawshank redemption",
  rate: "4",
  description:"the movie tells the story of banker Andy Dufresne (Tim Robbins), who is sentenced to life in Shawshank State Penitentiary for the murders of his wife and her lover, despite his claims of innocence.",
  img:"https://images-na.ssl-images-amazon.com/images/I/512G9J05RJL._AC_UL600_SR333,600_.jpg",
}]

  })
  const addMovie = (movie)=>{
setMovies(movies.concat(movie));
  };
  const [keyRate,setKeyRate]=useState(0);
  const [keyWord,setKeyWord]=useState("");
  const search = (word)=>{
setKeyWord(word);
  }
  return (
    <div className="App-header">
      <Filter keyRate={keyRate} setKeyRate={setKeyRate} search={search}/>
    <MovieList movies={movies.filter((movie)=>movie.rate>=keyRate && movie.title.toLowerCase().includes(keyWord.toLowerCase().trim()))} addMovie={addMovie}/>
    </div>
  );
}

export default App;
