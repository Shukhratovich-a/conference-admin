import { Edit, ImageField, ImageInput, SaveButton, TabbedForm, TextInput, Toolbar, required } from "react-admin";
import { RichTextInput } from "ra-input-rich-text";

export const EditHomepage = ({ ...props }) => {
  return (
    <Edit redirect={false} {...props}>
      <TabbedForm
        toolbar={
          <Toolbar>
            <SaveButton label="Save" />
          </Toolbar>
        }
      >
        <TabbedForm.Tab label="Main">
          <ImageInput source="poster" label="Poster" accept="image/*" validate={required()}>
            <ImageField
              source="src"
              sx={{
                "& img": {
                  maxWidth: "auto !important",
                  width: "100% !important",
                  maxHeight: "200px !important",
                  height: "auto !important",
                  objectFit: "contain",
                },
              }}
            />
          </ImageInput>
        </TabbedForm.Tab>

        <TabbedForm.Tab label="Uzbek">
          <TextInput source="titleUz" label="Title" validate={required()} fullWidth />

          <RichTextInput source="mainTextUz" label="Main text" validate={required()} fullWidth />
        </TabbedForm.Tab>

        <TabbedForm.Tab label="English">
          <TextInput source="titleEn" label="Title" validate={required()} fullWidth />

          <RichTextInput source="mainTextEn" label="Main text" validate={required()} fullWidth />
        </TabbedForm.Tab>

        <TabbedForm.Tab label="Russian">
          <TextInput source="titleRu" label="Title" validate={required()} fullWidth />

          <RichTextInput source="mainTextRu" label="Main text" validate={required()} fullWidth />
        </TabbedForm.Tab>
      </TabbedForm>
    </Edit>
  );
};
