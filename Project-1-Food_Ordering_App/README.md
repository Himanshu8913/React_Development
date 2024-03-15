# Food Ordering App Project

 - Header
    - Logo
    - Nav Items
 - Body
    - Search
    - RestaurantContainer
    - RestaurantCard
      - Img
      - Name of restaurant
      - Rating
      - Cuisines
      - Delivery Time
 - Footer
    - Copyright
    - Links
    - Adddress
    - Contact

## React Hooks -> Normal JS utility functions

- useState() - State variables in react
- useEffect

## Types of Routing in web app

- Client Side Routing
- Server Side Routing

## Class Based Component -> calling 
- parent constructore()
- parent render()

   - child1 constructor()
   - child1 render()

   - child2 constructor()
   - child2 render()

< DOM UPDATED IN SINGLE BATCH >
   - child1 componentDidMount()
   - child2 componentDidMount()

- parent componentDidMount() -> used for api calls

# References
### Components Lifecycle
- https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
   ### Mounting
   - Constructor()
   - Render()
   - componentDidMount()
   ### Update
   - setState()
   - componentDidUpdate()
   ### Unmounting
   - componentWillUnmount()

## Breaking the application into smaller bundles

- Chunking
- Code Splitting
- Dynamic Bundling
- lazy Loading
- on demand loading
- dynamix imoprt

## PostCSS
- To transform css into js, Bundler(Parcel) use postcssrc to understand tailwind.
