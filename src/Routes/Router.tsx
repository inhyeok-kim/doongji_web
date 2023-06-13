import {
    createRoutesFromElements,
    createBrowserRouter,
    Route,
  } from "react-router-dom";
import Error from "../Pages/Error";
import AdminLayout from "../Layout/AdminLayout";
import Test from "../Pages/Test";
import CalendarPage from "../Pages/CalendarPage";
import BudgetPage from "../Pages/BudgetPage";
  
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
                path="budget"
            >
                <Route 
                    index 
                    element={<BudgetPage />} />
            </Route>
        </Route>
    )
);

export default router;