import { CollegueType } from '../types';

const SortBy = (a: string, b: string, ascending: boolean) =>
  ascending ? (a < b ? -1 : 1) : a > b ? -1 : 1;

export const handleFiltering = (
  data: CollegueType[],
  selectedOffice: string,
  search: string,
  selectedSorting: string,
) => {
  let temp = data?.slice();

  if (selectedOffice === 'All' && search === '' && selectedSorting === 'nameA')
    return data;

  if (selectedOffice === 'All') temp = data;
  else {
    temp = temp.filter(
      (colleague: CollegueType) => colleague.office === selectedOffice,
    );
  }

  temp = temp.filter((colleague: CollegueType) =>
    colleague.name.toLowerCase().includes(search),
  );

  if (selectedSorting === 'nameA')
    temp = temp.sort((a: CollegueType, b: CollegueType) =>
      SortBy(a.name, b.name, true),
    );

  if (selectedSorting === 'nameD')
    temp = temp.sort((a: CollegueType, b: CollegueType) =>
      SortBy(a.name, b.name, false),
    );

  if (selectedSorting === 'officeA')
    temp = temp.sort((a: CollegueType, b: CollegueType) =>
      SortBy(a.office, b.office, true),
    );

  if (selectedSorting === 'officeD')
    temp = temp.sort((a: CollegueType, b: CollegueType) =>
      SortBy(a.office, b.office, false),
    );

  return temp;
};
