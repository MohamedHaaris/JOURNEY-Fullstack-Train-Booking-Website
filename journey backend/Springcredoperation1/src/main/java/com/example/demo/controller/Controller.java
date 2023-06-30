package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Train;
import com.example.demo.serviceimplementation.TrainServiceImpl;

@RestController
//we are using postman to do operations for that we need to add cross origin annotation
@CrossOrigin("*")
public class Controller {

	//to create bean of implementation class
	@Autowired
	private TrainServiceImpl trainServiceImpl;
	
	
	//to call save method or to save new student
	@PostMapping(value="savetrain")
	public Train saveTrain(@RequestBody Train train) {
		System.out.println("Your ticket is placed successfully");
		trainServiceImpl.saveTrain(train);
		return train;
	}
	@GetMapping(value="gettrain")
	public List<Train> findAllTrain()
	{
		return trainServiceImpl.findAllTrains();
	}
	@GetMapping(value="gettrain/{id}")
	public Train findById(@PathVariable int id)
	{
		return trainServiceImpl.findById(id);
	}
	
	
	//update student
	@PutMapping("updatetrain/{id}")
	public Train updateTrain(@PathVariable int id,@RequestBody Train train)
	{
		return trainServiceImpl.updateTrain(train,id);
	}
	
	@DeleteMapping("deletetrain")
	public String deleteTrain(@RequestParam int id)
	{
		trainServiceImpl.deleteTrain(id);
		return "Your ticket is cancelled                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   et is cancelled successfully";
	}
	
	@GetMapping("/gettrainwithfromto/{fromstation}/{tostation}/{date}/{coach}")
	public List<Train> findByFromstationAndTostationAndDateAndCoach(@PathVariable String fromstation,@PathVariable String tostation,@PathVariable String date,@PathVariable String coach){
		return trainServiceImpl.findByFromstationAndTostationAndDateAndCoach(fromstation, tostation, date, coach);
	}
	
}
