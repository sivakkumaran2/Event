import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import {Signup} from "./authentication/Signup"
import {Login} from "./authentication/Login"
import {Forgot} from "./authentication/Forgot"
import { Dashboard } from "./Pages/Dashboard";
import {MyTickets} from "./Pages/MyTickets.tsx"
import {Transaction} from"./Pages/Transaction.tsx"
import {Reports} from"./Pages/Reports.tsx"
import {Profile} from"./Pages/Profile.tsx"
import { ThemeProvider } from "@/components/ui/Themeprovider.tsx"
import {Createnewevents} from "@/Pages/Createnewevents.tsx"
function App() {
  return (
    <Router>
       <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes>
  <Route path ="/forgot" element={<Forgot />} />
  <Route path ="/Login" element={<Login />} />
    <Route path="/" element={<Signup />} />
    <Route path="/dashboard" element={<Dashboard/>} />
    <Route path="/transactions" element={<Transaction/>} />
    <Route path="/events" element={<MyTickets/>} />
    <Route path="/reports" element={<Reports/>} />
    <Route path="/profile" element={<Profile/>} />
    <Route path="/newevents" element={<Createnewevents/>} />
    </Routes>
  </ThemeProvider>

</Router>
  )
}

export default App
