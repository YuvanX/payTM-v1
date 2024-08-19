import React from "react"
import {BrowserRouter, Route, Routes} from 'react-router-dom' 
import { SignIn } from "./pages/SignIn"
import { SignUp } from "./pages/SignUp"
import { DashBoard } from "./pages/DashBoard"
import { SendMoney } from "./pages/SendMoney"

function App() {

  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/dashboard" element={<DashBoard/>} />
        <Route path="/send" element={<SendMoney icon={"Y"} senderName={"Friend's Name"}/>} />
      </Routes>
    </BrowserRouter>
  </div>
}

export default App
