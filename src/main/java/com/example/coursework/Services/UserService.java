package com.example.coursework.Services;


import com.example.coursework.DAO.Entities.User;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends UserDetailsService {
    User getByLogin(String login);
}

