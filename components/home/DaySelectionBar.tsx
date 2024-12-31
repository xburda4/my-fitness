import { View, StyleSheet, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { useSelectedDate } from '@/hooks/useSelectedDate';

type HomeScreenProps = {
    selectedDate: Date,
    onLeftButtonPress: () => void,
    onRightButtonPress: () => void,
}

export default function DaySelectionBar(props: HomeScreenProps) {
    let dateString = 'Today'
    
    if (props.selectedDate.toDateString() !== (new Date()).toDateString()) {
        dateString = props.selectedDate.toDateString();
    }

    return (<View style={styles.container}>
        <Icon style={styles.icon} onPress={props.onLeftButtonPress} name='arrow-back'/>
        <Text style={styles.centerText}>{dateString}</Text>
        <Icon style={styles.icon} onPress={props.onRightButtonPress} name='arrow-forward'/>
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