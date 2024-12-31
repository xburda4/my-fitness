import { View, StyleSheet } from 'react-native';

type ExerciseItemProps = {
    title: string,
}

export default function ExerciseItem(props: ExerciseItemProps) {
    return <View style={styles.container}>
        <View style={styles.title}>{props.title}</View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        width: '90%',

    },
    title: {
        backgroundColor: 'teal',

    }
})