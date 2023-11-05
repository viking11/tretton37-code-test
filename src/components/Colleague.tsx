import styled from 'styled-components';
import { CollegueType } from '../types';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import twitter from '../assets/twitter.png';
import noUserImg from '../assets/no-user-image.png';
import SocialsButton from './buttons/SocialsButton';

type Props = {
  item: CollegueType;
};

const ColleagueWrapper = styled.div`
  margin: 20px;
  padding: 10px;
  background-color: white;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.75);
`;

const ColleagueImage = styled.img`
  height: 220px;
  width: 200px;
  border: 1px solid #eadddd;
`;

const ColleagueText = styled.p`
  font-family: sans-serif;
`;

const Colleague = (props: Props) => {
  const { item } = props;
  return (
    <ColleagueWrapper id='colleague'>
      <ColleagueImage
        src={item.imagePortraitUrl ? item.imagePortraitUrl : noUserImg}
        loading='lazy'
      />
      <ColleagueText>{item.name}</ColleagueText>
      <ColleagueText>Office: {item.office}</ColleagueText>
      {item.linkedIn && (
        <SocialsButton
          icon={linkedin}
          url={`https://www.linkedin.com${item.linkedIn}`}
        />
      )}
      {item.gitHub && (
        <SocialsButton
          icon={github}
          url={`https://www.github.com/${item.gitHub}`}
        />
      )}
      {item.twitter && (
        <SocialsButton
          icon={twitter}
          url={`https://www.twitter.com/${item.twitter}`}
        />
      )}
    </ColleagueWrapper>
  );
};

export default Colleague;
