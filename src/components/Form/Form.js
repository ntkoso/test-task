import React from 'react';
import Wrapper from './styled/Form';
import jsonSchema from './schemas/json-schema.json';

const Form = () => <Wrapper schema={jsonSchema} showErrorList={false} />;

export default Form;