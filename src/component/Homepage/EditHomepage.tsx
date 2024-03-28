import { SimpleForm, Edit, TextInput } from "react-admin";

export const EditHomepage = ({ ...props }) => {
  return (
    <Edit redirect={false} {...props}>
      <SimpleForm>
        <TextInput source="mainTextEn" label="Main text" fullWidth />
        <TextInput source="mainTextRu" label="Main text" fullWidth />
        <TextInput source="mainTextUz" label="Main text" fullWidth />
      </SimpleForm>
    </Edit>
  );
};
