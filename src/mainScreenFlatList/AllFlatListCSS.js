import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  View: {
    
  },
  container: {
    borderRadius: 10,
    marginLeft: 15,
    marginBottom: 10,
    backgroundColor: 'white',
    padding: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  image: {
    height: 170,
    width: 150
  },
  Text1: {
    fontSize: 20,
    fontWeight: 600,
    alignSelf: 'center'
  },
  text2: {
    alignSelf: 'flex-end',
    fontSize: 18
  }
});

export default styles;