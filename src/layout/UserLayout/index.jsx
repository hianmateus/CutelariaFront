import { Outlet } from 'react-router-dom'
import { Header, Credits } from '../../components'


export function UserLayout() {
    return (
        <div style={{ position: 'relative'}}>

        <Header />
        <Outlet />
        <Credits />
        
        </div>
    )
}