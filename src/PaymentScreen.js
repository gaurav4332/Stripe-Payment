import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { CardField, createToken } from '@stripe/stripe-react-native';
import ButtonComp from './Components/ButtonComp';
import createPaymentIntent from './apis/stripeApis';


const PaymentScreen = () => {
    const [cardInfo, setCardInfo] = useState(null)

    const fetchCardDetail = (cardDetail) => {


        if (cardDetail.complete) {
            setCardInfo(cardDetail)
        }
        else {
            setCardInfo(null)
        }

    }
    const onDone = async () => {
        
        let apiData = {
            amount :2400,
            currency :"eur"
        }
        try {
            const res = await createPaymentIntent(apiData)
            console.log("payment intent create successfully",res)

        } catch (error) {
            console.log("Error raised during payment intent", error)

        }

        // if (!!cardInfo) {
        //     try {
        //         const resToken = await createToken({ ...cardInfo, type: 'Card' })
        //         console.log(" resToken", resToken)

        //     } catch (error) {
        //         alert("Error raise during Token")
        //     }
        // }
    }

    return (
        <View style={styles.mainContainer}>
            <SafeAreaView style={styles.SafeArea}>
                <View style={{ padding: 16 }}>
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
                            fetchCardDetail(cardDetails)
                        }}
                        onFocus={(focusedField) => {
                            console.log('focusField', focusedField);
                        }}
                    />
                    <ButtonComp
                        onPress={onDone}
                        disabled={!cardInfo}
                    />
                </View>

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