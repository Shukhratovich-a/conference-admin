import { TabbedForm, Edit, TextInput, required, ReferenceInput, SelectInput, useLocaleState } from "react-admin";

export const EditOrganizer = ({ ...props }) => {
  const [locale] = useLocaleState();

  return (
    <Edit redirect={false} {...props}>
      <TabbedForm>
        <TabbedForm.Tab label="Organizer type">
          <ReferenceInput source="organizerRole.id" reference="organizer-role">
            <SelectInput
              validate={required()}
              optionText={locale === "ru" ? "titleRu" : locale === "tr" ? "titleTr" : "titleEn"}
              label="Organizer type"
            />
          </ReferenceInput>
        </TabbedForm.Tab>

        <TabbedForm.Tab label="English">
          <TextInput source="nameEn" fullWidth validate={required()} />
          <TextInput source="specialtyEn" fullWidth validate={required()} />
          <TextInput source="countryEn" fullWidth validate={required()} />
          <TextInput source="cityEn" fullWidth />
          <TextInput source="roleEn" fullWidth />
        </TabbedForm.Tab>

        <TabbedForm.Tab label="Russian">
          <TextInput source="nameRu" fullWidth validate={required()} />
          <TextInput source="specialtyRu" fullWidth validate={required()} />
          <TextInput source="countryRu" fullWidth validate={required()} />
          <TextInput source="cityRu" fullWidth />
          <TextInput source="roleRu" fullWidth />
        </TabbedForm.Tab>

        <TabbedForm.Tab label="Uzbek">
          <TextInput source="nameUz" fullWidth validate={required()} />
          <TextInput source="specialtyUz" fullWidth validate={required()} />
          <TextInput source="countryUz" fullWidth validate={required()} />
          <TextInput source="cityUz" fullWidth />
          <TextInput source="roleUz" fullWidth />
        </TabbedForm.Tab>
      </TabbedForm>
    </Edit>
  );
};
