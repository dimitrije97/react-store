import axios from 'axios'

class WarehouseService{
    static getItems = () => {
        return axios.get("https://raw.githubusercontent.com/dimitrije97/react-store/main/recepti.json");
    }
}

export default WarehouseService;