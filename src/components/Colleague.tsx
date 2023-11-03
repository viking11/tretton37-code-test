import styled from 'styled-components';
import { CollegueType } from '../types';

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

const Colleague = (props: Props) => {
  const { item } = props;
  return (
    <ColleagueWrapper>
      {
        // TODO: add fallback if no image present
      }
      <ColleagueImage src={item.imagePortraitUrl} />
      <p>{item.name}</p>
      <p>Office: {item.office}</p>
      <div>
        <p>{item.linkedIn}</p>
        <p>{item.gitHub}</p>
        <p>{item.twitter}</p>
      </div>
    </ColleagueWrapper>
  );
};

export default Colleague;
