import styled from "styled-components";

const TodoBox = styled.section`
  position: relative;
  z-index: 5;
  width: 50%;
  border-radius: 0.8rem;
  background-color: var(--background-black2);

  /* ================== Media Queries ============= */
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export default TodoBox;
