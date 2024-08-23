import { useMemo, useState } from 'react';

import { Box, Text, TextInput } from 'blocks';

import Checkbox from 'components/reusables/checkbox/Checkbox';

import InputSlider from 'components/reusables/sliders/InputSlider';
import RangeSlider from 'components/reusables/sliders/RangeSlider';

import { useEditNotificationSettingsForm } from '../EditNotificationSetting.form';

const NotificationSettingsRangeSelector = () => {
  const { values: formValues, handleChange, setFieldValue } = useEditNotificationSettingsForm();

  const showPreview = useMemo(() => {
    return (
      formValues.rangelowerlimit > 0 &&
      formValues.rangeupperlimit > 0 &&
      (formValues.enableMultiRange
        ? formValues.multirangelowerlimit > 0 && formValues.multirangeupperlimit > 0
        : formValues.defaultValue > 0) &&
      formValues.sliderStepValue > 0 &&
      Number(formValues.rangelowerlimit) <= Number(formValues.rangeupperlimit) &&
      Number(formValues.sliderStepValue) > 0 &&
      Number(formValues.sliderStepValue) <= Number(formValues.rangeupperlimit) - Number(formValues.rangelowerlimit) &&
      (formValues.enableMultiRange
        ? Number(formValues.multirangelowerlimit) >= Number(formValues.rangelowerlimit) &&
          Number(formValues.multirangeupperlimit) <= Number(formValues.rangeupperlimit) &&
          Number(formValues.multirangeupperlimit) > Number(formValues.multirangelowerlimit)
        : Number(formValues.defaultValue) >= Number(formValues.rangelowerlimit) &&
          Number(formValues.defaultValue) <= Number(formValues.rangeupperlimit))
    );
  }, [
    formValues.rangelowerlimit,
    formValues.rangeupperlimit,
    formValues.defaultValue,
    formValues.sliderStepValue,
    formValues.multirangelowerlimit,
    formValues.multirangeupperlimit,
    formValues.enableMultiRange,
  ]);

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
          alignItems="center"
        >
          <TextInput
            placeholder="e.g.0"
            type="number"
            value={formValues.rangelowerlimit}
            onChange={handleChange('rangelowerlimit')}
          />
          <Text variant="bm-regular">to</Text>
          <TextInput
            placeholder="e.g.10"
            type="number"
            value={formValues.rangeupperlimit}
            onChange={(e) => {
              setFieldValue('rangeupperlimit', e.target.value);
            }}
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
            alignItems="center"
          >
            <TextInput
              placeholder="e.g.0"
              type="number"
              value={formValues.multirangelowerlimit}
              onChange={(e) => {
                setFieldValue('multirangelowerlimit', e.target.value);
                setSliderPreviewStartVal(Number(e.target.value));
              }}
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
            />
          </Box>
        </Box>
      )}

      <Box>
        <TextInput
          placeholder="e.g.0"
          type="number"
          value={formValues.sliderStepValue}
          onChange={(e) => {
            handleChange('sliderStepValue');
            setFieldValue('sliderStepValue', e.target.value);
          }}
          label="Slider Step Value"
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
