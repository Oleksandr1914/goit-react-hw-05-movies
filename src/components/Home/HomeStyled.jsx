import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  padding: 20px;
  background-color: #171717;
  /* background-image: url(https://oir.mobi/uploads/posts/2021-03/thumbs/1616971189_45-p-temnii-fon-dlya-rabochego-stola-48.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: top; */
`;

export const Title = styled.h1`
  margin: 0;
  margin-bottom: 20px;
  padding-left: 10px;
  color: #bf2903;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  text-decoration: none;
  padding-left: 10px;
  margin: 0;
  li {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    a {
      color: #bf2903;
      width: 180px;
    }
  }
`;
