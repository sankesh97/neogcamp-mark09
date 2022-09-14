import "./App.css";
import { useState } from "react";

function App() {
  const [filteredGenre, setFilteredGenre] = useState();
  const genreList = ["Action", "Adventure", "Drama", "Fantasy", "Romance"];
  const theList = [
    {
      name: "Full Metal Alchemist",
      desc: "As in the manga, the series follows the adventures of brothers Edward and Alphonse Elric, who are searching for the Philosopher's Stone so they can regain the bodies they lost in a failed attempt to bring their dead mother back to life.",
      genre: ["action", "adventure", "drama", "fantasy"],
      rating: 8.1,
    },
    {
      name: "One Piece",
      desc: "Monkey D. Luffy, a 17-year-old boy who defies your standard definition of a pirate. Rather than the popular persona of a wicked, hardened, toothless pirate ransacking villages for fun, Luffy's reason for being a pirate is one of pure wonder: the thought of an exciting adventure that leads him to intriguing people and ultimately, the promised treasure.",
      genre: ["action", "adventure", "fantasy"],
      rating: 8.6,
    },
    {
      name: "Attack on Titans",
      desc: 'Seeking to restore humanity\'s diminishing hope, the Survey Corps embark on a mission to retake Wall Maria, where the battle against the merciless "Titans" takes the stage once again.',
      genre: ["action", "adventure", "drama"],
      rating: 8.5,
    },
    {
      name: "Kimi no Na Wa (Your Name)",
      desc: "Kimi no Na wa. revolves around Mitsuha and Taki's actions, which begin to have a dramatic impact on each other's lives, weaving them into a fabric held together by fate and circumstance.",
      genre: ["drama", "supernatural", "romance"],
      rating: 8.4,
    },
    {
      name: "One Punch Man",
      desc: "The seemingly unimpressive Saitama has a rather unique hobby: being a hero. In order to pursue his childhood dream, Saitama relentlessly trained for three years, losing all of his hair in the process. Now, Saitama is so powerful, he can defeat any enemy with just one punch.",
      genre: ["action", "comedy"],
      rating: 8.5,
    },
    {
      name: "Sword Art Online",
      desc: "Ever since the release of the innovative NerveGear, gamers from all around the globe have been given the opportunity to experience a completely immersive virtual reality. Sword Art Online (SAO), one of the most recent games on the console, offers a gateway into the wondrous world of Aincrad, a vivid, medieval landscape where users can do anything within the limits of imagination.",
      genre: ["action", "adventure", "fantasy", "romance"],
      rating: 7.2,
    },
    {
      name: "Ao Haru Ride",
      desc: "While most young girls make an effort to show off their feminine charms, Futaba Yoshioka deliberately behaves like she wants to repel anyone who might be attracted to her. Ostracized by her female classmates in middle school for being a little too popular with the boys, she desperately strives to avoid a similar situation in high school by being unnecessarily noisy and graceless.",
      genre: ["drama", "romance"],
      rating: 7.6,
    },
    {
      name: "Death Note",
      desc: "Brutal murders, petty thefts, and senseless violence pollute the human world. In contrast, the realm of death gods is a humdrum, unchanging gambling den. The ingenious 17-year-old Japanese student Light Yagami and sadistic god of death Ryuk share one belief: their worlds are rotten.",
      genre: ["supernatural", "suspense"],
      rating: 8.6,
    },
    {
      name: "Fairy Tail",
      desc: "The Grand Magic Games reaches its climax following Natsu Dragneel and Gajeel Redfox's stunning victory over Sting Eucliffe and Rogue Cheney of the Sabertooth guild.",
      genre: ["action", "adventure", "fantasy"],
      rating: 7.7,
    },
  ];

  const filterFunc = (e) => {
    setFilteredGenre(e.target.innerText.toLowerCase());
  };
  //To Display the Genre List Buttons
  const displayGenreList = genreList.map((genre) => {
    return (
      <button onClick={filterFunc} key={genre}>
        {genre}
      </button>
    );
  });
  //To Display the Filtered Genre List
  const displayFilteredGenreList = theList
    .filter((element) => {
      if (filteredGenre) {
        return element.genre.includes(filteredGenre);
      } else {
        return element.genre;
      }
    })
    .map((element) => {
      return (
        <div className="itemContainer" key={element.name}>
          <h2>{element.name}</h2>
          <p>
            <strong>{element.rating} / 10</strong>
          </p>
          <p>{element.desc}</p>
        </div>
      );
    });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Your Anime/Cartoon Recommendation App 😉</h1>
        <p>Check out few of the good Anime/Cartoons based on Genres</p>
        <div>{displayGenreList}</div>
      </header>
      <main>
        {filteredGenre ? (
          <div class="grid-container">{displayFilteredGenreList}</div>
        ) : (
          <p>Please Select a Genre</p>
        )}
      </main>
      <footer className="App-footer">
        <p>
          These ratings and information have been taken from{" "}
          <a href="https://myanimelist.net/">MyAnimeList</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
