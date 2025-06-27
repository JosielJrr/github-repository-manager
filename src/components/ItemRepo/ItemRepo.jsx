import { ItemContainer } from './styles';

export const ItemRepo = ({ repo, handleRemoveRepo }) => {

    // Função chamada ao clicar no botão para remover o repositório
    const handleRemove = () => {
        handleRemoveRepo(repo.id);  // Chama a função do pai passando o id do repo
    }

    return (
        <ItemContainer>
            <h3>{repo.name}</h3> {/* Nome do repositório */}
            <p>{repo.full_name}</p> {/* Nome completo do repo */}
            <p className='description'>{repo.description}</p> {/* Descrição do repositório */}
            <a href={repo.html_url} rel="noreferrer" target="_blank">Ver repositório</a><br /> {/* Link para o repo no GitHub */}
            <button className="remover" onClick={handleRemove}>Remover</button> {/* Botão remover repositório */}
        </ItemContainer>
    )
}
