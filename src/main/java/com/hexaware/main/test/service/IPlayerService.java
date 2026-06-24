package com.hexaware.main.test.service;

import java.util.List;

import com.hexaware.main.test.dto.PlayerDTO;

public interface IPlayerService {

	PlayerDTO addPlayer(PlayerDTO dto);
	PlayerDTO updatePlayer(PlayerDTO dto);
	PlayerDTO getPlayerById(int playerId);
	List<PlayerDTO> getAllPlayers();
	String deletePlayer(Integer playerId);
}
