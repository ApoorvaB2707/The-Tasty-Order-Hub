package com.cdac.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.entity.Login;

public interface LoginRepository extends JpaRepository<Login, Long> {

	Optional<Login> findByEmail(String email);

}
