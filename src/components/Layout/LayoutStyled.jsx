import styled from 'styled-components';

export const Cont = styled.div`
  box-sizing: border-box;
  /* width: 100vw; */
  overflow: hidden;
`;

export const Box = styled.div`
  display: flex;
  gap: 30px;
  padding: 15px 30px;
  background-color: #2a2d34;
  border-bottom: 1px solid rgba(0, 0, 0, 0.16);
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  a {
    font-size: 22px;
    text-decoration: none;
    color: #f1a28ca7;
  }
  a.active {
    color: #ff6a00;
  }
  a:hover {
    color: #f4b7b7;
  }
`;
