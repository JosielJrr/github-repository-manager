import styled from 'styled-components';

export const ItemContainer = styled.div`

    width: 80%;
    margin-top: 20px;

    h3 {
        font-size: 32px;
        color: #FAFAFA;
    }

    p {
        font-size: 16px;
        color: #FAFAFA60;
        margin-bottom: 20px
    }

    a {
        text-decoration: none;
        color: #FFF;
        margin: 20px 0;

        &:hover {
            color: #ADD8E6;
            text-decoration: underline;
        }
    }

    a.remover {
        &:hover {
            color: #FF0000;
            text-decoration: underline;
        }
    }

    hr {
        color: #FAFAFA60;
        margin-top: 20px;
    }
`