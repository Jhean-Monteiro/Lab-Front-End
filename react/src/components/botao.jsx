import styled from 'styled-components';

const Botao = styled.button`
    background-color: #007bff;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #1120ed;
    }

    &:active {
        transform: scale(0.95);
    }
`

export default Botao