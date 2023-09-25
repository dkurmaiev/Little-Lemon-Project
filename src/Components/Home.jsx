import React from 'react';
import { Link } from 'react-router-dom';
import restaurantImage from './images/restaurant-image.jpg'
import greekSalad from './images/greek-salad.jpg'
import bruschetta from './images/bruschetta.jpg'
import lemonDesert from './images/lemon-dessert.jpg'


const Home = () => {
  return (
    <div className="home">
      <div className="home-banner">
        <div className="banner-content">
          <div className="banner-text">
            <h1>Welcome to Little Lemon</h1>
            <p>Chicago</p>
            <p>Your favorite destination for fresh and delicious meals.</p>
            <button className="reserve-button">
                <Link to="/reservation">RESERVE A TABLE</Link>
            </button>
          </div>
          <div className="banner-image">
          <img src={restaurantImage} alt="restaurantImage" ></img>
          </div>
        </div>
      </div>

      <div className="featured-dishes">
        <h2>This weeks specials</h2>
        <div className="dishes">
        <div className="dish">
        <img src={greekSalad} alt="Greek Salad" ></img>
          <h3>Greek Salad</h3>
          <p>Fresh salad with tomatoes, cucumbers, olives, and feta cheese.</p>
          <button className="online-menu-button">
          <Link to="/menu">Online Menu</Link> 
        </button>
        </div>

        <div className="dish">
        <img src={bruschetta} alt="Bruschetta" ></img>
          <h3>Tomato Bruschetta</h3>
          <p>Delicious Italian appetizer with tomatoes, basil, and garlic.</p>
          <button className="onlin-menu-button">
          <Link to="/menu">Online Menu</Link> 
        </button>
        </div>

        <div className="dish">
        <img src={lemonDesert} alt="Lemon Desert" ></img>
          <h3>Lemon Dessert</h3>
          <p>Decadent lemon-flavored dessert with a tangy twist.</p>
          <button className="online-menu-button">
          <Link to="/menu">Online Menu</Link> 
        </button>
        </div>
      </div>

      <div className="customer-reviews">
        <h2>Customer Reviews</h2>
        <div className="reviews">
          <div className="review">
            <div className="reviewer-info">
              <span>John Doe</span>
            </div>
            <p>"Delicious food and great service! Will definitely be back."</p>
          </div>

          <div className="review">
            <div className="reviewer-info">
              <span>Jane Smith</span>
            </div>
            <p>"The lemon dessert is to die for. Highly recommended!"</p>
          </div>

          <div className="review">
            <div className="reviewer-info">
              <span>Michael Johnson</span>
            </div>
            <p>"Always tasty here! Love their Greek salad."</p>
          </div>

          <div className="review">
            <div className="reviewer-info">
              <span>Sarah Wilson</span>
            </div>
            <p>"Best place for a romantic dinner. Excellent wine!"</p>
          </div>

          <div className="review">
            <div className="reviewer-info">
              <span>David Clark</span>
            </div>
            <p>"Fantastic Italian cuisine. Bruschetta is my favorite appetizer."</p>
          </div>

          <div className="review">
            <div className="reviewer-info">
              <span>Emily Brown</span>
            </div>
            <p>"Visiting Little Lemon is always a delightful experience. Great menu and atmosphere."</p>
          </div>

          <div className="review">
            <div className="reviewer-info">
              <span>Robert White</span>
            </div>
            <p>"I come here for lunch every Monday. My colleagues love this place too."</p>
          </div>

          <div className="review">
            <div className="reviewer-info">
              <span>Olivia Taylor</span>
            </div>
            <p>"A place where you find inspiration and pleasure in every dish."</p>
          </div>
        </div>
      </div>
    </div>
    </div>
       
  );
};

export default Home;
