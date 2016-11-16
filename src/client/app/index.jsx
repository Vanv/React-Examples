import React from 'react';
import {render} from 'react-dom';
import SimpleTextComponent from './SimpleTextComponent.jsx';
import PropsExampleComponent from './PropsExample.jsx';
import MenuEventHandlingComponent from './MenuEventHandlingComponent.jsx';


class App extends React.Component {
  render () {
    return (
      <div className="container">
        <div className="col-lg-12">
          <blockquote>
          <h4>Simple Text Display Example</h4>
          <SimpleTextComponent />
          </blockquote>
          <PropsExampleComponent title="The Italin Job" genre="Action" />
          <PropsExampleComponent title="Inside Man" genre="Action" />
          <PropsExampleComponent title="Gladiator" genre="Period" />
          <MenuEventHandlingComponent>Potato Wedges</MenuEventHandlingComponent>
          <MenuEventHandlingComponent>Chips</MenuEventHandlingComponent>
          <MenuEventHandlingComponent>Pita Bread</MenuEventHandlingComponent>
        </div>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
