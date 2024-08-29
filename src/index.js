import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading"> My Favourite Foods </h1>
    <div>
      <img
        className="food-img"
        src="https://www.cookwithmanali.com/wp-content/uploads/2022/02/15-Minute-Easy-Kadai-Paneer.jpg"
        alt="Paneer"
      />
      <img
        className="food-img"
        src="https://www.awesomecuisine.com/wp-content/uploads/2009/06/Plain-Dosa.jpg"
        alt=" Dosa"
      />
      <img
        className="food-img"
        src="https://static01.nyt.com/images/2022/05/18/dining/as-baked-chicken/as-baked-chicken-threeByTwoMediumAt2X-v2.jpg?width=1280&quality=75&auto=webp"
        alt=" chicken"
      />

      <img className="food-img" src="https://picsum.photos/200" alt="random" />
    </div>
  </div>,
  document.getElementById("root")
);
