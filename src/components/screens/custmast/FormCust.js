import React, { useState, useEffect, useContext } from 'react';
import { View, ScrollView } from 'react-native';
import { Button, TextInput } from 'MyCustomComponents';
import useAutoScroll from 'useAutoScroll';
import { Controller, FormContext, useForm } from 'react-hook-form';

function FormCust({ navigation }) {

  const { setScrollRef, scrollTracker, scrollTo, captureRef } = useAutoScroll();
  const useFormObj = useForm({
    'sampleInput':'Sample Default Value',
  });
  const { control, errors, clearError, setError, triggerValidation, getValues, setValue } = useFormObj;

  return (
    <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical="false"
          bounces="false"
          ref={setScrollRef}
        >
          <FormContext {...useFormObj}>
              {scrollTracker(
                  <Controller
                    as={
                      <TextInput
                        testID="sampleInput"
                        label='Sample Input'
                        accessible
                        validationMessage={
                          errors.landmark &&
                          errors.landmark.type === 'pattern' &&
                          'Invalid input'
                        }
                        ref={captureRef(`sampleInput`)}
                      />
                    }
                    name="sampleInput"
                    control={control}
                    rules={{
                      pattern: /[A-Za-z]{10}/,
                    }}
                    onChange={args => {
                      clearError('sampleInput');
                      return {
                        value: args[0].nativeEvent.text,
                      };
                    }}
                    customOnBlur={async () => {
                      await triggerValidation('sampleInput');
                    }}
                  />,
                'sampleInput'
              )}
              
                <Button
                  title='NEXT'
                  testID="nextButton"
                  accessibilityLabel='NEXT'
                  onPress={() => {
                    triggerValidation()
                      .then(() => {
                        const errorKeys = Object.keys(errors);
                        if (errorKeys.length > 0) scrollTo(errorKeys);
                        else submitData();
                      })
                      .catch(ignore);
                  }}
                  accessible
                />
          </FormContext>
        </ScrollView>
    </>
  );
}

export default  FormCust;