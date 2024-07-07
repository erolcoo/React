import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons/faCopyright";

export default function Footer() {
  return (
    <div className="footer-content">
      <div className="map-container">
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038693.518508675!2d22.31345716655006!3d42.79160274994808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa839b25d79d27%3A0x5fbd1bdf89504b93!2sBulgaria!5e0!3m2!1sen!2sus!4v1625662020681!5m2!1sen!2sus"
          allowFullScreen=""
        ></iframe>
      </div>

      <div className="flex-container">
        <div className="footer-item">
          <p>
            <FontAwesomeIcon icon={faEnvelope} style={{ color: "black" }} />
            travelwithus@gmail.com
          </p>
        </div>
        <div className="footer-item">
          <p>
            <FontAwesomeIcon icon={faPhone} style={{ color: "black" }} />
            +359/889454545
          </p>
        </div>
        <div className="footer-item">
          <p>
            <FontAwesomeIcon icon={faCopyright} style={{ color: "black" }} />
            2024 Vacation Destinations
          </p>
        </div>
      </div>
    </div>
  );
}
