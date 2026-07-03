import {useState} from 'react';
import {getPlayerByTeam} from '../services/PlayerService.js';
import PlayerTable from './PlayerTable.jsx';

function SearchByTeam() {
    const [teamName, setTeamName] = useState('');
    const [players, setPlayers] = useState([]);
    const [searched, setSearched] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();
        if(teamName === '') {
            alert('Please enter a team name');
            return;
        }
        getPlayerByTeam(teamName).then((response) => {
            setPlayers(response.data);
            setSearched(true);
        }).catch((error) => {
            console.log(error);
            alert('Error while searching players');
            setPlayers([]);
            setSearched(true);
        });
    }

    return (
        <div>
            <h2>Search By Team Name</h2>
            <form onSubmit={handleSearch}>
                <div className="mb-3">
                    <label className="form-label">Team Name</label>
                    <input type="text" className="form-control" value={teamName} onChange={(e) => setTeamName(e.target.value)} placeholder="Enter team name" />
                </div>
                <button type="submit" className="btn btn-primary">Search</button>
            </form>
            <div className = "mt-4">
                {searched && <PlayerTable players={players} />}
            </div>
        </div>
    );
}

export default SearchByTeam;