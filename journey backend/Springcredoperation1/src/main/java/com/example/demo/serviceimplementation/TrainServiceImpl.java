package com.example.demo.serviceimplementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.TrainRepository;
import com.example.demo.model.Train;
import com.example.demo.service.TrainInterface;

@Service
public class TrainServiceImpl implements TrainInterface{

	
	@Autowired
	private TrainRepository trainRepo;
	public Train saveTrain(Train train) {
		return trainRepo.save(train);
	}

	public Train updateTrain(Train train,int id) {
		train.setId(id);
		return trainRepo.save(train); //same save method is used to new student and update student details
	}

	@Override
	public List<Train> findAllTrains() {
		//it returns a list so casting is needed
		return (List<Train>) trainRepo.findAll();
	}
	public Train findById(int id) {
		Train t1=trainRepo.findById(id).get();
		return t1;
	}

	@Override
	public void deleteTrain(int id) {
		// to delete student
		trainRepo.deleteById(id);
	}
    
	@Override
	public List<Train> findByFromstationAndTostationAndDateAndCoach(String fromstation, String tostation, String date, String coach) {
		// TODO Auto-generated method stub
		return trainRepo.findByFromstationAndTostationAndDateAndCoach(fromstation, tostation, date, coach);
	}
	

}
