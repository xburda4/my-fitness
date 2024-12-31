import React from 'react';
import {View, StyleSheet} from 'react-native';

type DividerProps = {
 width?: number;
 orientation?: 'horizontal' | 'vertical';
 color?: string;
 dividerStyle?: any;
}

export default function Divider(props: DividerProps) {
 const dividerStyles = [
   {width: props.orientation === 'horizontal' ? '100%' : props.width},
   {height: props.orientation === 'vertical' ? '100%' : props.width},
   {backgroundColor: props.color},
   props.dividerStyle,
 ];

 return <View style={dividerStyles} />;
};

export function HorizontalDivider() {
    return <View/>
}

const styles = StyleSheet.create({})