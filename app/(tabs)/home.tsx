import DaySelectionBar from '@/components/home/DaySelectionBar';
import { useSelectedDate } from '@/hooks/useSelectedDate';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import * as SQLite from 'expo-sqlite';


export default function HomeScreen() {
    const db = SQLite.useSQLiteContext()

    const {incrementDate, decrementDate} = useSelectedDate();

    return (
        <GestureRecognizer 
            onSwipeLeft={decrementDate}
            onSwipeRight={incrementDate}
        >
            <DaySelectionBar/>
        </GestureRecognizer>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    icon: {
      paddingLeft: 10
    },
    iconContainer: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      width: 120
    }
});