// import your stuff like this

// Import an entire module. This runs the module's global code, but doesn't actually import any values.
import './components/index.js'

// This inserts myModule into the current scope, containing all the exports from the module in the file located in /components/index.js.
import * as myModule from './components/index.js';

// or cherry pick only the things you need:
import { foo, bar} from './components/index.js';

// avoid making function calls in here, put that in your modules.
