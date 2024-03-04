// components/DarkModeButton.jsx 

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";

// function Navbar() {
//     const router = useRouter();
//     console.log(router.asPath);
//     const { theme, setTheme } = useTheme();
//     const [mounted, setMounted] = useState(false);
  
//     useEffect(() => {
//       setMounted(true);
//     }, []);
// }

function changeTheme(text) {
    setTheme(theme === "dark" ? "light" : "dark")
    test = document.getElementById(text)
    test.style.class="{theme}"
}

// const { theme, setTheme } = useTheme();
// useEffect(() => {
//     document.body.style.backgroundColor = color
// }, [color])
    


const DarkModeButton = () => {
    const { theme, setTheme } = useTheme();
    // const { text, setText } = setText();
    
    return (
        <button
            class="fa-brands fa-github"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        ></button>
    //     <div> 
    //     <button onClick={() => setTheme('light')}>Light Mode</button>
    //     <button onClick={() => setTheme('dark')}>Dark Mode</button>
    //   </div>
    )
}

export default DarkModeButton;