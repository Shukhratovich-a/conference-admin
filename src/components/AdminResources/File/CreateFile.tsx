import { SimpleForm, Create, FileInput, required } from "react-admin";

export const CreateFile = ({ ...props }) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <FileInput source="file" label="File" validate={required()} />
      </SimpleForm>
    </Create>
  );
};
