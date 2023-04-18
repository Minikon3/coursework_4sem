package com.example.coursework.DAO.repositories;

import com.example.coursework.DAO.Entities.Animals;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnimalsRepository extends JpaRepository<Animals, Long> {
        List<Animals> getAllByCategory(String category);
        Animals getByName(String name);
}
