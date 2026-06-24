package com.hexaware.main.test.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "Players_table")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Player {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Player_ID")
	private int playerId;
	@Column(name = "Player_Name")
	private String playerName;
	@Column(name = "Jersey_Number")
	private int jerseyNumber;
	@Column(name = "Role")
	private String role;
	@Column(name = "Total_Matches")
	private int totalMatches;
	@Column(name = "Team_Name")
	private String teamName;
	@Column(name = "State_Name")
	private String StateName;
	@Column(name = "Description")
	private String description;
}
