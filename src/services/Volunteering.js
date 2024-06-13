import api from '../api/config'

export const getTotalVolunteerings = async () => {
    try {
        const volunteering = await getVolunteerings(); 
        const total = volunteering.length; 
        return total;
    } catch (error) {
        console.error(error);
        return 0; 
    }
};

export const  getVolunteerings = async () => {
    let data = await api.get('volunteering').then(result => result.data);
    return data;
}

export const getVolunteeringById = async (id) => {
    let data = await api.get(`volunteering/${id}`).then(result => result.data);
    return data;
}

export const deleteVolunteering  = async (id) => {
    let data = await api.delete(`volunteering/${id}`).then(result => result.data);
    return data;
}