import { useState } from 'react';

import gitLogo from '../../assets/github.png';

import { api } from '../../services/api';

import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import { ItemRepo } from '../../components/ItemRepo/ItemRepo';

import { Container } from './styles';


export const Home = () => {
  const [currentRepo, setCurrentRepo] = useState('');  // Estado para armazenar texto do input
  const [repos, setRepos] = useState([]);               // Estado para lista de repositórios buscados

  // Busca repositório na API do GitHub pelo nome informado
  const handleSearchRepo = async () => {
    try {
      const { data } = await api.get(`repos/${currentRepo}`);  // Pega dados do repositório na API

      if (data.id) {  // Se repositório existe
        const isExist = repos.find(repo => repo.id === data.id); // Verifica se já está na lista

        if (!isExist) {  // Se não estiver na lista
          setRepos(prev => [...prev, data]); // Adiciona o repositório na lista
          setCurrentRepo('');                 // Limpa o input
          return;                           // Para a função aqui, evita alerta
        }
      }
      alert('Repositório não encontrado'); // Mostra alerta se não existir ou já estiver na lista
    } catch (error) {
      console.error('Erro ao buscar repositório:', error);
      alert('Erro ao buscar repositório. Verifique o console para mais detalhes.');
    }
  };

// Remove repositório da lista pelo id informado
const handleRemoveRepo = (id) => {
  console.log('Removendo registro', id);  
  setRepos(prevRepos => prevRepos.filter(repo => repo.id !== id)); // Atualiza lista excluindo o repo com esse id
};

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="github logo" />
      <Input
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}  // Atualiza o estado conforme digita
      />
      <Button onClick={handleSearchRepo} />              {/* Botão para buscar repositório */}
      {repos.map(repo => (
        <ItemRepo
          key={repo.id}                                    // Key única para cada repositório
          handleRemoveRepo={handleRemoveRepo}              // Passa função para remover repo
          repo={repo}                                      // Dados do repositório
        />
      ))}
    </Container>
  );
}
