import { Edit, SaveButton, TabbedForm, Toolbar, required } from "react-admin";
import { RichTextInput } from "ra-input-rich-text";

export const EditVenue = ({ ...props }) => {
  return (
    <Edit redirect={false} {...props}>
      <TabbedForm
        toolbar={
          <Toolbar>
            <SaveButton label="Save" />
          </Toolbar>
        }
      >
        <TabbedForm.Tab label="Uzbek">
          <RichTextInput source="bodyUz" label="Main text" validate={required()} fullWidth />
        </TabbedForm.Tab>

        <TabbedForm.Tab label="English">
          <RichTextInput source="bodyEn" label="Main text" validate={required()} fullWidth />
        </TabbedForm.Tab>

        <TabbedForm.Tab label="Arabic">
          <RichTextInput source="bodyRu" label="Main text" validate={required()} fullWidth />
        </TabbedForm.Tab>
      </TabbedForm>
    </Edit>
  );
};
