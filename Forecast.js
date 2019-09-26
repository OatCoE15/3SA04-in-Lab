import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Forecast extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.main}>{this.props.main}</Text>
                <Text style={styles.description}>{this.props.description}</Text>
                <Text style={styles.temp}>{this.props.temp}
                    <Text style={styles.heat}> °C</Text>
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        fontSize: 40,
        textAlign: 'center',
        marginTop: 30,
        color:'#FFFFFF'
    },
    description: {
        fontSize: 40,
        textAlign: 'center',
        marginTop: 30,
        color:'#FFFFFF'
    },
    temp: {
        fontSize: 40,
        textAlign: 'center',
        marginTop: 30,
        color:'#FFFFFF'
    },
    heat: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 20,
        color:'#FFFFFF'
    }
});