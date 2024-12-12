import { View, StyleSheet, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { useSelectedDate } from '@/hooks/useSelectedDate';

type HomeScreenProps = {
    selDate: Date,
}

export default function DaySelectionBar() {
    let dateString = 'Today'
    const {selectedDate, incrementDate, decrementDate} = useSelectedDate()
    
    if (selectedDate.toDateString() !== (new Date()).toDateString()) {
        dateString = selectedDate.toDateString();
    }

    return (<View style={styles.container}>
        <Icon style={styles.icon} onPress={decrementDate} name='leftarrow'/>
        <Text style={styles.centerText}>{dateString}</Text>
        <Icon style={styles.icon} onPress={incrementDate} name='rightarrow'/>
    </View>);
}

const styles = StyleSheet.create({
    container: {
        height: 32,
        backgroundColor: 'lightblue',
        flexDirection: 'row',
    },
    centerText: {
        textAlign: 'center',
        marginVertical: 'auto',
        flex: 8,
    },
    icon: {
        height: 30,
        flex: 1,
    }
})