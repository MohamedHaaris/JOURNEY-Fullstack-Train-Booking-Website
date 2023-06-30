package com.example.demo.service;

import java.util.List;

import com.example.demo.model.Passenger;


public interface PassengerInterface {
	//to save new student
	public Passenger savePassenger(Passenger passenger);
	
	//to update student
	
	public Passenger updatePassenger(Passenger passenger,int id);
	
	// to fetch all students from database
	
	public List<Passenger> findAllPassengers();
	
	
	//to delete student
	
	public void deletePassenger(int id);

	
	
	
	

//	public List<Passenger> findByFromstationAndTostationAndDateAndCoach(String fromstation, String tostation, String date, String coach);
	

}
