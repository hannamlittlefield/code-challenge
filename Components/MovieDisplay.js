import { StyleSheet, View, Image, Text, SafeAreaView } from 'react-native';


const MovieDisplay = (props) => {
        return (
            <SafeAreaView styles={styles.container}>
            <Text>Movies here</Text>
                {props.movies.map((movie, index) => {
                    return(
                        <Image source={movie.Poster} alt='movie'></Image>
                        )
                })}
            </SafeAreaView>
        );   
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#CAE5FF',
      },
})

export default MovieDisplay;