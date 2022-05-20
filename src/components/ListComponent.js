import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import defaultUser from '../assets/favicon.png';

const ListComponent = ({ url, name }) => {
    const source = url ? { uri: url } : defaultUser;
    return (
        <View style={styles.container}>
            <Image source={source} style={styles.avatar} />
            <Text style={styles.name}>{name}</Text>
        </View>
    );
};

export default ListComponent;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 12,
        marginVertical: 8,
        alignItems: 'center',
        flexDirection: 'row',
    },
    avatar: {
        height: 40,
        width: 40,
        borderRadius: 40,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 20,
        color: '#407BFF',
    },
});
