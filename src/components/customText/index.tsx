import React from 'react';
import { Text, TextProps, TextStyle } from 'react-native';
import { styles } from './customtext.styles';

interface CustomTextProps extends TextProps {
  children: React.ReactNode;
  style?: TextStyle | TextStyle[];
}

const CustomText: React.FC<CustomTextProps> = ({
  children,
  style,
  ...props
}) => {
  return (
    <Text style={[styles.text, style]} {...props}>
      {children}
    </Text>
  );
};

export default CustomText;
