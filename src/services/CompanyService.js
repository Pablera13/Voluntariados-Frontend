import api from '../api/config'

export const  getCompanies = async () => {
    let data = await api.get('organization').then(result => result.data);
    return data;
}

export const createCompany = async (company) => {
    let data = await api.post('organization', company).then(result => result.data);
    return data;
}

export const deleteCompany  = async (id) => {
    let data = await api.delete(`organization/${id}`).then(result => result.data);
    return data;
}

export const  getCompanyById = async (organizationId) => {
    let data = await api.get(`organization/${organizationId}`).then(result => result.data);
    return data;
}

