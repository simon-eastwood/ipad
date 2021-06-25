import CustomLayout from "./customlayout/CustomLayout";
import Toolbar from "./toolbar/Toolbar";
import { Button as EpoButton } from '@epo/epods-react-components'
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
