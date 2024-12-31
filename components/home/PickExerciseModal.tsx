import { Modal, Text, StyleSheet, View, TouchableOpacity, FlatList } from 'react-native';
import { BodyParts } from '@/constants/BodyParts';
import BodyPartModalItem from './modal/BodyPartModalItem';
import Divider, { HorizontalDivider } from '../Divider';

type PickExerciseModalProps = {
    isVisible: boolean,
    setShowModalFunc: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function PickExerciseModal(props: PickExerciseModalProps) {
    return <Modal animationType='slide' visible={props.isVisible} transparent={true}>
        <View style={styles.modal} >
            <FlatList style={styles.list} data={BodyParts} renderItem={({item}) => <Text>{item}</Text>}
                ListFooterComponent={
                    <TouchableOpacity onPress={() => {
                        props.setShowModalFunc(false)
                    }} style={styles.button}>
                        <Text>Close</Text> 
                    </TouchableOpacity>}
                ItemSeparatorComponent={HorizontalDivider}
            />
        </View>
    </Modal>
}

const styles = StyleSheet.create({
    modal: {
        top: '15%',
        backgroundColor: 'white',
        height: '100%',
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
    },
    button: {
        padding: 'auto',
        backgroundColor: 'red',
        width: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        height: 36,
    },
    list: {
        
    }
})