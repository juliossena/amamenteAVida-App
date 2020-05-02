import styled from 'styled-components';

export const ContainerRadio = styled.View`
    height: 20px;
    width: 20px;
    border-radius: 10px;
    border: 2px solid ${(props) => props.color};
    padding: 3px;
    margin-right: 8px;
`;

export const InternContainer = styled.View`
    height: 10px;
    width: 10px;
    border-radius: 5px;
    background-color: ${(props) => props.color};
`;
