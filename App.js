import { Pressable, StyleSheet, Text, View, TextInput} from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SearchBox from './Components/SearchBox';
import MovieDisplay from './Components/MovieDisplay';

export default function App() {
  const [movies, setMovies] = useState([]);
	const [favourites, setFavourites] = useState([]);
	const [searchValue, setSearchValue] = useState('');

  const getMovies = () => {
    return fetch('http://www.omdbapi.com/?apikey=123114ca&')
      .then((response) => response.json())
      .then((json) => {
        return json.movies;
    })
    .catch((error) => {
      console.error(error);
  });
};

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Film Faves</Text>
      <SearchBox/>
      <MovieDisplay movies={movies} style={styles.movieContainer}/>
      <Pressable 
        style={styles.favoritesButton}>
        <Text>My Favorites</Text>  
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CAE5FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 40,
    marginBottom: 50,
    position: 'absolute',
    top:30,
    fontFamily: 'Didot'
  },
  textInput: {
    backgroundColor: "#C0C1C6",
    borderRadius: 5,
    width: "85%",
    height: 45,
    margin: 5,
    justifyContent: "center",
    position: 'absolute',
    top: 100
  },
  searchButton: {
    width: "50%",
    borderRadius: 10,
    marginBottom: 35,
    height: 50,
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D9D9D9",
    position: 'absolute',
    top: 160
  },
  movieContainer:{
    position: 'absolute',
    top: 500
  },
  favoritesButton: {
  width: "50%",
  borderRadius: 10,
  marginBottom: 35,
  height: 50,
  fontSize: 20,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#D9D9D9",
  position: 'absolute',
  bottom:0,
},
});
