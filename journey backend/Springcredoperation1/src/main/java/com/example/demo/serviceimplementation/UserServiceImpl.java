package com.example.demo.serviceimplementation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.UserRepository;
import com.example.demo.model.User;
import com.example.demo.service.UserInterface;


@Service
public class UserServiceImpl implements UserInterface{
	
	@Autowired
	private UserRepository userRepo;
	
	@Override
	public User saveUser(User user) {
		userRepo.save(user);
		return user;
	}
	
	@Override
	public boolean isUserExist(String username) {
		return userRepo.existsByUsername(username);
	}
	@Override
	public boolean isUserIdExist(int id) {
		return userRepo.existsById(id);
	}
	@Override
	public String deleteUser(int id) {
		userRepo.deleteById(id);
		return "Successful";
	}
	
	@Override
	public String login(String username, String password) {
		if(userRepo.existsByUsername(username)) {
			User user = userRepo.findByUsername(username);
			if(user.getPassword().equals(password)) {
				return "Login Successful";
			}
			return "Password is Invalid";
		}
		return "Username is Invalid";
	}
}
