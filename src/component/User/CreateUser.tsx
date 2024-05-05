import { RichTextInput } from "ra-input-rich-text";
import { SimpleForm, Create, TextInput, required, SelectInput, ImageInput, ImageField } from "react-admin";

export const CreateUser = ({ ...props }) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="firstName" fullWidth validate={required()} />
        <TextInput source="lastName" fullWidth validate={required()} />

        <SelectInput
          source="gender"
          choices={[
            { id: "male", name: "Male" },
            { id: "female", name: "Female" },
          ]}
          fullWidth
          validate={required()}
        />
        <SelectInput
          source="role"
          choices={[
            { id: "organizer", name: "Organizer" },
            { id: "participant", name: "Participant" },
            { id: "speaker", name: "Speaker" },
          ]}
          fullWidth
          validate={required()}
        />

        <TextInput source="country" fullWidth validate={required()} />
        <TextInput source="city" fullWidth validate={required()} />
        <TextInput source="institute" fullWidth validate={required()} />
        <TextInput source="specialty" fullWidth validate={required()} />
        <TextInput source="postalCode" fullWidth validate={required()} />

        <TextInput source="phone" fullWidth validate={required()} />
        <TextInput source="email" fullWidth validate={required()} />
        <TextInput source="password" fullWidth validate={required()} />

        <ImageInput source="image" label="Image" accept="image/*">
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

        <RichTextInput source="description" fullWidth />
      </SimpleForm>
    </Create>
  );
};
