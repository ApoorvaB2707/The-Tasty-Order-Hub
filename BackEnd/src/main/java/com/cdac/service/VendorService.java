package com.cdac.service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.cdac.dto.*;


public interface VendorService {

	String approveVendor(long id);

	List<VendorDetailsDto> getAllVendors();

	VendorDetailsDto getVendorById(long id);

	String removeVendor(long id);

	String editVendorDetails(EditUserDetailsDto vendorDetailsDto);

	String uploadImage(Long id, MultipartFile imageFile) throws IOException;

	byte[] getImage(Long id) throws IOException;

	String addAddress(AddressDto address, Long id);

	AddressDto getVendorAddress(Long id);

	String updateAddress(AddressDto addressDto, Long id);

	String blockVendor(Long id);
	
	String unblockVendor(Long id);

	List<VendorDetailsDto> getAllBlockedVendors();

	List<VendorDetailsDto> getAllVerifiedVendors();

	List<SubscriptionPlanDto> getAllAvaliablePlansByVId(Long id);
	
	VendorDetailsDto getByEmail(String email);
	
	public List<VendorDetailsDto> getUnAllVerifiedVendors();

	List<SubscriptionPlanDto> getAllPlansByVId(Long id);

	List<SubscriptionPlanDto> getAllDisabledPlansByVId(Long id);

	String addAddressall(AddressDto addressDto, Long id);

	AddressDto getAddress(Long id);
}
