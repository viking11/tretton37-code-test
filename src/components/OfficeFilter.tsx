import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import styled from 'styled-components';

type Props = {
  offices: string[];
  selectedOffice: string;
  setSelectedOffice: (val: string) => void;
};

const StyledBox = styled(Box)`
  width: 200px;
  margin: 10px 10px 0 0;
  background-color: white;
`;

const OfficeFilter = (props: Props) => {
  const { offices, selectedOffice, setSelectedOffice } = props;

  return (
    <StyledBox>
      <FormControl fullWidth>
        <InputLabel>Office</InputLabel>
        <Select
          value={selectedOffice}
          label='Office'
          id='officeSelect'
          onChange={(e) => setSelectedOffice(e.target.value)}
        >
          <MenuItem value='All'>All Locations</MenuItem>
          {offices.map((office: string, index: number) => (
            <MenuItem key={index} value={office} id={`office${index}`}>
              {office}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </StyledBox>
  );
};

export default OfficeFilter;
