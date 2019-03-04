package com.transx.vibes.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="document")
@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
public class Document{

    @Id
	@GeneratedValue
	@Column(name="id")
	private Long id;

    @Column(name="title")
    private String title;

    @Column(name="description")
    private String description;

}