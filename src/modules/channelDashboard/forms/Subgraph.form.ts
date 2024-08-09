import { useFormik } from 'formik';
import * as Yup from 'yup';

import { getRequiredFieldMessage } from 'common';

const subgraphFormValidation = Yup.object().shape({
  subgraphId: Yup.string().required(getRequiredFieldMessage('Subgraph Id')),
  pollTime: Yup.string()
    .required(getRequiredFieldMessage('Poll Time'))
    .matches(/^\d+$/, 'Must be a valid timestamp in seconds') // Ensure pollTime is a number
    .test('is-valid-timestamp', 'Invalid timestamp format', (value) => {
      const timestamp = parseInt(value, 10);
      return !isNaN(timestamp) && timestamp > 0;
    })
});

type createSubgraphFormProps = {
  handleAddSubgraph: () => void;
};

type CreateSubgraphFormType = {
  subgraphId: string;
  pollTime: string ;
}

export const createSubgraphForm = ({ handleAddSubgraph }: createSubgraphFormProps): ReturnType<typeof useFormik<CreateSubgraphFormType>> => {
  return useFormik<CreateSubgraphFormType>({
    initialValues: {
      subgraphId: '',
      pollTime: ''
    },
    validationSchema: subgraphFormValidation,
    onSubmit: () => {
      handleAddSubgraph();
    }
  });
};