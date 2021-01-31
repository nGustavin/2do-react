import styled from 'styled-components'

export const Container = styled.div`
    background: #F0F0F2;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow-y: hidden;
    
    > img{
        width: 63%;
        height: auto;
        max-width: 100%;
    }
`

export const SideContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 46px 0px 177px 72px;
`

export const MenuBar = styled.div`

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 60px;

    >img {
        width: 15%;
        height: auto;
        max-width: 100%;

        :hover{
            cursor: pointer;
        }
    }

    >a{
        text-decoration: none;
        color: #000000;
        font-family: 'Roboto Mono', monospace;
        font-size: 22px;
        transition: 0.3s;

        :hover{
            color: #D95B5B;
        }
    }
`
export const TitleText = styled.div`
    margin: 50px 0px -140px 0px;
    width: 110%;
    >h1{
        font-size: 80px;
        font-weight: 400;
    }

    h2{
        font-size: 50px;
        font-weight: 200;
    }
`
export const DescriptionText = styled.div`
    width: 100%;
    line-height: 40px;
    >h4{
        font-weight: 400;
        font-size: 24px;
    }
`

export const ButtonContainer = styled.div`
    width: 100%;

    > button{
        width: 339px;
        height: 86px;
        border-radius: 54px;
        background: none;
        border: 3px solid #D95B5B;
        font-size: 30px;
        font-weight: 400;
        color: #D95B5B;
        transition: 0.2s;

        :hover{
            cursor: pointer;
            background: #D95B5B;
            color: white;
        }
    }
`