import { TabbedForm, Create, TextInput, required, useLocaleState, ReferenceInput, SelectInput } from "react-admin";

export const CreateCommittee = ({ ...props }) => {
  const [locale] = useLocaleState();

  return (
    <Create {...props}>
      <TabbedForm>
        <TabbedForm.Tab label="Committee type">
          <ReferenceInput source="committeeRoleId" reference="committee-role">
            <SelectInput
              validate={required()}
              optionText={locale === "ru" ? "titleRu" : locale === "tr" ? "titleTr" : "titleEn"}
              label="Committee type"
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

        <TabbedForm.Tab label="Arabic">
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
    </Create>
  );
};
