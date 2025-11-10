package com.shopapp.controller;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class LoginController {

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody Map<String, String> body) {
        String username = body.get("username");
        String password = body.get("password");

        Map<String, Object> response = new HashMap<>();
        if ("user".equals(username) && "password".equals(password)) {
            response.put("status", "success");
            response.put("token", "dummy-jwt-token");
        } else {
            response.put("status", "fail");
            response.put("message", "Invalid credentials");
        }
        return response;
    }
}
