import styled from 'styled-components';

export const BtnRating = styled.button` 
    position: absolute;;
    top:80px;
    right:10px;
    background-color: #4CAF50;
    border: none;
    font-size: 16px;
    color: #FFFFFF;
    padding: 6px;
    width: 60px;
    text-align: center;
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;
    border: 1px solid green;

     &:after {
    content: "";
    background: #f1f1f1;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px !important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s
    }

    &:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s
    }

`;

export const BtnPrice = styled.button` 
    position: absolute;
    top:80px;
    right:70px;

    background-color: #4CAF50;
    border: none;
    font-size: 16px;
    color: #FFFFFF;
    padding: 6px;
    width: 60px;
    text-align: center;
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;
    border: 1px solid green;

    &:after {
    content: "";
    background: #f1f1f1;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px !important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s
    }

    &:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s
    }

`;
export const BtnYear = styled.button` 
    position: absolute;
    top:80px;
    right:130px;
    background-color: #4CAF50;
    border: none;
    font-size: 16px;
    color: #FFFFFF;
    padding: 6px;
    width: 60px;
    text-align: center;
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;
    border: 1px solid green;

    &:after {
    content: "";
    background: #f1f1f1;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px !important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s
    }

    &:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s
    }

`;
export const BtnClear = styled.button` 
    position: absolute;
    top:80px;
    left:250px;
    background-color: #4CAF50;
    border: none;
    font-size: 12px;
    background-color: #f44336;
    color: white;
    padding: 6px;
    width: 60px;
    text-align: center;
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;

    &:after {
    content: "";
    background: #f1f1f1;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px !important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s
    }

    &:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s
    }

`;
export const BtnSeletAll = styled.button` 
    position: absolute;
    top:80px;
    left:330px;
    background-color: #4CAF50;
    border: none;
    font-size: 12px;
    color: #FFFFFF;
    padding: 6px;
    width: 60px;
    text-align: center;
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;

    &:after {
    content: "";
    background: #f1f1f1;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px !important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s
    }

    &:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s
    }

`;