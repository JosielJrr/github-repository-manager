import styled from 'styled-components';

export const ItemContainer = styled.div`
    width: 80%;
    margin-top: 40px;
    padding: 16px 24px;
    background-color: #2D333B; 
    border-radius: 22px;            
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);

    h3 {
        font-size: 28px;
        color: #FAFAFA;
        margin-bottom: 8px;
        font-weight: 600;
    }

    p {
        font-size: 15px;
        color: #CCC;
        margin-bottom: 12px;
        line-height: 1.4;
    }

    p.description {
        color: #EEE;
    }

    a {
        text-decoration: none;
        color: #61dafb;              
        font-size: 14px;
        margin-right: 20px;
        transition: color 0.3s;

        &:hover {
        color: #FFF;
        }
    }

    button.remover {
        background-color: transparent;
        border: 1.5px solid #FA5555;  
        color: #FA5555;
        font-size: 14px;
        padding: 6px 16px;
        border-radius: 22px;
        cursor: pointer;
        transition: all 0.3s ease;

        margin-top: 5px;

        &:hover {
        background-color: #FA5555;
        color: #FFF;
        box-shadow: 0 0 8px #FA5555;
        text-decoration: none;
        }
    }
`;
