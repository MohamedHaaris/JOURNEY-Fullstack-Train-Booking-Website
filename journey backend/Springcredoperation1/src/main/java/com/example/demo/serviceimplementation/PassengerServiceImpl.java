package com.example.demo.serviceimplementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.PassengerRepository;
import com.example.demo.model.Passenger;
import com.example.demo.service.PassengerInterface;


@Service
public class PassengerServiceImpl implements PassengerInterface {

	
	@Autowired
	private PassengerRepository passengerRepo;
	public Passenger savePassenger(Passenger passenger) {
		return passengerRepo.save(passenger);
	}

	public Passenger updatePassenger(Passenger passenger,int id) {
		passenger.setPid(id);
		return passengerRepo.save(passenger); //same save method is used to new student and update student details
	}

	@Override
	public List<Passenger> findAllPassengers() {
		//it returns a list so casting is needed
		return (List<Passenger>) passengerRepo.findAll();
	}
	
	

	@Override
	public void deletePassenger(int id) {
		// to delete student
		passengerRepo.deleteById(id);
	}
	

	
    
//	@Override
//	public List<Train> findByFromstationAndTostationAndDateAndCoach(String fromstation, String tostation, String date, String coach) {
//		// TODO Auto-generated method stub
//		return passengerRepo.findByFromstationAndTostationAndDateAndCoach(fromstation, tostation, date, coach);
//	}
	

}
