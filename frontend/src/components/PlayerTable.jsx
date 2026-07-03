function PlayerTable({ players, onUpdateClick, onDeleteClick }) {
  if (!players || players.length === 0) {
    return <div className="alert alert-warning">No players found.</div>;
  }

  return (
    <div className="table-responsive">
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>Player ID</th>
            <th>Player Name</th>
            <th>Jersey Number</th>
            <th>Role</th>
            <th>Total Matches</th>
            <th>Team Name</th>
            <th>State Name</th>
            <th>Description</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {players.map((player) => (
            <tr key={player.playerId}>
              <td>{player.playerId}</td>
              <td>{player.playerName}</td>
              <td>{player.jerseyNumber}</td>
              <td>{player.role}</td>
              <td>{player.totalMatches}</td>
              <td>{player.teamName}</td>
              <td>{player.stateName}</td>
              <td>{player.description}</td>

              <td>
                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => onUpdateClick(player.playerId)}
                >
                  Update
                </button>
              </td>

              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onDeleteClick(player.playerId)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PlayerTable;