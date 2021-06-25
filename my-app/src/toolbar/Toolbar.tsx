
import Header from '../header'

const toolbarStyles = {
    width: "100%"
};

const Toolbar = () => {
    return (
        <div style={toolbarStyles}><Header appName="Workbench" logo="/EPO-logo.034e00d7.gif" backgroundColor="white" leftSide={<div style={{ display: 'flex', marginLeft: '6rem' }}>left</div>} rightSide={<div style={{ display: 'flex', marginRight: '6rem' }}>right</div>} />
        </div>
    )
}

export default Toolbar;
