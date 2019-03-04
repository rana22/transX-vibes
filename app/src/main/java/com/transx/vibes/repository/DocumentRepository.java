package com.transx.vibes.repository;


import com.transx.vibes.models.Document;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author ambarrana
 *
 */
public interface DocumentRepository extends JpaRepository<Document ,Long>{
    List<Document> findAll();
}