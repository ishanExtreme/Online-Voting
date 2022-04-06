import {useRoutes} from 'raviger'
import Home from '../pages/Home';
import PartyRegister from '../pages/Partyregister';
import Register from '../pages/Register';
import Signin from '../pages/Signin';


const routes = {
    '/': ()=><Home />,
    '/signin': ()=><Signin />,
    '/register': ()=><Register />,
    '/party-register': ()=><PartyRegister />
}

export default function AppRouter() {

    let routeResult = useRoutes(routes);
    return routeResult;
}