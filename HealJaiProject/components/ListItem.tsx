import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface dataType {
    _id: string
    bookID: string
    bookName: string
    bookDescription: string
    bookAuthor: string
    bookPublishAt: Date
    bookType: string
    bookImage: string
}

interface ListItemProps {
    item: dataType;
}

const ListItem: React.FC<ListItemProps> = ({ item }):React.JSX.Element => {
    return (
        <View>
            <Text>{item.bookName}</Text>
            <Text>{item.bookDescription}</Text>
            <Text>By: {item.bookAuthor}</Text>
        </View>
    );
};

export default ListItem

const styles = StyleSheet.create({})