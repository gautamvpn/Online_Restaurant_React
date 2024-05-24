# NAMASTE REACT

# PARCEL
- Dev build
-Local Server
-HMR = Hot Module Replacement (automatic load  the content wheneever any changes occur on react side)
- File Wachting Algorithm (HMR)
-Image optimization
-Minification (parcel would use some other liberaries dependencies)
-bundling
-Compress 
-Consistent Hashing
-Code splitting
-Differential Bundling(to support older browsers)
- Error handling
-Tree Shaking - remove unused code


--Parcel use other liberaries to excute all this.


/**
Header
 -Logo
 -Nav Items
Body
 -Search
 -ResturantContainer
 -ResturatantCard
   -Img
   -name of Res, Star Rating, delivery time
Footer
 -Links
 -Address
 -Contact   
**/



Redux Toolkit (RTK)
-Install @reduxjs/toolkit and react-redux
-Build our store
-Connect our store to our app
- slice(cartSlice)
-dispatch action
-Selector(Reading the data)


Types of Testing(developer)**
-Uint testing (in isolation)
-Integration testing
-End to End testing


# Setting up Testing in or app
-Install Reast Testing library
-Install jest
-Installed Babel dependencies
-Configure Babel 
(Babel is transpiller and parcel is already babel behind the scene and parcel has it's own configuration for babel now we are trying to add extra configuration and now parcel configuration conflict with the new configuration so for this we have changed the parcel behaviour using new babel.config.js file to accuomodate the parcel with jest).

-configure parcel config file to disable default babel transpilation for parcel.(babel.config.js "frm jest docs" + .parcelrc "from parcel -> javascript-> babel docs")

-jest configuration (npx jest --init)
-install jsdom library  (npm install --save-dev jest-environment-jsdom)
-Install @babel/preset-react to make JSX work in test cases
-Include @babel/preset-react inside my babel config
-npm i -D @testing-Library/jest-dom

*** for running the test Case -> npm run test.

