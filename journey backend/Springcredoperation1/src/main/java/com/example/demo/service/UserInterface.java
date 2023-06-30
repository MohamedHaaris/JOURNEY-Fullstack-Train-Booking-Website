package com.example.demo.service;

import com.example.demo.model.User;

public interface UserInterface {

	public User saveUser(User user);
	
	public String deleteUser(int id);
	
	public String login(String username,String password);
	
	public boolean isUserExist(String username);

	public boolean isUserIdExist(int id);
}
