import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CardField, useStripe } from '@stripe/stripe-react-native';


const PaymentScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <SafeAreaView style={styles.SafeArea}>
                <CardField
                    postalCodeEnabled={false}
                    placeholders={{
                        number: '4242 4242 4242 4242',
                    }}
                    cardStyle={{
                        backgroundColor: '#FFFFFF',
                        textColor: '#000000',
                    }}
                    style={{
                        width: '100%',
                        height: 50,
                        marginVertical: 30,
                    }}
                    onCardChange={(cardDetails) => {
                        console.log('cardDetails', cardDetails);
                    }}
                    onFocus={(focusedField) => {
                        console.log('focusField', focusedField);
                    }}
                />
            </SafeAreaView>
        </View>
    )
}

export default PaymentScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'cyan',
    },
    SafeArea: {
        flex: 1
    }
})