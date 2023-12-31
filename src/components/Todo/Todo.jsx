import { Text } from 'components';
import { TodoWrapper, DeleteButton,  } from './Todo.styled';
import { RiDeleteBinLine  } from 'react-icons/ri';

export const Todo = ({counter, text, id, handleDelete}) => {

  return (
    <TodoWrapper>
      <Text textAlign="center" marginBottom="20px">
        TODO #{counter+1}
      </Text>
      <Text>{text}</Text>
      <DeleteButton type="button" onClick={()=>handleDelete(id)}>
        <RiDeleteBinLine size={24} />
      </DeleteButton>
    </TodoWrapper>
  );
};
