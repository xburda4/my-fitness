import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

type IconWithTextProps = {
    iconName: string,
    description: string,
    setShowModalFunc: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function IconWithText(props: IconWithTextProps) {
    return <View style={styles.container} onTouchStart={() => {
        props.setShowModalFunc(true)
    }}>
        <Icon name={props.iconName}/>
        <Text style={styles.text}>{props.description}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        //position: 'absolute',
        bottom: 0,
    },
    text: {
        textAlign: 'center',
    }
})