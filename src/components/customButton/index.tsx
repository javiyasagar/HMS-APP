import React from 'react';
import { Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import { styles } from './customebutton.styles';

interface CustomButtonProps {
  onPress?: () => void;
  disabled?: boolean;
  label?: string;
  buttonText?: TextStyle;
  buttonContainer?: ViewStyle;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  disabled,
  label,
  buttonText,
  buttonContainer,
  ...props
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[styles.buttonContainer, buttonContainer]}
      onPress={onPress}
      disabled={disabled}
      {...props}
    >
      <Text style={[styles.buttonText, buttonText]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
