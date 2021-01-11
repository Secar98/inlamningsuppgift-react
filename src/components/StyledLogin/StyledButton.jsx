import styled from 'styled-components'

const StyledButton = styled.button`
    outline: none;
    border: 2px solid #006400;
    border-radius: 5px;
    font-size: 1.2em;
    padding: 2px;
    margin-top: 25px;

    &:hover {
        transition: 0.3s;
        background-color: #66a266;
    }
`

export {StyledButton}