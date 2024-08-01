import axios from 'axios';
import { Project } from '../interfaces/interface'; 

const apiClient = axios.create({
  baseURL: 'https://298dc7b0d9ef4714a086a3c09c305965.api.mockbin.io/',
  headers: {
    'Content-Type': 'application/json',
  },
});

interface ApiResponse {
  imoveis: {
    imovel: Array<{
      id: string;
      Nome: string;
      Valor: string;
      status: number;
    }>;
  };
}

export const fetchProjects = async (): Promise<Project[]> => {
  const response = await apiClient.get<ApiResponse>('/');
  return response.data.imoveis.imovel.map(item => ({
    id: parseInt(item.id, 10),
    title: item.Nome,
    price: parseFloat(item.Valor),
    status: item.status,
  }));
};
