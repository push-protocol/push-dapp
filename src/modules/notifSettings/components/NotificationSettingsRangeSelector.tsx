import { useMemo, useState } from 'react';

import { Box, Text, TextInput } from 'blocks';

import Checkbox from 'components/reusables/checkbox/Checkbox';

import InputSlider from 'components/reusables/sliders/InputSlider';
import RangeSlider from 'components/reusables/sliders/RangeSlider';

import { useEditNotificationSettingsForm } from '../EditNotificationSetting.form';

const NotificationSettingsRangeSelector = () => {
  const { values: formValues, handleChange, setFieldValue, errors, touched } = useEditNotificationSettingsForm();

  const showPreview = useMemo(() => {
    const {
      rangelowerlimit,
      rangeupperlimit,
      enableMultiRange,
      multirangelowerlimit,
      multirangeupperlimit,
      defaultValue,
      sliderStepValue,
    } = formValues;

    const isRangeValid = Number(rangelowerlimit) > 0 && Number(rangeupperlimit) > 0;
    const isSliderStepValid =
      Number(sliderStepValue) > 0 && Number(sliderStepValue) <= Number(rangeupperlimit) - Number(rangelowerlimit);

    const isDefaultValid =
      !enableMultiRange &&
      Number(defaultValue) >= Number(rangelowerlimit) &&
      Number(defaultValue) <= Number(rangeupperlimit);

    const isMultiRangeValid =
      enableMultiRange &&
      Number(multirangelowerlimit) >= Number(rangelowerlimit) &&
      Number(multirangeupperlimit) <= Number(rangeupperlimit) &&
      Number(multirangeupperlimit) > Number(multirangelowerlimit);

    return isRangeValid && isSliderStepValid && (isMultiRangeValid || isDefaultValid);
  }, [formValues]);

  const [sliderPreviewVal, setSliderPreviewVal] = useState<number>(formValues.defaultValue);
  const [sliderPreviewStartVal, setSliderPreviewStartVal] = useState<number>(formValues.multirangelowerlimit);
  const [sliderPreviewEndVal, setSliderPreviewEndVal] = useState<number>(formValues.multirangeupperlimit);

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        gap="spacing-xxs"
      >
        <Text variant="h6-bold">Range Values</Text>
        <Box
          display="flex"
          gap="spacing-xxs"
          width="100%"
          alignItems="baseline"
        >
          <TextInput
            placeholder="e.g.0"
            type="number"
            value={formValues.rangelowerlimit}
            onChange={handleChange('rangelowerlimit')}
            error={touched.rangelowerlimit && Boolean(errors.rangelowerlimit)}
            errorMessage={touched.rangelowerlimit ? errors.rangelowerlimit : ''}
          />
          <Text variant="bm-regular">to</Text>
          <TextInput
            placeholder="e.g.10"
            type="number"
            value={formValues.rangeupperlimit}
            onChange={(e) => {
              setFieldValue('rangeupperlimit', e.target.value);
            }}
            error={touched.rangeupperlimit && Boolean(errors.rangeupperlimit)}
            errorMessage={touched.rangeupperlimit ? errors.rangeupperlimit : ''}
          />
        </Box>
      </Box>

      <Box
        display="flex"
        gap="spacing-xxs"
      >
        <Checkbox
          checked={formValues.enableMultiRange}
          onChange={() => setFieldValue('enableMultiRange', !formValues.enableMultiRange)}
        />
        <Box>
          <Text
            ellipsis
            variant="h6-bold"
          >
            Enable Multi Range
          </Text>
          <Text variant="bes-regular">User can select a range of values in the slider</Text>
        </Box>
      </Box>

      {!formValues.enableMultiRange && (
        <TextInput
          placeholder="e.g.0"
          type="number"
          value={formValues.defaultValue}
          onChange={(e) => {
            setSliderPreviewVal(Number(e.target.value));
            setFieldValue('defaultValue', e.target.value);
          }}
          label="Default Value"
          error={touched.defaultValue && Boolean(errors.defaultValue)}
          errorMessage={touched.defaultValue ? errors.defaultValue : ''}
        />
      )}

      {formValues.enableMultiRange && (
        <Box
          display="flex"
          flexDirection="column"
          gap="spacing-xxs"
        >
          <Text variant="h6-bold">Range Values</Text>
          <Box
            display="flex"
            gap="spacing-xxs"
            width="100%"
            alignItems="baseline"
          >
            <TextInput
              placeholder="e.g.0"
              type="number"
              value={formValues.multirangelowerlimit}
              onChange={(e) => {
                setFieldValue('multirangelowerlimit', e.target.value);
                setSliderPreviewStartVal(Number(e.target.value));
              }}
              error={touched.multirangelowerlimit && Boolean(errors.multirangelowerlimit)}
              errorMessage={touched.multirangelowerlimit ? errors.multirangelowerlimit : ''}
            />
            <Text variant="bm-regular">to</Text>
            <TextInput
              placeholder="e.g.10"
              type="number"
              value={formValues.multirangeupperlimit}
              onChange={(e) => {
                setFieldValue('multirangeupperlimit', e.target.value);
                setSliderPreviewEndVal(Number(e.target.value));
              }}
              error={touched.multirangeupperlimit && Boolean(errors.multirangeupperlimit)}
              errorMessage={touched.multirangeupperlimit ? errors.multirangeupperlimit : ''}
            />
          </Box>
        </Box>
      )}

      <Box>
        <TextInput
          placeholder="e.g.0"
          type="number"
          value={formValues.sliderStepValue}
          // onChange={(e) => {
          //   handleChange('sliderStepValue');
          //   setFieldValue('sliderStepValue', e.target.value);
          // }}
          onChange={handleChange('sliderStepValue')}
          label="Slider Step Value"
          error={touched.sliderStepValue && Boolean(errors.sliderStepValue)}
          errorMessage={touched.sliderStepValue ? errors.sliderStepValue : ''}
        />
      </Box>

      {showPreview && (
        <Box
          display="flex"
          flexDirection="column"
          gap="spacing-xxs"
        >
          <Box>Preview</Box>

          {!formValues.enableMultiRange && (
            <Box
              display="flex"
              gap="spacing-xxs"
              alignItems="center"
            >
              <Box>{formValues.rangelowerlimit}</Box>
              <Box width="100%">
                <InputSlider
                  val={sliderPreviewVal}
                  min={Number(formValues.rangelowerlimit)}
                  max={Number(formValues.rangeupperlimit)}
                  step={Number(formValues.sliderStepValue)}
                  defaultVal={Number(formValues.defaultValue)}
                  onChange={({ x }) => {
                    setSliderPreviewVal(x);
                  }}
                  preview={true}
                />
              </Box>
              <Box>{formValues.rangeupperlimit}</Box>
            </Box>
          )}

          {formValues.enableMultiRange && (
            <Box
              display="flex"
              gap="spacing-xxs"
              alignItems="center"
              backgroundColor="surface-secondary"
              padding="spacing-xs"
              borderRadius="radius-xxs"
            >
              <Box>{formValues.rangelowerlimit}</Box>
              <Box width="100%">
                <RangeSlider
                  startVal={sliderPreviewStartVal}
                  endVal={sliderPreviewEndVal}
                  min={Number(formValues.rangelowerlimit)}
                  max={Number(formValues.rangeupperlimit)}
                  step={Number(formValues.sliderStepValue)}
                  defaultStartVal={Number(formValues.multirangelowerlimit)}
                  defaultEndVal={Number(formValues.multirangeupperlimit)}
                  onChange={({ startVal, endVal }) => {
                    setSliderPreviewStartVal(startVal);
                    setSliderPreviewEndVal(endVal);
                  }}
                  preview={true}
                />
              </Box>
              <Box>{formValues.rangeupperlimit}</Box>
            </Box>
          )}
        </Box>
      )}
    </>
  );
};

export { NotificationSettingsRangeSelector };
