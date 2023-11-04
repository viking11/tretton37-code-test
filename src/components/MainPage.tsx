import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import axios from 'axios';
import Colleague from './Colleague';
import { CollegueType } from '../types';
import OfficeFilter from './OfficeFilter';
import { SetStateAction, useEffect, useState } from 'react';
import { CircularProgress, TextField } from '@mui/material';
import SortingSelect from './SortingSelect';
import { handleFiltering } from './utils';

const MainWrapper = styled.div`
  padding: 0 250px;
  height: 100%;
  background-color: #f7f7f7;
`;

const Title = styled.p`
  font-size: 22px;
  font-weight: 600;
  font-family: sans-serif;
  margin: 0 20px;
`;

const FiltersWrapper = styled.div`
  display: flex;
  margin: 0 20px;
  align-items: flex-end;
`;

const SearchField = styled(TextField)`
  background-color: white;
`;

const LoadingContainer = styled.div`
  text-align: center;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const MainPage = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [selectedSorting, setSelectedSorting] = useState('nameA');
  const [selectedOffice, setSelectedOffice] = useState('All');
  const [search, setSearch] = useState('');
  const { data, isLoading } = useQuery({
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
  const [colleagues, setColleagues] = useState([]);

  const getOffices = () =>
    data?.reduce((acc: string[], curr: CollegueType) => {
      if (!acc.includes(curr.office) && curr.office !== null)
        acc.push(curr.office);
      return acc;
    }, []);

  useEffect(() => {
    setColleagues(data);
  }, [data]);

  useEffect(() => {
    const temp = handleFiltering(data, selectedOffice, search, selectedSorting);
    setColleagues(temp as SetStateAction<never[]>);
  }, [selectedSorting, selectedOffice, search]);

  return (
    <MainWrapper>
      <Title>The fellowship of the tretton37</Title>
      <FiltersWrapper>
        <SortingSelect
          selectedSorting={selectedSorting}
          setSelectedSorting={setSelectedSorting}
        />
        <OfficeFilter
          offices={getOffices() || []}
          selectedOffice={selectedOffice}
          setSelectedOffice={setSelectedOffice}
        />
        <SearchField
          label='Search colleague'
          variant='outlined'
          type='search'
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
      </FiltersWrapper>
      {isLoading ? (
        <LoadingContainer>
          <CircularProgress />
        </LoadingContainer>
      ) : (
        <ListWrapper>
          {colleagues?.map((item: CollegueType, index: number) => (
            <Colleague item={item} key={index} />
          ))}
        </ListWrapper>
      )}
    </MainWrapper>
  );
};

export default MainPage;
