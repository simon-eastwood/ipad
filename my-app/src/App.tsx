import CustomLayout from "./customlayout/CustomLayout";
import Toolbar from "./toolbar/Toolbar";
import './App.css'

const App = () => {
    return (
        <div id="container">
            <Toolbar></Toolbar>
            <CustomLayout />
        </div>
    )
}

export default App;
