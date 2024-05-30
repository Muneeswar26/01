import {Link} from 'react-router-dom'

import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="home-page-container">
    <Header className="header" />
    <div className="home-content-container">
      <img
        src="https://s3-alpha-sig.figma.com/img/86e9/1bd0/119bb212fc241c8f804cd2e93d98df60?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mLkcR9Ptxns7MtuAr0DSRXVoXOOD3USYvoH55VGbaS3V3Pfonf8uojUBMXl5B~Knpp8XTkV-WPs8jzvsKo~szrOZFIo6aMJX7El1yTYSPaGlzLOhBzYayI9FgGJIKQPPYlWWFDshxgihfG8jHPbQMFI2-thJxOVnqFz5b7pmzrT0cMwBCsESXip5Q0IVubexCvF-xbfvOlWyunlbHpYDCITLO-cQPGuS1CD3XKJCDgcSUY2tRr9SwqDkmlbtstSew-uvqKKpMxta88E0K5eSJBokspT-YKT6d7q3k6XpGirbZiar3jsQVJh0QVfOdyxWERF6Utseh1keYx2J0EQsuQ__"
        alt="Travel"
        className="home-image"
      />
      <div className="home-content-description">
        <h1 className="home-page-heading">Travel. Relax. Memories.</h1>
        <p className="home-page-description">
          With travel trip you can experience new adventures and visit the best
          tourist destinations.
        </p>
        <Link to="/book-a-new-trip">
          <button type="button" className="home-page-btn">
            Book a New Trip
          </button>
        </Link>
      </div>
    </div>
  </div>
)

export default Home
