import LocalStorage from "./LocalStorage";
import "./style.css"

function LightDarkMode(){
    const[theme,setTheme]=LocalStorage('theme','dark');
    function handleToggleTheme(){
        setTheme(theme ==='light'?'dark':'light');
    }
    console.log(theme);
    
    return(<div className="lightdarkmode" data-theme={theme}>
        <div className="container">
            <p>Hello World</p>
            <button onClick={handleToggleTheme} >Change Theme</button>
        </div>
    </div>);
}
export default LightDarkMode;