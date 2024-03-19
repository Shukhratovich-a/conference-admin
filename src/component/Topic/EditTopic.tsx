import { SimpleForm, Edit, TextInput } from "react-admin";

export const EditTopic = ({ ...props }) => {
  return (
    <Edit redirect={false} {...props}>
      <SimpleForm>
        <TextInput source="title" fullWidth />
      </SimpleForm>
    </Edit>
  );
};
