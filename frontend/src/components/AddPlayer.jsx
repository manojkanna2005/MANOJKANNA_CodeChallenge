import { useState } from "react";
import { addPlayer } from "../services/PlayerService.js";

function AddPlayer() {
  const [player, setPlayer] = useState({
    playerName: "",
    jerseyNumber: "",
    role: "",
    totalMatches: "",
    teamName: "",
    stateName: "",
    description: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPlayer({
      ...player,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const playerData = {
      ...player,
      jerseyNumber: Number(player.jerseyNumber),
      totalMatches: Number(player.totalMatches)
    };

    addPlayer(playerData)
      .then(() => {
        alert("Player added successfully");

        setPlayer({
          playerName: "",
          jerseyNumber: "",
          role: "",
          totalMatches: "",
          teamName: "",
          stateName: "",
          description: ""
        });
      })
      .catch((error) => {
        console.log(error);
        alert("Error while adding player");
      });
  };

  return (
    <div>
      <h2>Add Player</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="playerName" className="form-label">
            Player Name
          </label>
          <input
            type="text"
            className="form-control"
            id="playerName"
            name="playerName"
            value={player.playerName}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="jerseyNumber" className="form-label">
            Jersey Number
          </label>
          <input
            type="number"
            className="form-control"
            id="jerseyNumber"
            name="jerseyNumber"
            value={player.jerseyNumber}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="role" className="form-label">
            Role
          </label>
          <select
            className="form-control"
            id="role"
            name="role"
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
          <label htmlFor="totalMatches" className="form-label">
            Total Matches
          </label>
          <input
            type="number"
            className="form-control"
            id="totalMatches"
            name="totalMatches"
            value={player.totalMatches}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="teamName" className="form-label">
            Team Name
          </label>
          <input
            type="text"
            className="form-control"
            id="teamName"
            name="teamName"
            value={player.teamName}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="stateName" className="form-label">
            State Name
          </label>
          <input
            type="text"
            className="form-control"
            id="stateName"
            name="stateName"
            value={player.stateName}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={player.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Add Player
        </button>
      </form>
    </div>
  );
}

export default AddPlayer;