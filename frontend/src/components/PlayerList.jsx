import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllPlayers, deletePlayerById } from "../services/PlayerService.js";
import PlayerTable from "./PlayerTable.jsx";

function PlayerList() {
  const [players, setPlayers] = useState([]);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const loadPlayers = () => {
    getAllPlayers()
      .then((response) => {
        console.log(response.data);
        setPlayers(response.data);
        setMessage("");
      })
      .catch((error) => {
        console.log(error);
        setMessage("Failed to load players");
      });
  };

  useEffect(() => {
    loadPlayers();
  }, []);

  const handleUpdateClick = (playerId) => {
    navigate(`/update/${playerId}`);
  };

  const handleDeleteClick = (playerId) => {
    if (window.confirm("Are you sure you want to delete this player?")) {
      deletePlayerById(playerId)
        .then(() => {
          alert("Player deleted successfully");
          loadPlayers();
        })
        .catch((error) => {
          console.log(error);
          alert("Error while deleting player");
        });
    }
  };

  return (
    <div>
      <h2>Player List</h2>

      {message && <div className="alert alert-danger">{message}</div>}

      <PlayerTable
        players={players}
        onUpdateClick={handleUpdateClick}
        onDeleteClick={handleDeleteClick}
      />
    </div>
  );
}

export default PlayerList;