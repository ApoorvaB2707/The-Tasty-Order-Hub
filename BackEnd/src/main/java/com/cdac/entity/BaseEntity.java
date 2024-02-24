package com.cdac.entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@MappedSuperclass
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BaseEntity {

	// Common in all Entities
	@Id
	// Auto_Increement Property in MySQL
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;



}
