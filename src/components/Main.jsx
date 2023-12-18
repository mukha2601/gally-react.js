import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Main() {
   return (
      <div className="2xl:container m-auto px-3">
         <Navbar />
         <Outlet />
      </div>
   )
}
