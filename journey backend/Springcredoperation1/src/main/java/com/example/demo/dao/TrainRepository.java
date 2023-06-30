package com.example.demo.dao;
import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Train;


public interface TrainRepository extends JpaRepository<Train,Integer>{
	
	List<Train> findByFromstationAndTostationAndDateAndCoach(
            String fromstation, String tostation, String date,String coach);

}


