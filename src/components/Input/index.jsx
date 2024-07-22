import { InputContainer } from './styles';

function Input({ value, onChange }) {
    return (
        <InputContainer>
            <input value={value} onChange={onChange} placeholder='user/nome-do-repositório' />
        </InputContainer>
    )
}

export default Input;