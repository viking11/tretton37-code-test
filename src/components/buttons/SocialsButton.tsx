import styled from 'styled-components';

type Props = {
  icon: string;
  url: string;
};

const SocialsImage = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
  margin-right: 5px;
`;

const SocialsButton = (props: Props) => {
  const { icon, url } = props;
  return (
    <SocialsImage
      src={icon}
      onClick={() => window.open(url, '_blank')?.focus()}
    />
  );
};

export default SocialsButton;
