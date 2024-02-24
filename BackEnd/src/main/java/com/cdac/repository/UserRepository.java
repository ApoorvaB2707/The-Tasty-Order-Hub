package com.cdac.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.entity.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Long> {

}
