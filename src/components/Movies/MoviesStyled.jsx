import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  padding-top: 20px;
  padding-bottom: 20px;
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(https://oir.mobi/uploads/posts/2021-03/1616536897_49-p-krasno-chernii-fon-54.jpg);

  div {
  }
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
      color: #f4dada;
      width: 180px;
    }
  }
`;

export const Submit = styled.form`
  input {
    margin-left: 15px;
    margin-bottom: 20px;
    width: 200px;
    height: 30px;
    border-radius: 5px;
    background-color: #e7e7e776;
    font-size: 20px;
  }
  button {
    padding: 5px 8px;
    border-radius: 5px;
    background-color: #e7e7e776;
    font-size: 20px;
    color: #050505;
    cursor: pointer;
  }
`;
