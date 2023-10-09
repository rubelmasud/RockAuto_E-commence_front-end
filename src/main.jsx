import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/Routers";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="lg:w-[1280px] mx-auto md:px-8 px-2">
      <RouterProvider router={routes} />
    </div>
  </React.StrictMode>
);
