import styled from 'styled-components';
export const Container = styled.div`
  min-height: 100vh;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Title = styled.h1`
  margin: 0;
  margin-bottom: 20px;
  padding-left: 10px;
  color: #292424;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  text-decoration: none;
  padding-left: 10px;
  margin: 0;
  li {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    a {
      color: #292424;
      width: 180px;
    }
  }
`;
