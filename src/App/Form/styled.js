import styled from "styled-components";

export const LabelText = styled.span`
    width: 100%;
    max-width: 220px;
    font-weight: 300;
    text-align: left;
    display: inline-block;
    margin: auto;

`;

export const Field = styled.input`
    width: 100%;
    max-width: 375px;
    padding: 10px;
    color: #222;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    border: 1px solid ${({ theme }) => theme.color.silver};
`;

export const Button = styled.button`
    width: 100%;
    border: none;
    padding: 15px 35px;
    border-radius: 0;
    background-color: ${({ theme }) => theme.color.teal};
    color: ${({ theme }) => theme.color.white};
    cursor: pointer;
    margin-top: 15px;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }
`;

export const Header = styled.h1`
    color: ${({ theme }) => theme.color.teal};
    text-align: center;
`;

export const Info = styled.p`
    font-size: 14px;
    text-align: center;
    color: ${({ theme }) => theme.color.emperor};
`;

export const Loading = styled.p`
color: ${({ theme }) => theme.color.teal};
`;

export const Failure = styled.p`
color: ${({ theme }) => theme.color.red};
`;