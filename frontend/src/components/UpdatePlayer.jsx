import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPlayerById, updatePlayer } from "../services/PlayerService.js";

function UpdatePlayer() {
  const { playerId: routePlayerId } = useParams();

  const [playerId, setPlayerId] = useState("");

  const [player, setPlayer] = useState({
    playerId: "",
    playerName: "",
    jerseyNumber: "",
    role: "",
    totalMatches: "",
    teamName: "",
    stateName: "",
    description: ""
  });

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (routePlayerId) {
      getPlayerById(routePlayerId)
        .then((response) => {
          setPlayer(response.data);
          setPlayerId(routePlayerId);
          setShowForm(true);
        })
        .catch((error) => {
          console.log(error);
          alert("Player not found");
          setShowForm(false);
        });
    }
  }, [routePlayerId]);

  const searchPlayer = (e) => {
    e.preventDefault();

    if (playerId === "") {
      alert("Please enter Player ID");
      return;
    }

    getPlayerById(playerId)
      .then((response) => {
        setPlayer(response.data);
        setShowForm(true);
      })
      .catch((error) => {
        console.log(error);
        alert("Player not found");
        setShowForm(false);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPlayer({
      ...player,
      [name]: value
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const playerData = {
      ...player,
      playerId: Number(player.playerId),
      jerseyNumber: Number(player.jerseyNumber),
      totalMatches: Number(player.totalMatches)
    };

    updatePlayer(playerData)
      .then(() => {
        alert("Player updated successfully");
      })
      .catch((error) => {
        console.log(error);
        alert("Error while updating player");
      });
  };

  return (
    <div>
      <h2>Update Player</h2>

      {!routePlayerId && (
        <form onSubmit={searchPlayer}>
          <div className="mb-3">
            <label className="form-label">Enter Player ID</label>
            <input
              type="number"
              className="form-control"
              value={playerId}
              onChange={(e) => setPlayerId(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
      )}

      {showForm && (
        <form onSubmit={handleUpdate} className="mt-4">
          <div className="mb-3">
            <label className="form-label">Player ID</label>
            <input
              type="number"
              name="playerId"
              className="form-control"
              value={player.playerId}
              readOnly
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Player Name</label>
            <input
              type="text"
              name="playerName"
              className="form-control"
              value={player.playerName}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Jersey Number</label>
            <input
              type="number"
              name="jerseyNumber"
              className="form-control"
              value={player.jerseyNumber}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Role</label>
            <select
              name="role"
              className="form-control"
              value={player.role}
              onChange={handleChange}
            >
              <option value="">Select Role</option>
              <option value="Batsman">Batsman</option>
              <option value="Bowler">Bowler</option>
              <option value="Keeper">Keeper</option>
              <option value="All Rounder">All Rounder</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Total Matches</label>
            <input
              type="number"
              name="totalMatches"
              className="form-control"
              value={player.totalMatches}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Team Name</label>
            <input
              type="text"
              name="teamName"
              className="form-control"
              value={player.teamName}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">State Name</label>
            <input
              type="text"
              name="stateName"
              className="form-control"
              value={player.stateName}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              name="description"
              className="form-control"
              value={player.description}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-warning">
            Update Player
          </button>
        </form>
      )}
    </div>
  );
}

export default UpdatePlayer;