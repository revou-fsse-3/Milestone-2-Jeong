import { Outlet } from "react-router-dom"
import { Navbar, Search } from "../../components"

const MainLayout = () => {

    return (
        <div>
            <div>
                <Navbar />
                <Search />
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout