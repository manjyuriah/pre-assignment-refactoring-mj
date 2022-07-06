import styled from 'styled-components';

export const Li = styled.li`
  margin-top: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 3px;

  background-color: ${({ theme }) => theme.colors.white};
`;

export const Header = styled.header`
  padding: 0.7rem 1rem;
  display: flex;
  align-items: center;
  font-weight: 700;

  & > button {
    margin-left: auto;
  }
`;

export const Avatar = styled.img`
  height: 42px;
  width: 42px;
  border-radius: 50%;
  cursor: pointer;
`;

export const UserName = styled.span`
  margin-left: 18px;
  font-size: ${({ theme }) => theme.fontSizes.small};
  cursor: pointer;
`;

export const Icon = styled.button`
  padding-left: 0;
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  cursor: pointer;
  background-color: inherit;
`;

export const Contents = styled.article``;

export const FeedImage = styled.img`
  width: 100%;
  max-height: 600px;
`;

export const IconList = styled.div`
  margin: 0 1rem;
  margin-top: 0.5rem;
  display: flex;

  & :last-child {
    padding-right: 0;
    margin-left: auto;
  }
`;

export const Like = styled.span`
  display: inline-block;
  margin-left: 1rem;

  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 500;
`;

export const Description = styled.p`
  margin-left: 1rem;
  padding: 0.2rem 0;
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

export const Comments = styled.ul`
  margin-bottom: 1rem;
  padding: 0 1rem;
  padding-top: 0.2rem;
`;

export const Comment = styled.li`
  margin-bottom: 0.1rem;
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.small};
  & > p {
    font-weight: 500;
  }
`;

export const Nickname = styled.span`
  margin-right: 12px;

  font-weight: bold;
`;
