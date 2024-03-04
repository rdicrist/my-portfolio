// components/Navbar.jsx

import Link from "next/link";
import DarkModeButton from "./DarkModeButton";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">
          Ricki's Portfolio
        </Link>
      </div>
      <a href="" className="cta-btn">Resume</a>
      <a href="" className="cta-btn">Cats</a>
      <DarkModeButton />
    </div>
  )
}

export default Navbar;