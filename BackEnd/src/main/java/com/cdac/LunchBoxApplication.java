package com.cdac;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class LunchBoxApplication {

	public static void main(String[] args) {
		SpringApplication.run(LunchBoxApplication.class, args);
	}
	@Bean 
	public ModelMapper configureMapper() {
		ModelMapper modelMapper = new ModelMapper();
		modelMapper.getConfiguration()
		.setMatchingStrategy(MatchingStrategies.STRICT);
		return modelMapper;
	}

}
