import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Auth0Provider
      domain="dev-uu1jmqjw.us.auth0.com"
      clientId="otTHcWy94pFhMGM4nIJmzTQWp4iyXEED"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <App />
    </Auth0Provider>
  </Provider>,
  document.getElementById("root")
);
reportWebVitals();
