import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './TedInfoPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faPeopleGroup, faBullhorn } from '@fortawesome/free-solid-svg-icons';

const TedInfoPage = () => {
  return (
    <div className="ted-info-page">
      <h1 className="ted-title" style={{ color: '#eb0028' }}>ABOUT TEDx</h1>
      <div className="ted-content">
        <div className="ted-text">
          <p className="ted-paragraph">
            In the spirit of ideas worth spreading, TEDx is a program of
            local, self-organized events that bring people together to
            share a TED-like experience. At a TEDx event, TED Talks video
            and live speakers combine to spark deep discussion and
            connection in a small group. These local, self-organized
            events are branded TEDx, where x = independently organized
            TED event. The TED Conference provides general guidance for
            the TEDx program, but individual TEDx events are self-organized.
          </p>
          <a href="https://www.ted.com/" target="_blank" rel="noopener noreferrer">
            <button className="ted-button">Explore TEDx</button>
          </a>
        </div>
        <div className="ted-image-container">
          <img src="/trial269.png" alt="TED Conference" className="ted-image" />
        </div>
      </div>
      <h2 className="tedx-title" style={{ color: '#eb0028' }}>About NIT Goa</h2>
      <div className="tedx-content">
        <div>
          <img src="/abtnit77.jpg" alt="TEDx Event" className="ted-image" />
        </div>
        <div className="tedx-text">
          <p>
            NIT Goa, a premier technical institute nestled in the serene forests of South Goa, continues to grow with its new permanent campus in Cuncolim. Ranked among the top 150 technical institutions in India by NIRF, NIT Goa fosters innovation and creativity. As we settle into our state-of-the-art campus, we are excited to host this year's TEDxNIT GOA, marking the beginning of an inspiring new chapter.
          </p>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const [videoEnded, setVideoEnded] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    setVideoEnded(true);
    setTimeout(() => {
      setShowBanner(true);
    }, 500); // Smooth transition
  };

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <>
      <div className="hero-container">
        {videoError ? (
          <div className="fallback-image-container">
            <img 
              src="/trial3.jpg" 
              alt="TEDx NIT Goa" 
              className="fallback-image" 
            />
            <div className="event-banner">
              <div className="event-details">
                <h2>18th January 2025</h2>
                <p>9 am - 6 pm</p>
                <p>Goa, India</p>
                <p>Discover the magic of unexpected connections, and explore the power of ideas unfolding into life's little miracles! Lunch and goodies will be provided!!</p>
                <Link to="/BuyTickets" className="buy-tickets-btn">BUY TICKETS</Link>
              </div>
            </div>
          </div>
        ) : (
          <video
            ref={videoRef}
            src="/WEBSITTTTTTTTT.mp4"
            alt="TEDx NIT Goa Hero Video"
            className="hero-image"
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            onError={handleVideoError}
          />
        )}
        {showBanner && !videoError && (
          <div className="event-banner banner-visible">
            <div className="event-details">
              <h2>18th January 2025</h2>
              <p>9 am - 6 pm</p>
              <p>Goa, India</p>
              <p>Discover the magic of unexpected connections, and explore the power of ideas unfolding into life's little miracles! Lunch and goodies will be provided!!</p>
              <Link to="/BuyTickets" className="buy-tickets-btn">BUY TICKETS</Link>
            </div>
          </div>
        )}
      </div>

      <div>
        <TedInfoPage />
      </div>
      <div className="container">
        <div className="card">
          <div className="box">
            <div className="content">
              <h2>
                <FontAwesomeIcon icon={faHandshake} className="icon" />
              </h2>
              <a href="https://forms.gle/Py4gC3igyZgdD7HU7">Partner with us</a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="box">
            <div className="content">
              <h2>
                <FontAwesomeIcon icon={faBullhorn} className="icon" />
              </h2>
              <a href="https://forms.gle/3PyKPMgCqeQydAeN9">Be a Speaker</a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="box">
            <div className="content">
              <h2>
                <FontAwesomeIcon icon={faPeopleGroup} className="icon" />
              </h2>
              <a href="#">Participate</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
