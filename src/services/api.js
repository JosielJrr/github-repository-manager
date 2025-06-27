import axios from 'axios';

// Cria uma instância do axios para facilitar requisições à API do GitHub, já com a URL base definida
export const api = axios.create({
    baseURL: 'https://api.github.com'
});
