package com.cdac.dto;

import com.cdac.enums.FoodType;
import com.cdac.enums.WeekDayAndTime;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TiffinDetailDto {
	
	private String Name;

	private double price;
	
	private String description;
	
	private FoodType foodType;
	
	private WeekDayAndTime day;
	
	private String ImagePath;

}
