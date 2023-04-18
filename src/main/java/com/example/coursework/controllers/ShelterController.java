package com.example.coursework.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ShelterController {
    @GetMapping("/shelter")
    public String shelter() {
        return "shelter.html";
    }
}