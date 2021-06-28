import { Layout, Model, TabNode, IJsonModel } from 'flexlayout-react';
import './CustomLayout.css';
import { Button } from '@epo/epods-react-components';
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
      return <Button iconBefore="face">{node.getName()}</Button>;
    }
  }

  return (
    <div className="customlayout">
      <Layout
        model={model}
        factory={factory}

      />
    </div>
  );
}

export default CustomLayout;
