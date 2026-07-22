import './App.scss'
import {Router} from "@/app/router/router.tsx";
import {Provider} from "react-redux";
import {store} from "@/app/store/store";
import {AppInitializer} from "@/app/providers";

function App() {

  return (
      <Provider store={store}>
          <AppInitializer />
          <Router />
      </Provider>
  )
}

export default App
