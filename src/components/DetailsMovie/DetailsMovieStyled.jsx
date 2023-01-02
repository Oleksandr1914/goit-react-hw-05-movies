import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #171717;
  /* background-image: url(https://oir.mobi/uploads/posts/2021-03/thumbs/1616971189_45-p-temnii-fon-dlya-rabochego-stola-48.jpg);
  background-repeat: repeat;
  background-size: 100vw 100vw;
  background-position: top; */
`;

export const ToBack = styled.div`
  a {
    margin-left: 15px;
    padding: 5px 8px;
    padding-bottom: 10px;
    text-decoration: none;
    font-size: 22px;
    color: #d4612b;
    border: 1px solid black;
    border-radius: 6px;
    background-color: #292727;
    :hover {
      background-color: #d4612b;
      color: #d0d0d0;
    }
  }
`;

export const Box = styled.div`
  display: flex;
  gap: 120px;
  padding: 40px 15px;
  img {
    margin-left: 60px;
  }
  h2 {
    font-size: 32px;
    color: #e3c8c8;
  }
  p,
  span {
    max-width: 400px;
    font-size: 22px;
    color: #e3c8c8;
  }
  h3 {
    font-size: 28px;
    color: #e3c8c8;
  }
`;

export const ContainerCast = styled.div`
  padding: 20px;
`;

export const ListCast = styled.ul`
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  h4 {
    color: #e3c8c8;
    margin-top: 6px;
    margin-bottom: 0;
  }

  p {
    margin-top: 6px;
    margin-bottom: 0;
    color: #e3c8c8;
    width: 150px;
  }
  li {
    margin-top: 10px;
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
    color: #e3c8c8;
  }
  p {
    font-size: 18px;
    color: #e3c8c8;
  }
`;
export const ReviewsP = styled.p`
  color: #e3c8c8;
`;
