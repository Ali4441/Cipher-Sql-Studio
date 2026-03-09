import "./App.css";


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./componets/Navbar/Navbar";
import AssignmentList from "./pages/Home/AssignmentList";
import AttemptPage from "./pages/Attempt/AttemptPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>


        <Navbar status='connected' Navigate='Sing in' />
        <AssignmentList />
      </div>
    ),
  },
  {
    path: "/Attempt/:id",
    element: (
      <div>


        <Navbar status='connected' Navigate='Assignments' />
        <AttemptPage />
      </div>
    ),
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;