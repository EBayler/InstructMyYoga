// import React from "react";
// import { Link } from "react-router-dom";
// import "./style.css";

// // Depending on the current path, this component sets the "active" class on the appropriate navigation link item
// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <Link className="navbar-brand" to="/">
//         Instruct My Yoga
//       </Link>
//       <div>
//         <ul className="navbar-nav">
//           <li className="nav-item">
//           <Link
//           to="/"
//           className={
//             window.location.pathname === "/" || window.location.pathname === "/Class"
//               ? "nav-link active"
//               : "nav-link"
//           }
//         >
//               Add a New Class
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link
//               to="/discover"
//               className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}
//             >
//              Logout
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
