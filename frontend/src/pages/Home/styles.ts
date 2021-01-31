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
        width: 100vw;
        height: auto;
    }
`
export const TopBarContainer = styled.div`
    position: absolute;
    width: 100vw;
    height: 200px;
    top: 0;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 46px 72px 0px 72px;

    > img:first-child{
        width: 95.75px;
        height: auto;
        max-width: 100%;

        :hover{
            cursor: pointer;
        }
    }

    > button{
        width: 160px;
        height: 58px;
        border-radius: 54px;
        background: none;
        border: 3px solid #D95B5B;
        color: #D95B5B;
        font-size: 30px;
        transition: 0.3s;
        :hover{
            cursor: pointer;
            background: #D95B5B;
            color: white;
            border-radius: 4px;
        }
    }
`

export const TodoList = styled.div`
    position: absolute;
    left: 28%;
    background: none;
    top: 300px;
    width: 798px;
    height: 685px;
    overflow-y: scroll;
    display: grid;
    grid-auto-rows: 60px;
    grid-gap: 30px;
    overflow-x: hidden;
    padding: 4px 5px 0px 5px;

    /* width */
    ::-webkit-scrollbar {
        width: 6px;
        border-radius: 5px;
        background: none;
    }

    /* Track */
    /* ::-webkit-scrollbar-track {
        width: 10px;
        background: #FFF;
        border-radius: 5px;
    } */

    /* Handle */
    ::-webkit-scrollbar-thumb {
        width: 10px;
        background: #FFF;
        border-radius: 5px;
    }

   

`

export const Todo = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background: #FFF;
    margin-right: 40px;
    transition: 0.2s;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 0px 0px 15px;

    >span {
        color: #000000;
        font-size: 18px;
        font-family: 'Ubuntu', monospace;
        font-weight: 400;
    }
    :hover{
        box-shadow: 0px 0px 0px 3px #D95B5B;
    }
`