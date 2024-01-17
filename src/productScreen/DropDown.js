import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { View, Text } from 'react-native';
const Dropdown = () => {
    const [selectedValue, setSelectedValue] = useState(null);
    const placeholder = {
        label: 'Select an option...',
        value: null,
    };
    const options = [
        { label: '50 mg', value: '50 mg' },
        { label: '100 mg', value: '100 mg' },
        { label: '150 mg', value: '150 mg' },
        { label: '200 mg', value: '200 mg' },
    ];
    return (
        <View>
            <RNPickerSelect
                placeholder={placeholder}
                items={options}
                onValueChange={(value) => setSelectedValue(value)}
                value={selectedValue}
            />
            {selectedValue && <Text>Selected: {selectedValue}</Text>}
        </View>
    );
};
export default Dropdown;