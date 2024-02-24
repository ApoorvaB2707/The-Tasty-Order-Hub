package com.cdac.dto;

import java.util.HashSet;

import com.cdac.entity.Address;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CustDetailsDto {

	private Long id;
	
	private String firstName;

	private String lastName;

	private String email;

	private String mobile;
	
	private HashSet<Address> deliveryAddress;
}
