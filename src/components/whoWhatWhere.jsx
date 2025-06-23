import React from "react";
import "../info.css";

function WhoWhatWehere() {
  return (
    <div className="info-page">
      <div className="info-container">
        <div className="info-column">
          <h3>Who</h3>
          <p>
            We're a proudly independent pub in Oldham, known for our friendly
            atmosphere and local charm. Whether you're after a quiet pint or a
            lively evening, you'll feel right at home here.
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
        </div>
        <div className="info-column">
          <h3>What</h3>
          <p>
            Our menu is packed with flavour — think towering burgers, sizzling
            grills, fresh fish, and hearty vegetarian options. Plus, a drinks
            list full of real ales, spirits, and craft beers!
          </p>
          <p>
            Check out our full{" "}
            <a href="/menu" target="_blank" rel="noopener noreferrer">
              menu
            </a>{" "}
            and don’t miss our specials — they’re often limited-time delights
            you won’t want to miss!
          </p>
        </div>

        <div className="info-column">
          <h3>Where</h3>
          <p>
            Find us at the historic <strong>Kings Arms</strong> in Denshaw,
            Oldham — a cozy countryside pub located at:
            <br />
            <em>Huddersfield Rd, Denshaw, Oldham OL4 2JX</em>.
          </p>
          <iframe
            title="Kings Arms Denshaw Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11948.416238553602!2d-2.111!3d53.541!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb64203c00c4b%3A0x12ecfb9b2bb94f3e!2sOL4%202JX%2C%20Oldham%2C%20UK!5e0!3m2!1sen!2suk!4v1719177590000!5m2!1sen!2suk"
            width="100%"
            height="200"
            style={{ border: 0, marginTop: "1rem" }}
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
