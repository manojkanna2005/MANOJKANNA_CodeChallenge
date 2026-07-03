import {useState} from 'react';
import {deletePlayerById} from '../services/PlayerService.js';

function DeletePlayer() {
const [playerId, setPlayerId] = useState("");
const handleDelete = (e) => {
    e.preventDefault();
    if(playerId === '') {
        alert('Please enter a player ID');
        return;
    }
    if(window.confirm(`Are you sure you want to delete player with ID ${playerId}?`)) {
        deletePlayer(playerId).then(() => {
            alert('Player deleted successfully');
            setPlayerId("");
        }).catch((error) => {
            console.log(error);
            alert('Error while deleting player');
        });
    }
}
return (
    <div>
        <h2>Delete Player</h2>

        <form onSubmit={handleDelete}>
            <div className="mb-3">
                <label className="form-label">Player ID</label>
                <input type="text" className="form-control" value={playerId} onChange={(e) => setPlayerId(e.target.value)} placeholder="Enter player ID" />
            </div>
            <button type="submit" className="btn btn-danger">Delete Player</button>
        </form>
    </div>
)
}
export default DeletePlayer;