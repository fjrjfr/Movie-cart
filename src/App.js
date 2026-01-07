import { useState } from "react";
import MovieList from "./MovieList";
import Filter from "./Filter";
import "./App.css";

const initialMovies = [
  {
    title: "Inception",
    description: "A mind-bending thriller",
    posterURL: "https://image.tmdb.org/t/p/original/iQUateaYbt0Zbjrl8gqaGlT56iG.jpg",
    rating: 5
  },
  {
    title: "Interstellar",
    description: "Space exploration movie",
    posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0zt0lp-O3XdL8zzdrEvyzmcl6kOwfgbv4xQ&s",
    rating: 4
  },
  {
    title: "The Dark Knight",
    description: "Batman faces the Joker",
    posterURL: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    rating: 5
  },
  {
    title: "The Matrix",
    description: "Reality is not what it seems",
    posterURL: "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg",
    rating: 5
  },
  {
    title: "Avengers: Endgame",
    description: "The epic Marvel finale",
    posterURL: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg",
    rating: 4
  },
  {
    title: "Titanic",
    description: "A tragic love story",
    posterURL: "https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzMy00MzViLWJkZTMtOGY1ZjgzNWMwN2YxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    rating: 4
  },
  {
    title: "The Shawshank Redemption",
    description: "Hope and friendship in prison",
    posterURL: "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg",
    rating: 5
  },
  {
    title: "Gladiator",
    description: "A Roman general seeks revenge",
    posterURL: "https://m.media-amazon.com/images/M/MV5BYWQ4YmNjYjEtOWE1Zi00Y2U4LWI4NTAtMTU0MjkxNWQ1ZmJiXkEyXkFqcGc@._V1_.jpg",
    rating: 4
  },
  {
    title: "Jurassic Park",
    description: "Dinosaurs come back to life",
    posterURL: "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_.jpg",
    rating: 4
  },
  {
    title: "Avatar",
    description: "A visually stunning sci-fi adventure",
    posterURL: "https://m.media-amazon.com/images/I/41kTVLeW1CL._AC_.jpg",
    rating: 4
  },
  { title: "The Lion King",
  description: "A journey of a lion cub to kingship",
  posterURL: "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_.jpg",
  rating: 5 
  },
  { 
    title: "Fight Club",
    description: "An underground fight society",
    posterURL: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg",
    rating: 5 
  },
  { 
    title: "The Godfather",
    description: "The Corleone mafia family saga",
    posterURL: "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_.jpg",
    rating: 5 
  },
  { 
    title: "The Godfather Part II",
    description: "Continuation of the mafia saga",
    posterURL: "https://m.media-amazon.com/images/M/MV5BMDIxMzBlZDktZjMxNy00ZGI4LTgxNDEtYWRlNzRjMjJmOGQ1XkEyXkFqcGc@._V1_.jpg",
    rating: 5 
  },
  { 
    title: "The Avengers",
    description: "Superheroes unite to save the world",
    posterURL: "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg",
    rating: 4 
  },
  { 
    title: "Guardians of the Galaxy",
    description: "Space heroes with a sense of humor",
    posterURL: "https://m.media-amazon.com/images/M/MV5BM2ZmNjQ2MzAtNDlhNi00MmQyLWJhZDMtNmJiMjFlOWY4MzcxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    rating: 4 
  },
  { 
    title: "Black Panther",
    description: "Wakanda's hero rises",
    posterURL: "https://lumiere-a.akamaihd.net/v1/images/p_blackpanther_19754_4ac13f07.jpeg?region=0%2C0%2C540%2C810",
    rating: 4 
  },
  { 
    title: "Doctor Strange",
    description: "Magic and multiverse adventures",
    posterURL: "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_.jpg",
    rating: 4 
  },
  { 
    title: "Spider-Man: No Way Home",
    description: "Spider-Man faces multiverse villains",
    posterURL: "https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_.jpg",
    rating: 4 
  },
  { 
    title: "Deadpool",
    description: "A funny and violent antihero",
    posterURL: "https://fr.web.img4.acsta.net/pictures/16/01/19/16/49/249124.jpg",
    rating: 4 
  },
  { 
    title: "Aquaman",
    description: "King of Atlantis emerges",
    posterURL: "https://m.media-amazon.com/images/M/MV5BYjQ1ZTUzMWMtY2VkNS00ZDRjLWEwODYtYmFkMWJiNTQxMDUzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    rating: 4 
  },
  { 
    title: "Thor: Ragnarok",
    description: "Thor battles to save Asgard",
    posterURL: "https://play-lh.googleusercontent.com/edXnWEEWSIREKl4iJnGb58txDvXqyowBXMemgEzt7u5N8I23SGiFvZAR4h6ilcsQrNd0",
    rating: 4 
  },
  { 
    title: "Iron Man",
    description: "The start of the Marvel Cinematic Universe",
    posterURL: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg",
    rating: 4 
  },
  { 
    title: "Doctor Strange in the Multiverse of Madness",
    description: "More multiverse chaos",
    posterURL: "https://www.hcpress.com/wp-content/uploads/2022/05/image.png",
    rating: 4 
  },
  { 
    title: "Everything Everywhere All at Once", 
    description: "A wild multiverse adventure", 
    posterURL: "https://upload.wikimedia.org/wikipedia/en/1/1e/Everything_Everywhere_All_at_Once.jpg", 
    rating: 5 
  },
  { 
    title: "Dune (2021)", 
    description: "Epic sci-fi on Arrakis", 
    posterURL: "https://www.alternativebeach.com/wp-content/uploads/2021/10/8-Nov.jpeg", 
    rating: 5 
  },
  { 
    title: "Top Gun: Maverick", 
    description: "High-flying action sequel", 
    posterURL: "https://m.media-amazon.com/images/M/MV5BMDBkZDNjMWEtOTdmMi00NmExLTg5MmMtNTFlYTJlNWY5YTdmXkEyXkFqcGc@._V1_.jpg", 
    rating: 5 
  },
  { 
    title: "No Time to Die", 
    description: "James Bond’s latest adventure", 
    posterURL: "https://fineartfrance.com/cdn/shop/files/H13dfe2e7bfdb4de3ba0963c351c920afD_600x.jpg?v=1683218368", 
    rating: 4 
  },
  { 
    title: "The Batman (2022)", 
    description: "Batman hunts a serial killer in Gotham", 
    posterURL: "https://upload.wikimedia.org/wikipedia/en/f/ff/The_Batman_%28film%29_poster.jpg", 
    rating: 5 
  },
  { 
    title: "Avatar: The Way of Water", 
    description: "Return to Pandora", 
    posterURL: "https://upload.wikimedia.org/wikipedia/en/5/54/Avatar_The_Way_of_Water_poster.jpg", 
    rating: 5 
  },
  { 
    title: "Jurassic World: Dominion", 
    description: "Dinosaurs return!", 
    posterURL: "https://m.media-amazon.com/images/M/MV5BZGExMWU2NWMtNzczYi00NjQ4LTk2YzctZGZkYmRmMDdhMjllXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", 
    rating: 4 
  },
  { 
    title: "The Flash (2023)", 
    description: "Speeding through multiverses", 
    posterURL: "https://m.media-amazon.com/images/M/MV5BYmE2NzBjNGUtNTJiMy00N2UxLWEyYzMtYzFjODFhMGZlOTgzXkEyXkFqcGc@._V1_.jpg", 
    rating: 4 
  },
  { 
    title: "Minions: The Rise of Gru", 
    description: "Funny animated adventure", 
    posterURL: "https://m.media-amazon.com/images/M/MV5BZTAzMTkyNmQtNTMzZS00MTM1LWI4YzEtMjVlYjU0ZWI5Y2IzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", 
    rating: 4 
  },
  { 
    title: "Wonka", 
    description: "The origin of Willy Wonka", 
    posterURL: "https://m.media-amazon.com/images/M/MV5BM2Y1N2ZhNjctYjVhZC00MDg2LWFhNTItMzI3ZjAwZDhjYmFiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", 
    rating: 4 
  },
  { 
    title: "Oppenheimer", 
    description: "Story of the atomic bomb creator", 
    posterURL: "https://m.media-amazon.com/images/M/MV5BM2RmYmVmMzctMzc5Ny00MmNiLTgxMGUtYjk1ZDRhYjA2YTU0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", 
    rating: 5 
  },
  { 
    title: "Mission: Impossible – Dead Reckoning", 
    description: "Ethan Hunt’s thrilling missions", 
    posterURL: "https://m.media-amazon.com/images/M/MV5BN2U4OTdmM2QtZTkxYy00ZmQyLTg2N2UtMDdmMGJmNDhlZDU1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", 
    rating: 5 
  },
  { 
    title: "John Wick: Chapter 4", 
    description: "Action-packed revenge story", 
    posterURL: "https://m.media-amazon.com/images/I/81fk-N7tvbL._AC_UF1000,1000_QL80_.jpg", 
    rating: 5 
  },
  { 
    title: "Fast X", 
    description: "Fast & Furious franchise continues", 
    posterURL: "https://www.fastxmovie.com/images/main/mobile_bg.jpg?id=1767711482", 
    rating: 4 
  },
  {
    title: "John Wick",
    description: "Retired hitman seeks revenge for his dog.",
    posterURL: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg",
    rating: 5
  },
  {
    title: "John Wick: Chapter 2",
    description: "John is forced back into the assassin world.",
    posterURL: "https://m.media-amazon.com/images/M/MV5BMjE2NDkxNTY2M15BMl5BanBnXkFtZTgwMDc2NzE0MTI@._V1_.jpg",
    rating: 5
  },
  {
    title: "John Wick: Chapter 3 – Parabellum",
    description: "John on the run with a $14 million bounty.",
    posterURL: "https://m.media-amazon.com/images/M/MV5BYjdlNWFlZjEtM2U0NS00ZWU5LTk1M2EtZmQxNWFiZjk0MGM5XkEyXkFqcGc@._V1_.jpg",
    rating: 5
  },
  {
    title: "Extraction",
    description: "Black ops mercenary must rescue an Indian crime lord’s kidnapped son.",
    posterURL: "https://m.media-amazon.com/images/M/MV5BNDBhMmI3OWYtZTA2Ny00Y2RjLTliMWQtYWY5MGIwN2RlZGFjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    rating: 4
  },
  {
    title: "Extraction 2",
    description: "Tyler Rake returns for another high-stakes mission.",
    posterURL: "https://m.media-amazon.com/images/M/MV5BZGQwNDdhODAtY2Y0Ni00YzFhLTk1OGUtY2RkMDAzNzBmZjAxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    rating: 4
  },
  {
    title: "Valhalla (2019)",
    description: "Two Viking children journey with gods to stop Ragnarok.",
    posterURL: "https://m.media-amazon.com/images/S/pv-target-images/a920d33686b5bc940a32077e60463e818584b51cd879b0bc9b121a18e8dbb0de.jpg",
    rating: 5
  },
  {
    title: "Vikings: Valhalla (2022)",
    description: "Netflix series spin-off continuing Viking legends.",
    posterURL: "https://m.media-amazon.com/images/M/MV5BYTkxZGU2YWEtOTZlNy00OGI2LWJiMGMtMmNhMDkyMmY3MGU3XkEyXkFqcGc@._V1_.jpg",
    rating: 5
  },
  {
    title: "The Beekeeper (2024)",
    description: "Action thriller where a retired operative turned beekeeper seeks revenge.",
    posterURL: "https://upload.wikimedia.org/wikipedia/en/thumb/8/82/The_Beekeeper_poster.jpg/250px-The_Beekeeper_poster.jpg", 
    rating: 4
  },
  {
    title: "Who Am I (2014)",
    description: "A hacker joins a fame‑seeking crew and gets caught in dangerous cyber games.",
    posterURL: "https://m.media-amazon.com/images/M/MV5BZDFmNDY0NWUtMzZhYS00ZDk4LTg0MWItMTg5MDliZWExNmI4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", 
    rating: 4
  },
  {
    title: "I Am Legend (2007)",
    description: "A lone survivor in a post‑apocalyptic world fights to survive with his loyal dog Sam by his side.",
    posterURL: "https://m.media-amazon.com/images/I/71yYDLAvN6L._AC_UF1000,1000_QL80_.jpg", 
    rating: 5
  }
];

