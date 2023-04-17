import styled from 'styled-components';
const SpaceWidget = () => {
  return (
    <WidgetContainer>
      Space Widget
    </WidgetContainer>
  );
};

const WidgetContainer = styled.div`
  height: 50px;
  width: 317px;
  padding: 8px 16px;
  border-radius: 17px;
  background:  linear-gradient(87.17deg, #B6A0F5 0%, #F46EF7 57.29%, #FF95D5 100%);
  position: fixed;
  right: 47px;
  bottom: 124px;
`;

export default SpaceWidget;
