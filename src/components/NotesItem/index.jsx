import { FiPlus, FiX } from 'react-icons/fi'; //Opção de adicionar ou deletar;

import { Container } from './styles'

export function NoteItem({ isNew, value, onClick, ...rest }){
  return (
    <Container isNew={isNew}> 
      <input //passou a propriedade isNew para dentro do container
        type="text"
        value={value} 
        readOnly={!isNew} //O readOnly é somente leitura, porque para um item que já foi adicionado eu não vou deixar ele editar. Então eu quero que fique somente leitura. Por isso que eu vou usar aqui um isNew. Ou seja, se não é novo, exclamação é uma negação. Se não é novo, pode bloquear.
        {...rest}
      />

      <button
        type="button"
        onClick={onClick}
      >
        {isNew ? <FiPlus /> : <FiX />} 
      </button> 
    </Container>
    // Se for novo, se é um novo, eu vou renderizar o FePlus para aparecer o ícone de adicionar. Caso contrário, eu quero que apareça o ícone FeX, que é o de fechar.
  );
}