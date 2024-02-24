package com.cdac.dto;

import com.cdac.enums.FoodType;
import com.cdac.enums.WeekDayAndTime;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class TiffinDto {

	private Long id;
	
	private String name;
	 
	private double price;
	
	private String description;
	
	private FoodType foodType;
	
	private WeekDayAndTime day;
}
