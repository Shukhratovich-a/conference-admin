import { SimpleForm, Edit, TextInput, required, ImageInput, ImageField } from "react-admin";

export const EditSponsor = ({ ...props }) => {
  return (
    <Edit redirect={false} {...props}>
      <SimpleForm>
        <ImageInput source="image" label="Image" accept="image/*" validate={required()}>
          <ImageField
            source="src"
            title="title"
            sx={{
              "& img": {
                maxWidth: 200,
                maxHeight: 200,
                height: "200px !important",
                width: "200px !important",
              },
            }}
          />
        </ImageInput>

        <TextInput source="titleRu" fullWidth validate={required()} />
        <TextInput source="titleEn" fullWidth validate={required()} />
        <TextInput source="titleUz" fullWidth validate={required()} />

        <TextInput source="website" fullWidth validate={required()} />
      </SimpleForm>
    </Edit>
  );
};
