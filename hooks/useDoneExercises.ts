import { useState } from 'react';
import * as SQLite from 'expo-sqlite';

class DoneExercises {

}

export function useDoneExercices() {
    const db = SQLite.useSQLiteContext()

    const finishedExercises = db.getFirstSync<number>('SELECT COALESCE(wasActive, 0) FROM exercise_days WHERE date = (?)', `${(new Date()).getFullYear()}-${(new Date()).getUTCMonth()+1}-${(new Date()).getDate()+1}`)
    const [wasActive, updateWasActive] = useState(finishedExercises)

    const refreshFinishedExercises = (date: Date) => {
        const isActive = db.getFirstSync<number>('SELECT COALESCE(wasActive, 0) FROM exercise_days WHERE date = (?)', `${date.getFullYear()}-${date.getUTCMonth()+1}-${date.getDate()}`);
        updateWasActive(isActive!);
        console.log(`${date.toDateString()} - ${isActive?.toString()}`);
    }

    return {wasActive, refreshFinishedExercises}
}