import React from "react";

function SeasonDisplay() {
  console.log(
    window.navigator.geolocation.getCurrentPosition(
        (position) => {console.log(position)}, 
        (err) => console.log(err)
    )
  );
  return <div>SeasonDisplay</div>;
}

export default SeasonDisplay;
