import axios from 'axios';
export async function retrieveCategories() {

    try {
        const res = await axios.get("http://localhost:5001/foodcuisinecategory/")
        // console.log(res.data)
        return res.data;
    } catch (error) {
        
    }
}