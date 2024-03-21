// components/DarkModeButton.jsx 

import { useTheme } from "next-themes";
import { SunIcon } from "./Icons/SunIcon";
import { MoonIcon } from "./Icons/MoonIcon";
import { Switch } from "@nextui-org/react";  

const DarkModeButton = () => {
    const { theme, setTheme } = useTheme();

    const handleTheme=()=>{
        if(theme === "light") {
            setTheme("dark")
        }else{
            setTheme("light")
        }
    }
    return (
        <div>
            <Switch 
            defaultSelected
            size="lg"
            color="success"
            onClick={handleTheme}
            thumbIcon={({ isSelected, className }) =>
                isSelected ? (
                <SunIcon className={className} />
                ) : (
                <MoonIcon className={className} />
                )
            }
            ></Switch>
        </div>
    );
}

export default DarkModeButton;