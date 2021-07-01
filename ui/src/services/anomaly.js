import apiService from "./api";
import { message } from "antd"

class AnomalyService {

    async getAnomalys(){
        const response = await apiService.get("anomaly/anomalyDefs")
        return response
    }
    async addAnomaly(payload){
        const response = await apiService.post("anomaly/addAnomalyDef" , payload)
        return response
    }
    async deleteAnomaly(id){
        const response = await apiService.delete("anomaly/anomalyDef/" + id)
        return response
    }



}
let anomalyService = new AnomalyService();
export default anomalyService;