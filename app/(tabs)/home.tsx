import DaySelectionBar from '@/components/home/DaySelectionBar';
import { useSelectedDate } from '@/hooks/useSelectedDate';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import * as SQLite from 'expo-sqlite';
import WorkoutScreen from '@/components/home/WorkoutScreen';
import EmptyWorkoutScreen from '@/components/home/EmptyWorkoutScreen';
import PickExerciseModal from '@/components/home/PickExerciseModal';

class ExerciseDay {
  public wasActive: number;
  public exercises?: string[];
  public date: Date;

  constructor(wasActive: number, exercises: string[], date: Date) {
    this.wasActive = wasActive
    this.exercises = exercises;
    this.date = date
  }
};

export default function HomeScreen() {
    const db = SQLite.useSQLiteContext()
    const {selectedDate, incrementDate, decrementDate} = useSelectedDate();
    
    const [isActiveDay, updateIsActiveDay] = useState(0);

    useEffect(() => {
      const fetchAndSetData = async () => {
        const res = await db.getFirstAsync<ExerciseDay>('SELECT wasActive, date FROM exercise_days WHERE date = ?', `${selectedDate.getFullYear()}-${selectedDate.getUTCMonth()+1}-${selectedDate.getDate()}`);
        if (res) {
          updateIsActiveDay(res.wasActive);
        } else {
          updateIsActiveDay(0);
        }
        
      }
      void fetchAndSetData();
    }, [selectedDate])

    const [isExerciseModalVisisble, setExerciseModalVisible] = useState(false)

    return (
        <GestureRecognizer 
            onSwipeLeft={decrementDate}
            onSwipeRight={incrementDate}
            style={styles.container}
        >
            <DaySelectionBar selectedDate={selectedDate} onLeftButtonPress={decrementDate} onRightButtonPress={incrementDate}/>
            {isActiveDay == 1
            ? <WorkoutScreen />
            : <EmptyWorkoutScreen setShowModalFunc={setExerciseModalVisible}/>}
            <PickExerciseModal 
              isVisible={isExerciseModalVisisble} 
              setShowModalFunc={setExerciseModalVisible}
            />
        </GestureRecognizer>
    );
}

const styles = StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
      backgroundColor: 'beige',
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