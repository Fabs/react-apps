import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import HelloWorld from './HelloWorld.jsx';

Meteor.startup(() => {
  render(<HelloWorld/>, document.getElementById('app'));
});