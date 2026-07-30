import './App.scss'
import {Router} from "@/app/router/router.tsx";
import {Provider} from "react-redux";
import {store} from "@/app/store/store";
import {AppInitializer} from "@/app/providers";
import React from "react";
import {ThemeProvider} from "@/app/providers/ThemeProvider/ThemeProvider.tsx";

function App() {

  return (
      <Provider store={store}>
          <ThemeProvider>
              <AppInitializer />
              <Router />
          </ThemeProvider>
      </Provider>
  )
}

export default App
