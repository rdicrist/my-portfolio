// components/Hero.jsx

import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-container">
        <Image                    
            src='/images/profile_picture.jpg' 
            className="profile-img" 
            width={300} 
            height={300} 
            alt="Ricki's personal headshot" 
        />
        <div className="hero-text">
            <h1>Hi there, my name is Ricki! 👋</h1>
            <p>
                I enjoy taking way too many pictures of my four cats, playing board games (the ones that last hours), and coding! This website brought to you, by me, using Next.js, TBD, and TBD.
            </p>
            <div className="social-icons">
                <a
                    href="https://twitter.com/olawanle_joel"
                    aria-label="Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fa-brands fa-twitter"></i>
                </a>
                <a
                    href="https://github.com/olawanlejoel"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fa-brands fa-github"></i>
                </a>
                <a
                    href="https://www.linkedin.com/in/olawanlejoel/"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fa-brands fa-linkedin"></i>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Hero;