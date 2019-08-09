import axios from "axios";

export default {
  getPoses: function(){
    return axios.get("/api/poses")
  }
}