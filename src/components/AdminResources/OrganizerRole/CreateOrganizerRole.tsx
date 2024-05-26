import { SimpleForm, Create, TextInput, required } from "react-admin";

export const CreateOrganizerRole = ({ ...props }) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="titleEn" fullWidth validate={required()} />
        <TextInput source="titleRu" fullWidth validate={required()} />
        <TextInput source="titleUz" fullWidth validate={required()} />
      </SimpleForm>
    </Create>
  );
};
