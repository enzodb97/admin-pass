import { Logo } from "../Logo"
import { SidebarRoutes } from "../SidebarRoutes"

function Sidebar() {
  return (
    <>
  <div className="py-6">
    <Logo/>
  </div>
  <SidebarRoutes/>
    </>
  )
}

export default Sidebar