import api from '../api/config'

export const  getCompanies = async () => {
    let data = await api.get('organization').then(result => result.data);
    return data;
}

export const createCompany = async (company) => {
    let data = await api.post('organization', company).then(result => result.data);
    return data;
}