function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [titleFilter, setTitleFilter] = useState("");
  const [rateFilter, setRateFilter] = useState(0);

  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0
  });

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= rateFilter
  );

  const handleAddMovie = () => {
    if (
      newMovie.title &&
      newMovie.description &&
      newMovie.posterURL &&
      newMovie.rating > 0
    ) {
      setMovies([...movies, newMovie]);
      setNewMovie({ title: "", description: "", posterURL: "", rating: 0 });
    } else {
      alert("Please fill all fields!");
    }
  };

  return (
    <div className="app">
      <h1>🎬 Movie App</h1>

      {/* Filter Component */}
      <Filter setTitleFilter={setTitleFilter} setRateFilter={setRateFilter} />

      {/* Add New Movie */}
      <div className="add-movie">
        <h2>Add a New Movie</h2>
        <input
          type="text"
          placeholder="Title"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newMovie.description}
          onChange={(e) =>
            setNewMovie({ ...newMovie, description: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Poster URL"
          value={newMovie.posterURL}
          onChange={(e) =>
            setNewMovie({ ...newMovie, posterURL: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Rating (1-5)"
          min={1}
          max={5}
          value={newMovie.rating}
          onChange={(e) =>
            setNewMovie({ ...newMovie, rating: Number(e.target.value) })
          }
        />
        <button onClick={handleAddMovie}>Add Movie</button>
      </div>

      {/* Movie List */}
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
