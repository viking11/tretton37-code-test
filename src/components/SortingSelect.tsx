import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import styled from 'styled-components';
import { SortType } from '../types';

type Props = {
  selectedSorting: string;
  setSelectedSorting: (val: string) => void;
};

const options = [
  {
    label: 'Sort by name - Ascending',
    name: 'nameA',
  },
  {
    label: 'Sort by name - Descending',
    name: 'nameD',
  },
  {
    label: 'Sort by office - Ascending',
    name: 'officeA',
  },
  {
    label: 'Sort by office - Descending',
    name: 'officeD',
  },
];

const StyledBox = styled(Box)`
  width: 250px;
  margin: 10px 10px 0 0;
  background-color: white;
`;

const SortingSelect = (props: Props) => {
  const { selectedSorting, setSelectedSorting } = props;
  return (
    <StyledBox>
      <FormControl fullWidth>
        <InputLabel>Sorting</InputLabel>
        <Select
          value={selectedSorting}
          label='Sorting'
          onChange={(e) => setSelectedSorting(e.target.value)}
        >
          {options.map((option: SortType, index: number) => (
            <MenuItem key={index} value={option.name}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </StyledBox>
  );
};

export default SortingSelect;
