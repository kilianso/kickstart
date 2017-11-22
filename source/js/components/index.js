/*
Build your stuff and use ES6 modules, no need of the old module loader and revealing module patterns.
You can also import dependencies from node modules like this:

import jquery from 'jquery'

*/

// There are multiple ways to write, like in old JS.

// as declaration
function foo() { console.log('yo') }

// or expression
var bar = () => {
	console.log('bar');
}

// or evoke it immediately
var foobar = (() => {
  console.log('foobar');
})()

// Now export the stuff you want (make it accessible to other modules)

// A module can only have one default export
export default foobar;

// but as many named exports as you'd like in curly braces.
export { foo, bar };

/* How to use that module, in other files like the app.js?

// This inserts myModule into the current scope, containing all the exports from the module in the file located in ./components/index.js.
import * as myModule from './components/index.js';

// or cherry pick only the things you need:
import { foo, bar} from './components/index.js';

*/
