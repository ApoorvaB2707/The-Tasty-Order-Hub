package com.cdac.entity;
import org.bson.types.Binary;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Document(collection = "images")
@Getter
@Setter
@NoArgsConstructor
public class ImageDocument {

    @Id
    private String id;
    private long customerId;
    private Binary imageData;
    private String contentType;

}
