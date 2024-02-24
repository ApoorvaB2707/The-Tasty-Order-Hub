package com.cdac.service;

import com.cdac.dto.ChangePasswordDto;
import com.cdac.dto.UserDTO;
import com.cdac.entity.Login;
import com.cdac.entity.UserEntity;

public interface LoginService {
	
	Login findByEmail(String email);

	void removeLogin(Login loginDetails);

	UserEntity addLogin(UserDTO user);

	String changePassword(ChangePasswordDto changePasswordDto);
	
	String sendOTP(String email);
	
	boolean validateOTP(String email,int otp);

	String forgotPassword(String email);

	String changeForgottenPassword(ChangePasswordDto changePasswordDto);

	String validateEmail(String email);

	
}
