# Weave
Weave is user-friendly, interactive, and customizable social media application which promotes individuality and digital wellness by allowing users to have their favorite aspects of social media sites all in one place! Weave is a meta-social media site which combines users most preferred parts of other platforms into one location.

---

![Main](https://user-images.githubusercontent.com/51393952/70171711-24f8ca00-1684-11ea-8cc8-82507c1002c8.jpg)

## Demo

[Experience Weave!](https://weave-mern.herokuapp.com/#/)

## Technologies
  + Express
  + MongoDB
  + Node
  + Javascript
  + HTML/CSS
  + React
  + Redux
  + React-Grid-Layout
  + Material UI
  + Youtube API
  + Imgur API
  + News API
  + Heroku
  
 ## Feature Highlights
 
 ### Grid Layout
 
 The dashboard layout allows users to drag, drop, and resize components to suit their needs!
 
 ![Grid Layout](https://user-images.githubusercontent.com/51393952/70091925-04703780-15d2-11ea-9775-56321959160d.gif)
 
 ### Component Features
 
 Users have access to a feed of videos with an embedded player for a smooth experience and the ability to search for any videos they want!
 
 ![Youtube Search](https://user-images.githubusercontent.com/51393952/70092509-49e13480-15d3-11ea-90c4-aa490df0b26f.gif)
 
### Code Snippets

#### API Routing
  The different API calls had to be routed through the Express backend to avoid CORS and authorization issues. The resulting data was then served back to the frontend for use in the components.
  
![API Routes](https://user-images.githubusercontent.com/51393952/70092889-1e127e80-15d4-11ea-8f2c-6842e108eed7.jpg)

#### Optimizing Frontend Calls

  For testing purposes, we made our frontend calls when the component mounted. We instead decided to have the calls occur when the button for one of our dash items is clicked, thus improving the dashboard's initial load speed. The then wait for the promise to resolve before making the resizable box visible.
  
![Screen Shot 2019-12-17 at 7 14 04 PM](https://user-images.githubusercontent.com/43099538/71052870-89df0600-2101-11ea-91e1-6caedd3f4ab5.png)

  We then broke down functions that were doing more work so that the code would be more readable. 
  
  ![Screen Shot 2019-12-03 at 2 14 15 PM](https://user-images.githubusercontent.com/43099538/70095641-240b5e00-15da-11ea-8a65-dfcab5191314.png)

