import { BrowserRouter, Route, Routes } from "react-router-dom"
import DemoPage from "../components/demo"


function LayoutPage() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<DemoPage />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default LayoutPage