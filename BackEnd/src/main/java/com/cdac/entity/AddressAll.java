package com.cdac.entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "address")
@Getter
@Setter
@NoArgsConstructor

public class AddressAll{
	
	@Id 
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "address_id")
	private long AddressId;
	
	@Column(length = 100)
	private String address;
	
	@Column(length = 100)
	private String street;
	
	@Column(length = 20)
	private String city;
	
	@Column(length = 6)
	private int pincode;
	
	
	@Column(length = 20)
	private String state;
	

}
