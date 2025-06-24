import React from "react";
import "../info.css";
import BarImage from "/PubFront.png";
import Fish from "/fish.png";

function WhoWhatWehere() {
  return (
    <div className="info-page">
      <div className="info-container">
        <div className="info-column">
          <h3>Who</h3>
          <p className="kingsarms-intro">
            A proudly independent pub the
            <span className="highlight"> Kings Arms</span> offers a warm embrace
            to all its visitors. Whether you're popping in for a{" "}
            <span className="italic">quiet pint</span> or
            <span className="italic"> accidentally staying ‘til closing</span>,
            we’ve got your <span className="throne">throne</span> ready. Just
            don’t expect a <span className="crown">crown</span> – unless it's on
            your pint glass.
          </p>

          <img
            src={BarImage}
            alt="Bar Front"
            className="image"
            width="100%"
            height="280"
            style={{ border: 0, marginBottom: "0rem", alignSelf: "center" }}
          />
        </div>
        <div className="info-column">
          <h3>What</h3>
          <p className="menu-highlight">
            Our <a className="menuTag" href="#Menu">menu</a> is bursting with bold flavours and freshly prepared dishes
            — from stacked burgers and sizzling grills to crisp, golden fish and
            vegetarian favourites. Pair it from a selection of real ales, craft
            beers, and classic spirits.
          </p>
          <img
            src={Fish}
            alt="Bar Front"
            className="image"
            width="100%"
            height="280"
            style={{ border: 0, marginBottom: "0rem", alignSelf: "center" }}
          />
        </div>

        <div className="info-column">
          <h3>Where</h3>
          <p className="location-info">
            Find us at the historic{" "}
            <span className="highlight"> Kings Arms</span> in Denshaw, Oldham —
            a gastro pub located at:
            <br />
            <em>Grains Bar, Denshaw, Oldham OL4 2JX</em>.
          </p>
          <p>
            <strong>Phone:</strong> <a href="tel:01612647946">0161 264 7946</a>
            <br />
            <strong>Facebook:</strong>{" "}
            <a
              href="https://www.facebook.com/thekingsarmsgrainsbar/?locale=en_GB"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Kings Arms Grains Bar
            </a>
          </p>
          <iframe
            className="iframe"
            title="Kings Arms Denshaw Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11948.416238553602!2d-2.111!3d53.541!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb64203c00c4b%3A0x12ecfb9b2bb94f3e!2sOL4%202JX%2C%20Oldham%2C%20UK!5e0!3m2!1sen!2suk!4v1719177590000!5m2!1sen!2suk"
            width="100%"
            height="200"
            style={{ border: 0, marginBottom: "1rem", alignSelf: "center" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default WhoWhatWehere;
