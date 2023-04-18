package com.example.coursework.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AnimalsController {
    @GetMapping("/animals")
    public String animals() {
        return "animals.html";
    }
}
