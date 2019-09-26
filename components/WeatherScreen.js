import React from 'react';
import { StyleSheet, Text, Button } from 'react-native';
import Weather from './Weather';


export default class WeatherScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: (
                <Text></Text>
            ),
            headerTitle: (
                <Text style={styles.HeaderTitle} >Weather</Text>
            ),
            headerRight: (
                <Text style={styles.Right} onPress={() => navigation.navigate('ZipCode')}>
                    Change Zip
                </Text>
            )
        }
    }
    render() {
        const zipCode = this.props.navigation.getParam('zipCode')
        return (
            <Weather zipCode={zipCode} />
        );
    }
}

const styles = StyleSheet.create({
    HeaderTitle: {
        width: '100%',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    Right: {
        padding: 10,
        color: '#FFFFFF',
        backgroundColor: '#6600CC',
        marginRight: 5,
        fontSize: 15,
        fontWeight: 'bold',
        borderRadius: 10,
    }
})