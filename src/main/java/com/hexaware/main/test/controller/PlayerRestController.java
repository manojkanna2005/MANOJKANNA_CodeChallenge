package com.hexaware.main.test.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hexaware.main.test.dto.PlayerDTO;
import com.hexaware.main.test.service.IPlayerService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/players")
public class PlayerRestController {
	@Autowired
	private IPlayerService service;

	@PostMapping("/add")
	public PlayerDTO addPlayer(@Valid @RequestBody PlayerDTO dto) {
		return service.addPlayer(dto);
	}

	@PutMapping("/update")
	public PlayerDTO updatePlayer(@Valid @RequestBody PlayerDTO dto) {
		return service.updatePlayer(dto);
	}

	@GetMapping("/get/{playerId}")
	public PlayerDTO getPlayerById(@PathVariable int playerId) {
		return service.getPlayerById(playerId);
	}

	@GetMapping("/all")
	public List<PlayerDTO> getAllPlayers() {
		return service.getAllPlayers();
	}

	@DeleteMapping("/delete/{playerId}")
	public String deletePlayer(@PathVariable Integer playerId) {
		return service.deletePlayer(playerId);
	}
}
