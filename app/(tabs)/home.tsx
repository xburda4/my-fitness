import DaySelectionBar from '@/components/home/DaySelectionBar';
import { useSelectedDate } from '@/hooks/useSelectedDate';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import * as SQLite from 'expo-sqlite';


export default function HomeScreen() {
    const db = SQLite.useSQLiteContext()

    const {selectedDate, incrementDate, decrementDate} = useSelectedDate();

    const res = await db.runAsync('SELECT wasActive FROM exercise_days WHERE date = (?)', `${selectedDate.getFullYear()}-${selectedDate.getUTCMonth()}-${selectedDate.getDate()}`)

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