import React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const IconButton = ({ name, bgColor }) => {
    return(
    <TouchableOpacity hitSlop={{ top:15, bottom:15 }} style={{ paddingHorizontal: 6 , backgroundColor : bgColor}}>
        <Ionicons name={name} size={24} color="black" />
    </TouchableOpacity>
    )
}

const Header = () => {
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 10}}>
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>친구</Text>

            <View style={{ flexDirection: "row" }}>
                <IconButton name="search-outline" bgColor="lightblue"/>
                <IconButton name="person-add-outline" bgColor="lightgreen"/>
                <IconButton name="md-musical-note-outline" bgColor="lightblue"/>
                <IconButton name="ios-settings-outline" bgColor="lightgreen"/>
            </View>
        </View>
    )
}

export default Header