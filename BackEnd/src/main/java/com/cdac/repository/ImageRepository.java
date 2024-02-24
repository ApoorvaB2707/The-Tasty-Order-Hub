package com.cdac.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.cdac.entity.ImageDocument;

@Repository
public interface ImageRepository extends MongoRepository<ImageDocument, String> {
	
}

