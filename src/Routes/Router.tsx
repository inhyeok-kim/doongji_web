import {
    createRoutesFromElements,
    createBrowserRouter,
    Route,
  } from "react-router-dom";
import Error from "../Pages/Error";
import AdminLayout from "../Layout/AdminLayout";
import Test from "../Pages/Test";
import CalendarPage from "../Pages/CalendarPage";
import AccountPage from "../Pages/AccountPage";
  
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={<AdminLayout />}
            errorElement={<Error />}
        >
            <Route
                index
                element={<Test/>} />
            <Route
                path="hi"
            >
                <Route 
                    index 
                    element={<Test/>} />
                <Route 
                    path=":text"
                    element={<Test/>} />
            </Route>
            <Route
                path="calendar"
            >
                <Route 
                    index 
                    element={<CalendarPage/>} />
            </Route>
            <Route
                path="account"
            >
                <Route 
                    index 
                    element={<AccountPage />} 
                />
                <Route
                    path="asset"
                />
                <Route
                    path="budget"
                />
                <Route
                    path="trade"
                />
            </Route>
        </Route>
    )
);

export default router;