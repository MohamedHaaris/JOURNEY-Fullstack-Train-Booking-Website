package com.example.demo.model;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.MapsId;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
@Entity
@Table(name = "passengerdetailsnew")
public class Passenger {
 @Id
 @GeneratedValue(strategy=GenerationType.IDENTITY)
 private int pid;
 
@Column
 private String email;
 
@Column
 private long mobile;
 
@Column
 private String passname;
 
@Column
 private String gender;
 
@Column
 private Integer age;
 
@Column
 private String berth;
//
//@Column
//private String train_id;
 
//@OneToOne(fetch = FetchType.LAZY)
// @MapsId
// @JoinColumn(name = "train_id")
// private Train train;
 
// Getters and setters for all attributes, including the train
 public Passenger() {
 super();
 }
 public Passenger(int pid,String email,long mobile,String passname,String gender,int age,String berth) {
 super();
 
 this.pid=pid;
 this.email=email;
 this.mobile=mobile;
 this.passname=passname;
 this.gender=gender;
 this.age=age;
 this.berth=berth;
 
 }
public int getPid() {
	return pid;
}
public void setPid(int pid) {
	this.pid = pid;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public long getMobile() {
	return mobile;
}
public void setMobile(long mobile) {
	this.mobile = mobile;
}
public String getPassname() {
	return passname;
}
public void setPassname(String passname) {
	this.passname = passname;
}
public String getGender() {
	return gender;
}
public void setGender(String gender) {
	this.gender = gender;
}
public Integer getAge() {
	return age;
}
public void setAge(Integer age) {
	this.age = age;
}
public String getBerth() {
	return berth;
}
public void setBerth(String berth) {
	this.berth = berth;
}
 
}


