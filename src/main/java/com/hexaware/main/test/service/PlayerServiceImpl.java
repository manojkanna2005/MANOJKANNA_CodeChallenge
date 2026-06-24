package com.hexaware.main.test.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hexaware.main.test.dto.PlayerDTO;
import com.hexaware.main.test.entity.Player;
import com.hexaware.main.test.exception.ResorceNotFoundException;
import com.hexaware.main.test.exception.TeamNotFoundException;
import com.hexaware.main.test.repo.PlayerRepository;

@Service
public class PlayerServiceImpl implements IPlayerService{

	@Autowired
	private PlayerRepository repo;

	@Override
	public PlayerDTO addPlayer(PlayerDTO dto) {
		Player player = convertToEntity(dto);
		return convertToDTO(repo.save(player));
	}

	@Override
	public PlayerDTO updatePlayer(PlayerDTO dto) {
		Player play = repo.findById(dto.getPlayerId()).orElseThrow(()->new ResorceNotFoundException("Player not found"));
		play.setPlayerName(dto.getPlayerName());
		play.setJerseyNumber(dto.getJerseyNumber());
		play.setRole(dto.getRole());
		play.setTotalMatches(dto.getTotalMatches());
		play.setTeamName(dto.getTeamName());
		play.setStateName(dto.getStateName());
		play.setDescription(dto.getDescription());
		return convertToDTO(repo.save(play));
	}

	@Override
	public PlayerDTO getPlayerById(int playerId) {
		Player play = repo.findById(playerId).orElseThrow(()->new ResorceNotFoundException("Player not found"));
		return convertToDTO(play);
	}
	@Override
	public List<PlayerDTO> getPlayerByTeamName(String teamName) {
		List<Player> play = repo.findByTeamName(teamName);
		if(play.isEmpty()) {
			throw new TeamNotFoundException("No Player found in : "+teamName);
		}
		return play.stream().map(this::convertToDTO).collect(Collectors.toList());
	}
	
	@Override
	public List<PlayerDTO> getAllPlayers() {
		return repo.findAll().stream().map(this::convertToDTO).collect(Collectors.toList());
	}

	@Override
	public String deletePlayer(Integer playerId) {
		Player play = repo.findById(playerId).orElseThrow(()->new ResorceNotFoundException("Player not found"));
		repo.delete(play);
		return "the player is deleted";
	}
	
	private PlayerDTO convertToDTO(Player player) {
		PlayerDTO dto = new PlayerDTO();
		dto.setPlayerId(player.getPlayerId());
		dto.setPlayerName(player.getPlayerName());
		dto.setJerseyNumber(player.getJerseyNumber());
		dto.setRole(player.getRole());
		dto.setTotalMatches(player.getTotalMatches());
		dto.setTeamName(player.getTeamName());
		dto.setStateName(player.getStateName());
		dto.setDescription(player.getDescription());
		return dto;
	}
	private Player convertToEntity(PlayerDTO dto) {
		Player play = new Player();
		play.setPlayerId(dto.getPlayerId());
		play.setPlayerName(dto.getPlayerName());
		play.setJerseyNumber(dto.getJerseyNumber());
		play.setRole(dto.getRole());
		play.setTotalMatches(dto.getTotalMatches());
		play.setTeamName(dto.getTeamName());
		play.setStateName(dto.getStateName());
		play.setDescription(dto.getDescription());
		return play;
	}

	
}
