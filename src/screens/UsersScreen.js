import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    SafeAreaView,
} from 'react-native';
import { ListComponent } from '../components';

const INITIAL_SIZE = 15;
const API_ENDPOINT = `https://randomuser.me/api/?results=${INITIAL_SIZE}`;

/**
 * useEffect hook for initialising data using API call
 * JSON formatter: https://jsonformatter.curiousconcept.com/#
 */
const UsersScreen = ({ navigation }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(API_ENDPOINT)
            .then((response) => response.json())
            .then((data) => {
                setUsers(data.results);
            })
            .catch((error) => console.error('Error:', error));
    }, []); //dependency is set to empty array so function is only called once.

    const renderItem = ({ item }) => {
        const name = `${item.name.first} ${item.name.last}`;
        const url = item?.picture?.thumbnail ?? null;
        return <ListComponent url={url} name={name} />;
    };

    const keyExtractor = (_item, index) => `${index}`;

    return users.length ? (
        <SafeAreaView style={{ marginTop: 20 }}>
            <View style={styles.root}>
                <FlatList
                    data={users}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                />
            </View>
        </SafeAreaView>
    ) : null;
};

export default UsersScreen;

const styles = StyleSheet.create({
    root: {
        justifyContent: 'center',
        alignItem: 'center',
    },
});
