import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Kellatto from "./component/kella/Kellatto";
import Request from "./component/request/Request";
import Admin from "./component/admin/Admin";
import Login from "./component/login/Login";

import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Kellatto />,
    errorElement: (
      <div>
        <h1>This is the error page</h1>
      </div>
    ),
    children: [
      // Add your child routes or components here
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/request",
    element: <Request />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
}

export default App;
