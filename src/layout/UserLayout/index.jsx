import { Outlet } from 'react-router-dom'
import { Header, Credits } from '../../components/Header'


export function UserLayout() {
    return (
        <>

        <Header />
        <Outlet />
        <Credits />
        
        </>
    )
}