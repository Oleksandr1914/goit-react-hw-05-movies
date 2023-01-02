import styled from 'styled-components';

export const ContainerMovies = styled.div`
  min-height: 100vh;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #171717;
  /* background-image: url(https://oir.mobi/uploads/posts/2021-03/thumbs/1616971189_45-p-temnii-fon-dlya-rabochego-stola-48.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: top; */
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
    a:hover {
      color: #d73107;
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
    background-color: #e7e7e7a8;
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
