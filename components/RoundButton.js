import styled from "styled-components";
const RoundButton = ({ text, color, size = 217 }) => {
  return (
    <RButton color={color} size={size}>
      {text}
    </RButton>
  );
};

export default RoundButton;

const RButton = styled.div`
  background: ${(props) => (props.color ? props.color : "#393535")};
  width: ${(props) => props.size}px;
  height: 44px;
  border-radius: 22px;
  font-size: 16px;
  color: #ffffff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
