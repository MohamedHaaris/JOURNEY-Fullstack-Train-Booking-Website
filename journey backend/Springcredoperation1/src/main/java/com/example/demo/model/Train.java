package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@JsonIgnoreProperties({"hibernateLazyInitializer"})
@Entity
@Table(name="traindetailsnew")
public class Train {
	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@Column(name = "traininfo")
	private String traininfo;
	
	@Column(name = "coach")
	private String coach;
	
	@Column(name = "date")
	private String date;
	
	@Column(name = "fromstation")
	private String fromstation;
	
	@Column(name = "tostation")
	private String tostation;
	
	@Column(name = "fromtime")
	private String fromtime;
	
	@Column(name = "duration")
	private String duration;
	
	@Column(name = "tno")
	private int tno;
	
	@Column(name = "totime")
	private String totime;	
    
	public Train() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Train(int id, String traininfo,  String departure,String destination,String coach,String date,String fromstation,String tostation,String fromtime,String totime,String duration,int tno) {
		super();
		this.id = id;
		this.traininfo = traininfo; 
		this.coach=coach;
		this.date=date;
		this.fromstation=fromstation;
		this.tostation=tostation;
		this.fromtime=fromtime;
		this.totime=totime;
		this.duration=duration;
		this.tno=tno;
	}
	public int getTno() {
		return tno;
	}
	public void setTno(int tno) {
		this.tno = tno;
	}
	public String getDuration() {
		return duration;
	}
	public void setDuration(String duration) {
		this.duration = duration;
	}
	public String getFromtime() {
		return fromtime;
	}
	public void setFromtime(String fromtime) {
		this.fromtime = fromtime;
	}
	public String getTotime() {
		return totime;
	}
	public void setTotime(String totime) {
		this.totime = totime;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTraininfo() {
		return traininfo;
	}
	public void setTraininfo(String traininfo) {
		this.traininfo = traininfo;
	}
	public String getCoach() {
		return coach;
	}
	public void setCoach(String coach) {
		this.coach = coach;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getFromstation() {
		return fromstation;
	}
	public void setFromstation(String fromstation) {
		this.fromstation = fromstation;
	}
	public String getTostation() {
		return tostation;
	}
	public void setTostation(String tostation) {
		this.tostation = tostation;
	}
	
	
	
	
	

}
