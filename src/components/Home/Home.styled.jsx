import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const Title = styled.h2`
  margin-left: 10px;
`;
export const LinkStyled = styled(Link)`
  display: block;
  margin-bottom: 5px;
  text-decoration: none;
`;
