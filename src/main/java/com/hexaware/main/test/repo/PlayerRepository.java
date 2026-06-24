package com.hexaware.main.test.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hexaware.main.test.entity.Player;

public interface PlayerRepository extends JpaRepository<Player,Integer>{

}
