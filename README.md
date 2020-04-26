# static-template-example
A static website template example using EJS and Node.js which assembles pages at build time so they can be served as static html pages.


### Why EJS?
I like the simplicity of EJS and the docs gave me the answers that I needed. Although it doesn't have specific layout support I was able to roll-my-own layout using partials. The only thing that tricked me up a bit was needing to add `await` operators to the partial includes. 

### Installation:

    npm install

### Build

    npm run build

_The generated files will be written to the build directory._

### Run in dev mode with `http-server`    

    npm run dev

_Now you can visit http://localhost:8080 to view the generated pages._



### Why did I need this?
I had a few static content pages I needed to maintain and wanted a light-weight template engine to take care of the common content e.g. headers and footers.   There are a lot of great template engines out their but none of them as light-weight as what I wanted. I also could not find a straight forward example for putting together static templates in JavaScript as most of the focus is on dynamic templates.

### Acknowledgements 

The following articles helped me put together this example:

https://www.jamesedwards.name/ejs-render-file

https://scotch.io/tutorials/use-ejs-to-template-your-node-application

https://www.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/


