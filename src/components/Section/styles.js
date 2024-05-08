import styled from 'styled-components';

export const Container = styled.section`
  margin: 28px 0;

  > h2 {
    border-bottom-width: 1px; //Colocar uma linha em baixo;
    border-bottom-style: solid;// Quero que essa linha sejá sólida;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    
    padding-bottom: 16px;// Para a linha não ficar tão colada no texto;
    margin-bottom: 28px;// Para quem estiver em baixo se afastar um pouco;

    color: ${({ theme }) => theme.COLORS.GRAY_100};// Uma cor para todo mundo;
    font-size: 20px;
    font-weight: 400; //Regular;

  }
`;