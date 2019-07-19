package com.transx.vibes.controller;

import java.util.ArrayList;
import java.util.List;

import com.transx.vibes.models.Document;
import com.transx.vibes.repository.DocumentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/document")
public class DocumentController{

	DocumentRepository docRepo;

	@Autowired
	DocumentController(DocumentRepository docRepo){
		this.docRepo = docRepo;
	}

    @GetMapping
	public ResponseEntity<List<Document>> getUserDocument(){
		
		log.info("Requesting all the document for the user {} ", "2");
		List<Document> userDocuments = new ArrayList<Document>();
		userDocuments.addAll(docRepo.findAll());
		return ResponseEntity.ok(userDocuments);
	}

	@PostMapping
	public ResponseEntity<Document> postDocument(@RequestBody Document document){
		log.info("inserting document info");
		try{
			docRepo.save(document);
		}catch(Exception e){
			log.error("error while inserting data {}", e.getMessage());
		}

		return ResponseEntity.ok(document);
	}

}