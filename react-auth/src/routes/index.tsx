import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LandingPage } from '../pages/LandingPage'
import { ProtectedRoutes } from '../components/ProtectedRoutes'
import AuthComponent from '../pages/AuthComponent'
import { Delete } from '../pages/Delete'
import { Privacy } from '../pages/Privacy'
import { Register } from '../pages/Register'
import { ResetPassword } from '../pages/ResetPassword'
import { Settings } from '../pages/Settings'
import { Terms } from '../pages/Terms'
import Cookies from "universal-cookie";
import Layout from '../layout'
import { Feedback } from '../pages/Feedback'

// Create a new instance of cookies and retireve tokens from them
const cookies = new Cookies();
const token = cookies.get("TOKEN");

/**
 * Compoonent to provide routes for the app using React Router
 * @returns JSX element containing routes
 */
export const RoutesProvider = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<LandingPage />}/>
                <Route path="/login" element={<Register type="login" />} />
                <Route path="/register" element={<Register type="register" />} />
                <Route path="/reset" element={<ResetPassword />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/settings"
                element={
                    <ProtectedRoutes>
                        <Settings />
                    </ProtectedRoutes>
                }
                />
                <Route path="/home"
                element={
                    <ProtectedRoutes>
                        <AuthComponent />
                    </ProtectedRoutes>
                }
                />
                <Route path="/delete"
                element={
                    <ProtectedRoutes>
                        <Delete token={token} />
                    </ProtectedRoutes>
                }
                />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
