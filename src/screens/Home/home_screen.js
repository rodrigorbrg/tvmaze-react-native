import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigation } from '@react-navigation/native';

import { queryShows } from '../../store/actions/shows';
import TVMaze from '../../services/tvmaze';
import SearchBar from '../../components/SeachBar';
import ShowItem from '../../components/ShowItem';

import styles from './styles';

const Home = () => {
  const [search, setSearch] = useState();
  // const navigation = useNavigation();
  // let shows = useSelector(({ storage }) => storage.listed);
  const [shows, setShows] = useState();
  const dispatch = useDispatch();
  // const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    if (search) {
      console.log(search);
      // dispatch((dispatch) => queryShows(dispatch, search));
      const qfs = async () => {
        const service = TVMaze();
        const [err, res] = await service.searchShow(search);
        setShows(res);
        console.log(JSON.stringify(res[0]))
      }
      qfs();
    }
  }, [search]);

  const selectShow = (id) => {
    //TODO: not implemented
  };

  return (
    <View style={styles.container}>
      <SearchBar choice={search} setChoice={setSearch} />
      <FlatList
        data={shows}
        keyExtractor={(item) => item.show.id}
        renderItem={({ item }) => (
          <ShowItem show={item.show} onPress={() => selectShow(item.show.id)} />
        )}
      />
    </View>
  );
};

export default Home;
