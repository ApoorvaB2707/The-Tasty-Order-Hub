package com.cdac.entity;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "customers")
@Getter
@Setter
@NoArgsConstructor
public class Customer extends UserEntity {

	public Customer(String firstName, String lastName, String email, String mobile) {
		super(firstName, lastName, email, mobile);

	}



	@JsonManagedReference
	@OneToMany(mappedBy = "customer", cascade = CascadeType.ALL, orphanRemoval = true,fetch = FetchType.EAGER)
	private Set<Order> orders;

	@JsonManagedReference
	@OneToMany(mappedBy = "customer", cascade = CascadeType.ALL, orphanRemoval = true)
	private Set<CustomerPlanSubscription> plans = new HashSet<>();
     
	 @JsonManagedReference
	 @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
	 @JoinColumn(name = "address_id")
	 private AddressAll address;
	 
	 
	@Override
	public String toString() {
		return "Customer [getFirstName()=" + getFirstName() + ", getLastName()=" + getLastName() + ", getEmail()="
				+ getEmail() + ", getMobile()=" + getMobile() + ", getId()=" + getId() + "]";
	}
	
	
	
}
