import Home from "./pages/home/Home";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/appLayout/AppLayout";
import Counter from "./pages/counter/Counter";
import QuoteGenerator from "./pages/quote/QuoteGenerator";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/app",
    element: <AppLayout />,
    children: [
      { index: true, path: "counter", element: <Counter /> },
      { path: "quote-generator", element: <QuoteGenerator /> },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
