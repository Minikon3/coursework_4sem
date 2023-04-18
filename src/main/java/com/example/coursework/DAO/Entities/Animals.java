package com.example.coursework.DAO.Entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "animals")
@Getter
@Setter
public class Animals {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(name = "description")
    String category;
    @Column(name = "name")
    String name;
}

