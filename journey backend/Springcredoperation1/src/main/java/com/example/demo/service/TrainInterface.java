package com.example.demo.service;

import java.util.List;

import com.example.demo.model.Train;

public interface TrainInterface {
	//to save new student
	public Train saveTrain(Train train);
	
	//to update student
	
	public Train updateTrain(Train train,int id);
	
	// to fetch all students from database
	
	public List<Train> findAllTrains();
	
	
	//to delete student
	
	public void deleteTrain(int id);
	
	

	public List<Train> findByFromstationAndTostationAndDateAndCoach(String fromstation, String tostation, String date, String coach);
	

}
