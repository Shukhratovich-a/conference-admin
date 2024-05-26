import { SimpleForm, Edit, TextInput } from "react-admin";

export const EditOrganizerRole = ({ ...props }) => {
  return (
    <Edit redirect={false} {...props}>
      <SimpleForm>
        <TextInput source="titleEn" fullWidth />
        <TextInput source="titleRu" fullWidth />
        <TextInput source="titleUz" fullWidth />
      </SimpleForm>
    </Edit>
  );
};
