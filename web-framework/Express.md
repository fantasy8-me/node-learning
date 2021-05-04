>https://stackoverflow.com/questions/5284340/what-is-node-js-connect-express-and-middleware
``` js
What ExpressJS adds
ExpressJS and connect are parallel projects. Connect is just a middleware framework, with a nice use function. Express does not depend on Connect (see package.json). However it does the everything that connect does i.e:

Can be registered with createServer like connect since it too is just a function that can take a req/res pair (source).
A use function to register middleware.
A utility listen function to register itself with http
In addition to what connect provides (which express duplicates), it has a bunch of more features. e.g.

Has view engine support.
Has top level verbs (get/post etc.) for its router.
Has application settings support.
The middleware is shared
The use function of ExpressJS and connect is compatible and therefore the middleware is shared. Both are middleware frameworks, express just has more than a simple middleware framework.

Which one should you use?
My opinion: you are informed enough ^based on above^ to make your own choice.

Use http.createServer if you are creating something like connect / expressjs from scratch.
Use connect if you are authoring middleware, testing protocols etc. since it is a nice abstraction on top of http.createServer
Use ExpressJS if you are authoring websites.
Most people should just use ExpressJS.
```