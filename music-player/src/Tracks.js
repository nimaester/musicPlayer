import { v4 as uuidv4 } from "uuid";

const Tracks = () => {
  return [
    {
      title: "Far From Home",
      artist: "Toonorth",
      image_cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ad7fc4dda66ba986466fd2b1c416b0b12411ee28-300x300.jpg",
      id: uuidv4(),
      active: false,
      color: ["#5B8685", "#2C293C"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8127",
    },
    {
      title: "Everything Fades to Blue",
      artist: "Sleepy Fish",
      image_cover:
        "https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd-300x300.jpg",
      id: uuidv4(),
      active: false,
      color: ["#1F6985", "#53A3BE"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10015",
    },
    {
      title: "The Great Escape",
      artist: "Blue Wednesday",
      image_cover:
        "https://chillhop.com/wp-content/uploads/2020/07/58028b4ad62050072228e4c833916e5512772399-300x300.jpg",
      id: uuidv4(),
      active: false,
      color: ["#4C4666", "#272942"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9048",
    },
    {
      title: "Hereafter",
      artist: "Makzo",
      image_cover:
        "https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-300x300.jpg",
      id: uuidv4(),
      active: false,
      color: ["#BD7A6C", "#2A5396"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11770",
    },
    {
      title: "Reality",
      artist: "Chromonicci",
      image_cover:
        "https://chillhop.com/wp-content/uploads/2020/12/ed44264c2cd205b057a700e3adf42d8f92aa308c-300x300.jpg",
      id: uuidv4(),
      active: false,
      color: ["#F18361", "#337D86"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11743",
    },
    {
      title: "Mirage",
      artist: "Nymano, j'san",
      image_cover:
        "https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-300x300.jpg",
      id: uuidv4(),
      active: false,
      color: ["#57507C", "#191514"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10136",
    }
  ];
};

export default Tracks;
