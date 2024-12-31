import { View, StyleSheet, Text } from 'react-native';

type BodyPartModalItemProps = {
    title: string,
}

export default function BodyPartModalItem(props: BodyPartModalItemProps) {
    return <View style={styles.container}>
        <View style={styles.title}>
            <Text>{props.title}</Text></View>
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