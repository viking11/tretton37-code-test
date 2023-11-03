import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import axios from 'axios';

const MainWrapper = styled.div``;

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
      <p>The fellowship of the tretton37</p>
    </MainWrapper>
  );
};

export default MainPage;
