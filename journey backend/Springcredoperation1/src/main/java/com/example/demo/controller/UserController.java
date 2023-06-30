package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.serviceimplementation.UserServiceImpl;


@RestController
@CrossOrigin("*")
public class UserController {
	
	@Autowired
	private UserServiceImpl userservice;
	
	@GetMapping("/login")
	public String login(@RequestParam String username, @RequestParam String password) {
		return userservice.login(username, password);
	}
	
	@PostMapping("/signup")
	public User signup(@RequestBody User user) {
		userservice.saveUser(user);
		return user;
	}
	
	@DeleteMapping("/deleteuser/{id}")
	public String deleteUser(@PathVariable int id) {
		if(userservice.isUserIdExist(id)) {
			userservice.deleteUser(id);
			return "Successful";
		}
		else {
			return "Failed to delete";
		}
	}
}
