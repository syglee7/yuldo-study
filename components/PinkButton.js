import styled from "styled-components";
const PinkButton = ({ text, color, size = 97 }) => {
  return (
    <PButton color={color} size={size}>
      {text}
    </PButton>
  );
};

export default PinkButton;

const PButton = styled.div`
  background: ${(props) => (props.color ? props.color : "#FFBEBE")};
  width: ${(props) => props.size}px;
  height: 30px;
  border-radius: 15px;
  font-size: 13px;
  color: #1e1e1e;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
