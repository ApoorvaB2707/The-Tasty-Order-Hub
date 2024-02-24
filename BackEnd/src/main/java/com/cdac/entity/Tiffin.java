package com.cdac.entity;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.ManyToOne;

import com.cdac.enums.FoodType;
import com.cdac.enums.WeekDayAndTime;
import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Tiffin extends BaseEntity{

	private String name;
	 
	private double price;
	
	private String description;
	
	@Enumerated(EnumType.STRING)
	private FoodType foodType;
	
	@Enumerated(EnumType.STRING)
	private WeekDayAndTime day;
	
	private String imagePath;
	
	@ManyToOne
	@JsonBackReference
	private SubscriptionPlan subscriptionPlan;
	
	
}
