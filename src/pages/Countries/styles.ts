import styled from "styled-components";


export const CountriesArea = styled.main`
    background-color:#E9F6F6;
    min-height: calc(100vh) - 90px;


    .countries {
        display:grid;
        width:1024px;
        margin auto;
        grid-template-columns: repeat(4,1fr);
        grid-gap: 30px;
    }

`