import "./styles.css";
import { useState } from "react";
import hill1 from "./images/hill1.jfif";
import hill2 from "./images/hill2.png";
import hill3 from "./images/hill3.jfif";
import beach1 from "./images/beach1.jfif";
import beach2 from "./images/beach2.jfif";
import beach3 from "./images/beach3.jfif";
import heritage1 from "./images/heritage1.jfif";
import heritage2 from "./images/heritage2.jfif";
import heritage3 from "./images/heritage3.jfif";
export default function App() {
  const [places, setPlaces] = useState({
    place1: "Goa",
    place2: "Lakshadweep Islands",
    place3: "Radhanagar, Andaman and Nicobar Islands",
    ratingOfPlace1: "4/5",
    ratingOfPlace2: "4.5/5",
    ratingOfPlace3: "5/5",
    imageOfPlace1: beach1,
    imageOfPlace2: beach2,
    imageOfPlace3: beach3,
    description1:
      "Feel perky at the party hub of Goa, the Baga beach. This astounding beach is packed with vivid beach shacks and offers a spectrum of water sports. One of the most famous beaches in India, this beach characterized by its loud music, cheery ambiance and the exquisite views.",
    description2:
      "To witness some of the best-hued majwaters of the sea, visit the Bangaram Island beach in Lakshadweep. Shimmering water and the swaying palms are the highlights of the place which is further enhanced by the spectrum of water sports offered here.",
    description3:
      "The beauty of Radhanagar beach cannot be described in words. This was once voted as the best beach in entire Asia. It is indeed one of the best beaches in India, and a must-visit for all the beach lovers."
  });
  var content = {
    beachs: {
      place1: "Goa",
      place2: "Lakshadweep Islands",
      place3: "Radhanagar, Andaman and Nicobar Islands",
      ratingOfPlace1: "4/5",
      ratingOfPlace2: "4.5/5",
      ratingOfPlace3: "5/5",
      imageOfPlace1: beach1,
      imageOfPlace2: beach2,
      imageOfPlace3: beach3,
      description1:
        "Feel perky at the party hub of Goa, the Baga beach. This astounding beach is packed with vivid beach shacks and offers a spectrum of water sports. One of the most famous beaches in India, this beach characterized by its loud music, cheery ambiance and the exquisite views.",
      description2:
        "To witness some of the best-hued majwaters of the sea, visit the Bangaram Island beach in Lakshadweep. Shimmering water and the swaying palms are the highlights of the place which is further enhanced by the spectrum of water sports offered here.",
      description3:
        "The beauty of Radhanagar beach cannot be described in words. This was once voted as the best beach in entire Asia. It is indeed one of the best beaches in India, and a must-visit for all the beach lovers."
    },
    hill: {
      place1: "Leh Ladakh – Land of the High Passes.",
      place2: "Nainital, Uttarakhand – The Hill Station of Lakes",
      place3: "Manali, Himachal Pradesh – Valley of the Gods",
      ratingOfPlace1: "5/5",
      ratingOfPlace2: "4.5/5",
      ratingOfPlace3: "4.5/5",
      imageOfPlace1: hill1,
      imageOfPlace2: hill2,
      imageOfPlace3: hill3,
      description1:
        "Counted among the highest hill stations in India, a trip to Leh Ladakh is also one of the most famous. From driving in the world’s highest passes to soaking in the scenic beauty, there are a lot of reasons why Leh Ladakh is counted among the most famous hill stations in India.",
      description2:
        "A small town in Uttarakhand’s Kumaon range, Nainital is one of the most popular honeymoon destinations in India. It is also known as the ‘Lake District of India’ and has something to offer for everyone, from families and couples to solo travellers. Some of the activities that may be enjoyed at this famous hill station in India include rock-climbing, canoeing, kayaking, horse riding and parasailing.",
      description3:
        "The Kullu Valley offers mesmerizing views of scenic snow-clad peaks and lush forests as well as a number of activities to enjoy. On the list of hill stations in India that are most popular, Manali has a touristy vibe to it right from the moment you enter. Heli-skiing, camping, trekking, rock-climbing, and trekking are some of the adventure sports you can partake in here; and a number of Tibetan monasteries, Rohtang Pass, and Solang Valley are the tourist destinations that you can visit in Manali."
    },
    heritage: {
      place1: "Kaziranga National Park, Assam",
      place2: "Humayun’s Tomb, Delhi",
      place3: "Ajanta Caves",
      ratingOfPlace1: "4/5",
      ratingOfPlace2: "4/5",
      ratingOfPlace3: "3.5/5",
      imageOfPlace1: heritage1,
      imageOfPlace2: heritage2,
      imageOfPlace3: heritage3,
      description1:
        "Famed for its great one-horned rhinoceros and its abundance of biodiversity spots, Kaziranga National Park is perhaps the best chance for wild game in the country. The Assam Government has made herculean efforts to preserve the range of flora and fauna here, helped, of course by the designation of this park as a UNESCO World Heritage Site.",
      description2:
        "Built in 1565-1572 by Begum Bega, the first wife of Humayan, this tomb is one of the few monuments to have undergone several restoration works. Featuring as a preferred hangout for college students and tourists alike, Humayun’s Tomb is perhaps the most photographed site in New Delhi. It also features several smaller monuments and tombs within its premises.",
      description3:
        "The Ajanta and Ellora Caves were among the first Indian monuments to be designated UNESCO World Heritage Sites. Dating back to 2nd century BC, the Caves comprise some of the most exquisite masterpieces of 31 rock-cut sculptures, paintings and Buddhist shrines. Built over two periods under the Satavahana and Vakataka dynasties, the Ajanta Caves mark the beginning of the Indian Classical Art and continue to have a huge influence on Indian art ethos."
    }
  };

  function onClickHandler(event) {
    var genre = event.target.className;
    setPlaces({
      place1: content[genre].place1,
      place2: content[genre].place2,
      place3: content[genre].place3,
      ratingOfPlace1: content[genre].ratingOfPlace1,
      ratingOfPlace2: content[genre].ratingOfPlace2,
      ratingOfPlace3: content[genre].ratingOfPlace3,
      imageOfPlace1: content[genre].imageOfPlace1,
      imageOfPlace2: content[genre].imageOfPlace2,
      imageOfPlace3: content[genre].imageOfPlace3,
      description1: content[genre].description1,
      description2: content[genre].description2,
      description3: content[genre].description3
    });
  }

  return (
    <div className="App">
      <div className="Header">
        <h1> ✈️ Travel for Life </h1>
        <small>Checkout my favorite places.Select a place to get started</small>
        <div className="div-card">
          <span
            className="beachs"
            name="beachs"
            onClick={() => onClickHandler(event)}
          >
            Beachs
          </span>
          <span
            className="hill"
            name="hill"
            onClick={() => onClickHandler(event)}
          >
            Hill Station
          </span>
          <span
            className="heritage"
            name="heritage"
            onClick={() => onClickHandler(event)}
          >
            Heritage Sites
          </span>
        </div>
      </div>
      <div className="output-card">
        <img src={places.imageOfPlace1} />
        <span className="place-card-inside">{places.place1}</span>
        <span className="place-rating-card-inside">
          {places.ratingOfPlace1}
        </span>
        <span className="place-rating-card-description">
          {places.description1}
        </span>
      </div>
      <div className="output-card">
        <img src={places.imageOfPlace2} />
        <span className="place-card-inside">{places.place2}</span>
        <span className="place-rating-card-inside">
          {places.ratingOfPlace2}
        </span>
        <span className="place-rating-card-description">
          {places.description2}
        </span>
      </div>
      <div className="output-card">
        <img src={places.imageOfPlace3} />
        <span className="place-card-inside">{places.place3}</span>
        <span className="place-rating-card-inside">
          {places.ratingOfPlace3}
        </span>
        <span className="place-rating-card-description">
          {places.description3}
        </span>
      </div>
    </div>
  );
}
