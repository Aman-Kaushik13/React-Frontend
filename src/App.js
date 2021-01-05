import "./App.css";
import { Link } from "react-scroll";

function App() {
  return (
    <>
      <nav style={{ position: "sticky", display: "flex" }}>
        <h1 className="title">Foodie</h1>
        <ul style={{ listStyle: "none" }}>
          <li>
            <Link to="home" spy={true} smooth={true} absolute={true}>
              <i class="fa fa-television" aria-hidden="true"></i>
            </Link>
          </li>
          <li>
            <Link to="recipe" spy={true} smooth={true} absolute={true}>
              <i class="fa fa-coffee" aria-hidden="true"></i>
            </Link>
          </li>
          <li>
            <Link to="searchRecipes" spy={true} smooth={true} absolute={true}>
              <i class="fa fa-cutlery" aria-hidden="true"></i>
            </Link>
          </li>
          <li>
            <Link to="map" spy={true} smooth={true} absolute={true}>
              <i class="fa fa-map" aria-hidden="true"></i>
            </Link>
          </li>
        </ul>
        <div style={{ fontSize: "50px", float: "right", marginLeft: "8rem" }}>
          <i className="fa fa-user-circle"></i>
        </div>
      </nav>
      {/*Navbar*/}
      <div style={{ height: "100vh" }}>
        <Home />
      </div>

      <div style={{ height: "100vh" }}>
        <Recpie />
      </div>

      <div style={{ height: "100vh" }}>
        <SearchRecipes />
      </div>
      <div style={{ height: "100vh" }}>
        <Map />
      </div>
      <h4 style={{ marginLeft: "800px", color: "blue" }}>
        <a href="https://github.com/Aman-Kaushik13">
          Frontend Made by Aman Kaushik
        </a>
      </h4>
    </>
  );
}
//the icons on the navbar will scroll to a specfic portion of the website when clicked 👍
function Home() {
  return (
    <div id="home">
      <h1 className="title" style={{ textAlign: "center" }}>
        Popular Recipes
      </h1>

      <div className="card">
        {/* Enter user details here... the person who posted.. comments extra the data to be recived from the backend */}
        <h1 style={{ margin: "0 3rem" }}>Name</h1>
      </div>
    </div>
  );
}
function Recpie() {
  return (
    <div id="recipe">
      <div>
        {/* Get input and send it to backend */}

        <input
          className="search"
          type="text"
          placeholder="Search for any recipes..."
        />
      </div>
      {/* Show the recipe     */}
      <div className="card"></div>
    </div>
  );
}

function SearchRecipes() {
  return (
    <div id="searchRecipes">
      <h1>NO CONTENT DECIDED as in the Figma design</h1>
    </div>
  );
}

function Map() {
  return (
    <div id="map">
      <h1 style={{ margin: "2rem" }}>The Map..</h1>
      <div className="card" style={{ margin: "0rem 5px 29px 20rem" }}>
        <h3>Zip Code</h3>
      </div>
    </div>
  );
}

export default App;
