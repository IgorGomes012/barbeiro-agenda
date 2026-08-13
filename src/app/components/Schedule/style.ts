import styled from "styled-components";

export const TimeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

interface TimeButtonProps {
  $selected: boolean;
}

export const TimeButton = styled.button<TimeButtonProps>`
  padding: 12px;

  border: 1px solid ${({ theme }) => theme.colors.primary};

  border-radius: ${({ theme }) => theme.borderRadius.medium};

  background: ${({ theme, $selected }) =>
    $selected ? theme.colors.primary : theme.colors.background};

  color: ${({ theme, $selected }) =>
    $selected ? theme.colors.textLight : theme.colors.text};

  font-size: ${({ theme }) => theme.fontSizes.medium};

  transition: 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

export const ScheduleContainer = styled.section`
  width: 100%;
  padding: 60px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

export const ScheduleTitle = styled.h2`
  margin-bottom: 30px;

  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.fontSizes.title};
`;

export const ScheduleForm = styled.form`
  width: 100%;
  max-width: 500px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-weight: 600;
  }

  input,
  select {
    width: 100%;
    padding: 12px;

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius.medium};

    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};

    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
`;

export const SubmitButton = styled.button`
  padding: 14px;

  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};

  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textLight};

  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 600;

  transition: 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;
