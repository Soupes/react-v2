import './scss/app.scss';
import {
    Routes,
    Route,
} from "react-router-dom";
import './components/Header';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Cart } from './pages/Cart';
import { FullVinyl } from './pages/FullVinyl';
import { MainLayout } from './layouts/MainLayout';


function App() {
    return (
        <Routes>
            <Route path='/' element={<MainLayout />}>
                <Route path='' element={<Home />} />
                <Route path='cart' element={<Cart />} />
                <Route path='vinyl/:id' element={<FullVinyl />} />
                <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default App;
