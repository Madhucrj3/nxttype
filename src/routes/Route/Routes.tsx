import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Gaming from '../Gaming';
import Home from '../Home/Home';
import IndividualVideo from '../IndividualVideo';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import Savedvideo from '../SavedVideo';
import Trending from '../Trending';
 const RoutesPath = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route  path='/' element={<Home />} />
    <Route  path='/login' element={<Login />} />
    <Route  path="/trending" element={<Trending />} />
    <Route  path="/saveVideo" element={<Savedvideo />} />
    <Route  path="/gaming" element={<Gaming />} />
    <Route  path="/videos/:id" element={<IndividualVideo /> } />
    <Route path='*' element={<NotFound />} />
    </Routes>
    </BrowserRouter>
  )
}
export default RoutesPath;