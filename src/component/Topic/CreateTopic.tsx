import { SimpleForm, Create, TextInput, required } from "react-admin";

export const CreateTopic = ({ ...props }) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="title" fullWidth validate={required()} />
      </SimpleForm>
    </Create>
  );
};
