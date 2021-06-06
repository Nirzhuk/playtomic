import React from 'react'
import styled from "styled-components";
import Paragraph from './Paragraph';
import sizeHelpers from '../../core/utils/styled/sizeHelpers';

export interface InputProps {
    name: string | null;
    legend: string | null;
    type?: string;
    placeholder?: string;
    size?: string;
    onChange: Function;
    value: any;
}


export const StyledInput = styled.input`
display: block;
    font-family: monospace;
    box-shadow: none;
    color: #000;
    background-color: transparent;
    border: 1px solid #d8d8d8;
    border-radius: 5px;
    width: ${({ size }) => size ? sizeHelpers[size] : '33%'};
    outline: 0px;
    padding: 10px 5px;
    margin-bottom: 5px;
`
const StyledInputContainer = styled.div`
 width:-webkit-fill-available
`
const StyledLegend = styled(Paragraph)`
    font-size: 90%;
    font-weight: 600;
`

const Input = ({ legend, size = "l", type = "input", ...props }: InputProps) => (
    <StyledInputContainer>
        {legend && <StyledLegend as="label">{legend}</StyledLegend>}
        <StyledInput size={size} type={type} {...props as any} />
    </StyledInputContainer>
);

export default Input
