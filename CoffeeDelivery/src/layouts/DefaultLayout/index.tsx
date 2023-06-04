import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";


export function DefaultLayou() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}