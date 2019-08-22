import axios from "axios";

export default {
  getPoses: function(){
    return axios.get("/api/poses")
  },
  loginUser: function(id){
    return axios.get("/api/users/" + id)
  },
  getClassPoses: function(userId, classId){
    return axios.get(`/api/users/${userId}/${classId}`)
  }
}