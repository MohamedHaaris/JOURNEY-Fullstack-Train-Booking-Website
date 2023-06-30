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
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Passenger;
import com.example.demo.serviceimplementation.PassengerServiceImpl;

@RestController
//we are using postman to do operations for that we need to add cross origin annotation
@CrossOrigin("*")
public class PassengerController {

	//to create bean of implementation class
	@Autowired
	private PassengerServiceImpl passengerServiceImpl;
	
	
	
	
	//to call save method or to save new student
	@PostMapping(value="savepassenger")
	public Passenger savePassenger(@RequestBody Passenger passenger) {
		System.out.println("Your ticket is placed successfully");
		passengerServiceImpl.savePassenger(passenger);
		return passenger;
	}
	@GetMapping(value="getpassenger")
	public List<Passenger> findAllPassenger()
	{
		return passengerServiceImpl.findAllPassengers();
	}
	
	//update student
	@PutMapping("updatepassenger/{id}")
	public Passenger updatePassenger(@PathVariable int id,@RequestBody Passenger passenger)
	{
		return passengerServiceImpl.updatePassenger(passenger,id);
	}
	
	
	@DeleteMapping("deletepassenger/{id}")
	public String deletePassenger(@PathVariable int id)
	{
		passengerServiceImpl.deletePassenger(id);
		return "Your ticket is cancelled                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   et is cancelled successfully";
	}
	
//	@GetMapping("/gettrainwithfromto/{fromstation}/{tostation}/{date}/{coach}")
//	public List<Train> findByFromstationAndTostationAndDateAndCoach(@PathVariable String fromstation,@PathVariable String tostation,@PathVariable String date,@PathVariable String coach){
//		return passengerServiceImpl.findByFromstationAndTostationAndDateAndCoach(fromstation, tostation, date, coach);
//	}
//	
}
