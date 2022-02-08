import styled from "styled-components";

export const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  min-height: 100vh;

  @media (max-width: 425px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }

  > a {
    color: #000;
    text-decoration: none;
  }
`;

export const NewsCard = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: #eee;
  padding: 10px 20px;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;

  :hover {
    box-shadow: 1px 1px 12px #000;
  }
`;

export const NewsCardTop = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    margin: 0;
    margin-right: 10px;

    @media (max-width: 425px) {
      font-size: 1rem;
    }
  }

  > img {
    object-fit: contain;
    height: 130px;
    max-width: 150px;
    border-radius: 8px;

    @media (max-width: 425px) {
      height: 100px;
      max-width: 130px;
    }
  }
`;

export const NewsCardMid = styled.div`
  > p {
    margin: 20px 0;

    @media (max-width: 425px) {
      font-size: 0.9rem;
    }
  }
`;

export const NewsCardBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > p {
    margin: 5px;
    @media (max-width: 425px) {
      font-size: 0.7rem;
    }
  }
`;

export const NewsCardBottomProvider = styled.div`
  display: flex;
  align-items: center;

  > p {
    margin: 5px;
    margin-left: 10px;

    @media (max-width: 425px) {
      font-size: 0.7rem;
    }
  }

  > img {
    height: 30px;
    width: 30px;
  }
`;
