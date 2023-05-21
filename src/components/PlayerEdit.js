import { View } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../constants/StyleMaster';
import { Button, Text } from 'react-native-paper';
import { SelectList } from 'react-native-dropdown-select-list';
import { getChoices, subName } from '../constants/functions';
import SubHCSelect from './SubHCSelect';
import { postEditRoster } from '../constants/posts';

const PlayerEdit = ({
  lineup,
  teamInfo,
  home,
  position,
  setEdit,
  table,
  fetchData,
  navigation,
  setNavigationKey,
}) => {
  const [selected, setSelected] = useState();
  const [subHC, setSubHC] = useState();
  const [disableSend, setDisableSend] = useState(true);

  data = getChoices(teamInfo, lineup, home);

  const playerName = () => {
    key = 'player' + position;
    lineup ? (player = lineup[key].name) : key;

    return player;
  };

  const handleSend = async () => {
    setDisableSend(true);
    await postEditRoster(table, home, position, selected, subHC);
    await fetchData();
    setEdit(false);
    setNavigationKey(prevKey => prevKey + 1);
    navigation.navigate('Loading', { table, home });
  };
  const handleChangePLayer = value => {
    setDisableSend(true);
    setSelected(value);
    value != subName(home) && setDisableSend(false);
  };
  const handleChangeSubHC = value => {
    setSubHC(value);
    setDisableSend(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.rowSingleSelect}>
        <View style={styles.left}>
          <Text variant='titleMedium'>Player {position}</Text>
        </View>
        <View style={styles.center}>
          <Text>
            Change: {playerName()} {selected}
          </Text>
          <SelectList
            data={data}
            setSelected={value => handleChangePLayer(value)}
          />
        </View>
        <View style={styles.right}>
          <Button
            mode='contained'
            icon='send'
            disabled={disableSend}
            onPress={() => handleSend()}
          ></Button>
        </View>
      </View>
      {selected === subName(home) && (
        <>
          <SubHCSelect setSubHC={value => handleChangeSubHC(value)} />
          <Text>Sub H/C: {subHC}</Text>
        </>
      )}
      <View style={styles.headline}>
        <Button mode='contained' onPress={() => setEdit(false)}>
          Cancel
        </Button>
      </View>
    </View>
  );
};

export default PlayerEdit;
