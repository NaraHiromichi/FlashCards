import React from "react";

function Home(props) {
  return (
    <div className="App">
      <nav className="home_nav">Memorize Words</nav>
      <main>
        <div className="button_container">
          <button
            className="plus icon"
            name="plus"
            onClick={props.handleButton}
          ></button>
          <button
            className="folder icon"
            name="folder"
            onClick={props.handleButton}
          ></button>
        </div>
      </main>
      <footer>
        You can make custom flash card to learn vocabulary that you're learning.
      </footer>
    </div>
  );
}

export default Home;
