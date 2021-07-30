import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import "../Resources/App.css";
import { Header } from "./Header";
import { Home } from "../pages/Home";
import { Training } from "../pages/Training";

function AppRouter() {
     return (
       <div>
       <Header />
     <Router>
        <Route path="/" exact component={Home} />
        <Route path="/training" exact component={Training} />
        </Router>
       </div>
     );
  }
   
export default AppRouter;


// function App() {
//   return (
    

//     <div className="App">
//       <Header />
//       <Training />
//       <Home />
//     </div>
//   );
// }

// export default App;
