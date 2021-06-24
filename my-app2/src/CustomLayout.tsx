import { Model, TabNode, IJsonModel } from 'flexlayout-react';
import FlexLayout from 'flexlayout-react';
import './CustomLayout.css';
import 'flexlayout-react/style/light.css';

var json: IJsonModel = {
    global: {},
    layout: {
        "type": "row",
        "weight": 100,
        "children": [
            {
                "type": "tabset",
                "weight": 50,
                "selected": 0,
                "children": [
                    {
                        "type": "tab",
                        "name": "One",
                        "component": "button"
                    }
                ]
            },
            {
                "type": "tabset",
                "weight": 50,

                "selected": 0,
                "children": [
                    {
                        "type": "tab",
                        "name": "Two",

                        "component": "button"
                    }
                ]
            }
        ]
    }
};

const model = Model.fromJson(json);

function CustomLayout() {

    const factory = (node: TabNode) => {
        var component = node.getComponent();
        if (component === "button") {
            return <button>{node.getName()}</button>;
        }
    }

    return (
        <FlexLayout
            model={model}
            factory={factory} />
    );
}

export default CustomLayout;