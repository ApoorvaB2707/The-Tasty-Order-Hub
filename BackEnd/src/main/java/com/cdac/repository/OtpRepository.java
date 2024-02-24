package com.cdac.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.entity.OTP;

public interface OtpRepository extends JpaRepository<OTP, Integer> {

	OTP findByEmailAndOtp(String email, int otp);
}
