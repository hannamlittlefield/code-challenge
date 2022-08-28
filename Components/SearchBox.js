import { Pressable, StyleSheet, Text, View, TextInput} from 'react-native';

export default function SearchBox(props) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Film Title' 
        style={styles.textInput}
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        />
      <Pressable 
        style={styles.searchButton}>
      <Text>Search</Text>
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
});
