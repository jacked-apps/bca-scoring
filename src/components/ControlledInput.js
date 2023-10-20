import React from 'react';
import { TextInput, Text, View } from 'react-native';
import { Controller } from 'react-hook-form';
import { InfoPopup } from './InfoPopup';

export const ControlledInput = ({
  control,
  name,
  label,
  defaultValue,
  placeholder,
  errors,
  info,
  ...props
}) => {
  return (
    <View style={{ marginBottom: 20, marginHorizontal: 15 }}>
      <View
        style={{
          flexDirection: 'row',
          height: 24,
          alignItems: 'flex-end',
        }}
      >
        <Text style={{ fontSize: 16 }}>{label}</Text>
        {info && <InfoPopup info={info} />}
      </View>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={placeholder}
            style={{
              borderColor: 'gray',
              borderWidth: 1,
              padding: 8,
              fontSize: 24,
            }}
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
