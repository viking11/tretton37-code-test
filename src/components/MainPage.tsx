import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import axios from 'axios';
import Colleague from './Colleague';
import { CollegueType } from '../types';

const MainWrapper = styled.div`
  padding: 0 200px;
  height: 100%;
  background-color: #f7f7f7;
`;

const Title = styled.p`
  font-size: 22px;
  font-weight: 600;
  font-family: sans-serif;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const MainPage = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const { data, isFetching } = useQuery({
    queryKey: ['colleagueData'],
    queryFn: () =>
      axios
        .get('https://api.1337co.de/v3/employees', {
          headers: {
            Authorization: apiKey,
          },
        })
        .then((res) => res.data),
  });

  console.log('isFetching', isFetching);
  console.log('data', data);

  return (
    <MainWrapper>
      <Title>The fellowship of the tretton37</Title>
      <div>Filters and tools</div>
      <ListWrapper>
        {data?.map((item: CollegueType, index: number) => (
          <Colleague item={item} key={index} />
        ))}
      </ListWrapper>
    </MainWrapper>
  );
};

export default MainPage;
