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
    headerText: {
        fontSize: 20,
        fontWeight: '500',
    },
    image: {
        width: '100%',
        height: '32%',
        backgroundColor: 'lightgrey',
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: '500',
    },
    details: {
        fontWeight: '500',
        marginTop: 8,
        padding: 10,
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    price: {
        fontSize: 26,
        fontWeight: '500',
    },
    setContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    NoOfText:{
        fontSize:20,
        fontWeight:'500'
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    quantitySection: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '28%',
        justifyContent: 'space-evenly',
    },
    quantityText: {
        fontSize: 20,
        fontWeight: '500',
        width:'100%'
    },
    quantityValue: {
        fontSize: 18,
        fontWeight: '500',
    },
    addToCartButton: {
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
    cartIcon: {
        color: 'white',
        marginRight: 10,
    },
    addToCartText: {
        color: 'white',
        fontSize: 20,
        fontWeight:'500',
        letterSpacing:1
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
    milligramSelect:{
        flex:1,
        position: 'absolute',
        width: '100%',
        top: '25px',
        marginLeft:'50%',
    },
    milligramText: {
        alignSelf:'center',
        fontSize:18,
        marginTop: '5%',
        width:'90%',
        padding:5,
    },
    milligramTouch:{
        backgroundColor:'#fff',
        marginBottom:5,
        borderBottomColor:'#ddd'
    }
});

export default styles;