import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  View: {
    flex: 1,
  },
  TextInput: {
    color: 'white',
    marginTop: '6%',
    padding: 12,
    fontSize: 18,
    fontWeight: 600,
    borderRadius: 14,
    width: 300,
    alignSelf: 'center',
    height: 50
  },
  LogInBtn: {
    color: 'white',
    textAlign: 'center',
    padding: 10,
    fontSize: 18,
    fontWeight: 600,
    borderWidth: 2,
    width: 250,
    borderColor: 'transparent',
    borderRadius: 10
  },
  ForgetPassword: {
    color: 'black',
    textAlign: 'center',
    paddingLeft: 150,
    paddingTop: 15,
    fontSize: 15,
    fontWeight: 600,
    width: '100%',
  },
  LineStyle: {
    marginBottom: 2,
    borderWidth: 1,
    borderColor: 'grey',
    marginTop: '230px',
  },
  LineStyle2: {
    marginBottom: 2,
    borderWidth: 1,
    borderColor: 'grey',
  },
  Touchable: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    width: '100%', height: 60,
    backgroundColor: 'rgba(189, 208, 255, 1)',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  Text: {
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: '600',
    letterSpacing: 1,
  },
})
export default styles;