import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const ToBack = styled.div`
  a {
    margin-left: 15px;
    padding: 5px 8px;
    text-decoration: none;
    font-size: 22px;
    color: #d4612b;
    border: 1px solid black;
    border-radius: 6px;
    background-color: #292727;
  }
`;

export const Box = styled.div`
  display: flex;
  gap: 60px;
  padding: 40px 15px;
  h2 {
    font-size: 32px;
    color: #292424;
  }
  p,
  span {
    max-width: 400px;
    font-size: 22px;
    color: #292424;
  }
  h3 {
    font-size: 28px;
    color: #292424;
  }
`;

export const BoxReviews = styled.div`
  display: flex;
  gap: 30px;
  padding: 15px 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.16);
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  a {
    font-size: 22px;
    text-decoration: none;
    color: #4c3b36;
  }
  a.active {
    color: #ff6a00;
  }
  a:hover {
    color: #f4b7b7;
  }
`;

export const ReviewsList = styled.ul`
  li {
    list-style: none;
  }
  h5 {
    font-size: 22px;
    color: #292424;
  }
  p {
    font-size: 18px;
    color: #292424;
  }
`;
