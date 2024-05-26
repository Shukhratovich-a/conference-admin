import { TabbedForm, Edit, TextInput, required, ImageInput, ImageField } from "react-admin";

export const EditSpeaker = ({ ...props }) => {
  return (
    <Edit redirect={false} {...props}>
      <TabbedForm>
        <TabbedForm.Tab label="Main">
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

          <TextInput source="name" fullWidth validate={required()} />
          <TextInput source="website" fullWidth />
        </TabbedForm.Tab>

        <TabbedForm.Tab label="Uzbek">
          <TextInput source="descriptionUz" fullWidth />
          <TextInput source="specialtyUz" fullWidth validate={required()} />
          <TextInput source="degreeUz" fullWidth validate={required()} />
        </TabbedForm.Tab>

        <TabbedForm.Tab label="Russian">
          <TextInput source="descriptionRu" fullWidth />
          <TextInput source="specialtyRu" fullWidth validate={required()} />
          <TextInput source="degreeRu" fullWidth validate={required()} />
        </TabbedForm.Tab>

        <TabbedForm.Tab label="English">
          <TextInput source="descriptionEn" fullWidth />
          <TextInput source="specialtyEn" fullWidth validate={required()} />
          <TextInput source="degreeEn" fullWidth validate={required()} />
        </TabbedForm.Tab>
      </TabbedForm>
    </Edit>
  );
};
