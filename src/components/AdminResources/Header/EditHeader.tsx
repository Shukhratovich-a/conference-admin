import { Edit, ImageField, ImageInput, SaveButton, TabbedForm, Toolbar, required } from "react-admin";
import { RichTextInput } from "ra-input-rich-text";

export const EditHeader = ({ ...props }) => {
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
          <ImageInput source="logo" label="Logo" accept="image/*" validate={required()}>
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
          <RichTextInput source="mainTextUz" label="Main text" validate={required()} fullWidth />
        </TabbedForm.Tab>

        <TabbedForm.Tab label="English">
          <RichTextInput source="mainTextEn" label="Main text" validate={required()} fullWidth />
        </TabbedForm.Tab>

        <TabbedForm.Tab label="Arabic">
          <RichTextInput source="mainTextRu" label="Main text" validate={required()} fullWidth />
        </TabbedForm.Tab>
      </TabbedForm>
    </Edit>
  );
};
