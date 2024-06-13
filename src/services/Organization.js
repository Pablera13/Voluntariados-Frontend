import api from '../api/config'

export const getTotalOrganization = async () => {
    try {
        const organization = await getOrganization(); 
        const total = organization.length; 
        return total;
    } catch (error) {
        console.error(error);
        return 0; 
    }
};

export const  getOrganization = async () => {
    let data = await api.get('organization').then(result => result.data);
    return data;
}
