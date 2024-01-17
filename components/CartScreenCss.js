import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      padding: 10,
    },
    cartTitle: {
      flexDirection: 'row',
    },
    cartTitleText: {
      fontSize: 20,
      fontWeight: '500',
      marginRight: 4,
    },
    cartIcon: {
      marginTop: 2,
    },
    cartItem: {
      alignSelf: 'center',
      width: '90%',
      marginTop: 20,
      padding: 10,
      marginHorizontal: 5,
      borderRadius: 10,
      backgroundColor: 'white',
      padding: 15,
      elevation: 5,
      bottom: 18,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.3,
      shadowRadius: 5,
    },
    trashIcon: {
      alignSelf: 'flex-end',
    },
    itemDetails: {
      flexDirection: 'row',
      justifyContent:'space-between',
      alignItems:'center'
    },
    itemImage: {
      height: 70,
      width: 80,
    },
    itemName: {
      fontSize: 20,
      fontWeight: '600',
    },
    itemAmount: {
      fontSize: 20,
      fontWeight: '400',
      height:'50%',
      width:'16%'
      },
    quantitySection: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
    },
    quantityTextContainer: {
      flexDirection: 'row',
      marginTop: 7,
    },
    quantityText: {
      fontSize: 18,
    },
    chevronIcon: {
      marginTop: 4,
    },
    quantityControl: {
      flexDirection: 'row',
      justifyContent:'center',
      alignItems:'center'
    },
    quantityValue: {
      fontSize: 22,
    },
    proceedButton: {
      height: 60,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        alignSelf: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(29, 25, 43, 1)',
    },
    proceedButtonText: {
      fontSize:20,
      color: 'white',
      letterSpacing:1,
      fontWeight:'500'
    },
    modalContainer: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // adjust the alpha value for transparency
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)', // adjust the alpha value for transparency
      padding: 20,
      borderRadius: 10,
      alignItems: 'center',
    },
    modalText: {
      fontSize: 20,
      color: 'white',
      fontWeight: '600',
      marginTop: 10,
    },
  });
  
export default styles  