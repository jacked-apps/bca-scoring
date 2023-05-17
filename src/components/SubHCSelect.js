import { View, Text } from 'react-native';
import React from 'react';
import { SelectList } from 'react-native-dropdown-select-list';

export const subHCData = [
  { key: '2', value: '2' },
  { key: '1', value: '1' },
  { key: '0', value: '0' },
  { key: '-1', value: '-1' },
  { key: '-2', value: '-2' },
];
const SubHCSelect = ({ setSubHC }) => {
  return (
    <SelectList
      data={subHCData}
      setSelected={value => setSubHC(value)}
      placeholder='Sub H/C'
    />
  );
};

export default SubHCSelect;
