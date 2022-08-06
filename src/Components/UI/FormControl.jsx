import styled from "styled-components";

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 50%;

  &.isValid input {
    background-color: var(--color-red);
  }

  & .todo__form-input {
    outline: none;
    border: none;
    font-size: 2rem;
    font-weight: 500;
    width: 100%;
    padding: 0.6rem 1.4rem;
    border-radius: 0.6rem;
    transition: all 0.5s;
    background-color: ${(props) =>
      props.valid ? "var(--color-white)" : "var(--color-red)"};
  }

  & .todo__form-input::placeholder {
    color: ${(props) =>
      props.valid ? "var(--color-black)" : "var(--color-white)"};
  }

  & .todo__form-control-time {
    display: flex;
    gap: 1rem;
  }

  & .todo__form-control-time > * {
    width: 33%;
  }

  & .am__pm-dropdown {
    outline: none;
    border: none;
    cursor: pointer;
    text-align: center;
    font-size: 2rem;
    font-weight: 500;
    border-radius: 0.6rem;
  }

  /* ================== Media Queries ============= */
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export default FormControl;
