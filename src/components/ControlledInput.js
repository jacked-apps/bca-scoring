import React from 'react';
import { TextInput, Text, View } from 'react-native';
import { Controller } from 'react-hook-form';

export const ControlledInput = ({
  control,
  name,
  label,
  defaultValue,
  placeholder,
  errors,
  ...props
}) => {
  return (
    <View style={{ marginBottom: 20, marginHorizontal: 15 }}>
      <Text>{label}</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={placeholder}
            style={{ borderColor: 'gray', borderWidth: 1, padding: 8 }}
            {...props}
          />
        )}
        name={name}
        defaultValue={defaultValue}
      />
      {errors?.[name] && <Text>{errors?.[name].messages}</Text>}
    </View>
  );
};
