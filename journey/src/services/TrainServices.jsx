import axios from "../api/axios";

class TrainServices {
  getTrain(search) {
    const from = search.from;
    const to = search.to;
    const date = search.date;
    const travelclass = search.class;
    return axios.get(
      `/gettrainwithfromto/${from}/${to}/${date}/${travelclass}`
    );
  }
  bookTrain(passengerData) {
    return axios.post("/savepassenger", passengerData);
  }
  signupTrain(signupData){
    return axios.post("/signup",signupData);
  }

  getPassenger(passengers) {
    return axios.get("/getpassenger", passengers);
  }

    deletePassenger(id) {
      return axios.delete(`http://localhost:8080/deletepassenger/${id}`);
    }

    getUpdateTrain(update){
    return axios.put('/updatetrain/${id}',update);
    }
    getLogin(login){
      return axios.get(`/login`,{params:{username:login.username,password:login.password}})
    } 
    postLogin
  
}
export default new TrainServices();
