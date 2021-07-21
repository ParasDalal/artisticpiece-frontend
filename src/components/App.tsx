import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "../Resources/App.css";
import { Header } from "./Header";
import { Home } from "../pages/Home";
import { Training } from "../pages/Training";

function AppRouter() {
     return (
       <div>
       <Header />
       <Router>
         <div>
           <nav>
             <a href="/">Home</a>
             <a href="/Training">Training</a>
             <ul>
               <li>
                 <Link to="/">Home</Link>
               </li>
               <li>
                 <Link to="/training">Training</Link>
               </li>
             </ul>
           </nav>
   
           <Route path="/" exact component={Home} />
           <Route path="/training" exact component={Training} />
         </div>
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
