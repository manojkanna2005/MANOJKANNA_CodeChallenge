import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar.jsx'
import PlayerList from './components/PlayerList.jsx';
import AddPlayer from './components/AddPlayer.jsx';
import UpdatePlayer from './components/UpdatePlayer.jsx';
import SearchByTeam from './components/SearchByTeam.jsx';
import DeletePlayer from './components/DeletePlayer.jsx';

function App() {
 return (
<BrowserRouter>
<Navbar />
<div className = "container mt-4">
  <Routes>
    <Route path = "/" element = {<PlayerList />} />
    <Route path = "/add" element = {<AddPlayer />} />
    <Route path = "/update" element = {<UpdatePlayer />} />
    <Route path = "/update/:playerId" element = {<UpdatePlayer />} />
    <Route path = "/team" element = {<SearchByTeam />} />
    <Route path = "/delete" element = {<DeletePlayer />} />
  </Routes>
</div>
</BrowserRouter>
 );
}

export default App
