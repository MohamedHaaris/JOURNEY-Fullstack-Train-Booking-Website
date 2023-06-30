package com.example.demo.dao;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Passenger;



public interface PassengerRepository extends JpaRepository<Passenger,Integer>{
	
//	List<Passenger> findByFromstationAndTostationAndDateAndCoach(
//            String fromstation, String tostation, String date,String coach);

}



