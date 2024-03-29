package com.cdac.dto;

import java.time.LocalDateTime;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@NoArgsConstructor
@Getter
@Setter
public class ApiResponse {
	private LocalDateTime timestamp;
	private String message;
	
	public ApiResponse(String message) {
		this.message = message;
		this.timestamp=LocalDateTime.now();
	}
	
}
