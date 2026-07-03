package com.hexaware.main.test.dto;

import org.hibernate.validator.constraints.UniqueElements;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PlayerDTO {

	private int playerId;

	@NotBlank
	@Size(min = 3, max = 50)
	private String playerName;

	@NotNull
	@Min(0)
	private int jerseyNumber;

	@NotBlank
	@Pattern(regexp = "Batsman|Bowler|Keeper|All Rounder")
	private String role;

	@Min(0)
	private int totalMatches;

	@NotBlank
	private String teamName;

	@NotBlank
	private String StateName;

	@NotBlank
	private String description;
}
