import { View, Text, StyleSheet } from "react-native";
import IconWithText from "./IconWithText";

type EmptyWorkoutScreenProps = {
    setShowModalFunc: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function EmptyWorkoutScreen(props: EmptyWorkoutScreenProps) {
    return <View style={styles.container}>
        <Text style={styles.text}>Workout Log Empty</Text>
        <IconWithText iconName="add" description="Add new workout" setShowModalFunc={props.setShowModalFunc}/>
    </View>
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        height: '85%',
        textAlignVertical: 'center',
    },
});