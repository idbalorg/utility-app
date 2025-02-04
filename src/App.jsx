import Home from "./pages/home/Home";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/appLayout/AppLayout";
import Counter from "./pages/counter/Counter";
import QuoteGenerator from "./pages/quote/QuoteGenerator";

const router = createBrowserRouter(
  [
    { path: "/", element: <Home /> },
    {
      path: "/app",
      element: <AppLayout />,
      children: [
        { path: "counter", element: <Counter /> },
        { path: "news-explorer", element: <QuoteGenerator /> },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  }
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
