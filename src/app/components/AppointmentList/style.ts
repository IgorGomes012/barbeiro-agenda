import styled from "styled-components";

export const ListContainer = styled.section`
  margin-top: 32px;
`;

export const ListTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin-bottom: 16px;
`;

export const AppointmentCard = styled.div`
  padding: 16px;
  margin-bottom: 12px;

  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
`;

export const CancelButton = styled.button`
  margin-top: 12px;
  padding: 10px 16px;

  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};

  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textLight};

  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 600;

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;
