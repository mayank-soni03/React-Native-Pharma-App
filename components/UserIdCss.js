import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  backButton: {
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: 'lightgrey',
  },
  iconButton: {
    borderWidth: 1,
    borderRadius: 50,
  },
  profileImageContainer: {
    width: '40%',
    height: '18%',
    alignSelf: 'center',
  },
  profileImage: {
    height: '100%',
    width: '100%',
    borderRadius: '50%',
  },
  separator: {
    borderWidth: 0.1,
    marginTop: 10,
    width: '96%',
    alignSelf: 'center',
  },
  listContainer: {
    marginTop: 10,
    height: '64%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  listItem: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 22,
    fontWeight: '500',
    letterSpacing: 1,
  },
});

export default styles;