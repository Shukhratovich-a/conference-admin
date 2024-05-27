import {
  Datagrid,
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  TextField,
  DateField,
  useLocaleState,
  ReferenceField,
} from "react-admin";

export const ListOrganizer = ({ ...props }) => {
  const [locale] = useLocaleState();

  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" label="Id" />

        {locale === "en" ? (
          <TextField source="nameEn" label="Name" />
        ) : locale === "ru" ? (
          <TextField source="nameRu" label="Name" />
        ) : (
          <TextField source="nameUz" label="Name" />
        )}

        {locale === "en" ? (
          <TextField source="specialtyEn" label="Specialty" />
        ) : locale === "ru" ? (
          <TextField source="specialtyRu" label="Specialty" />
        ) : (
          <TextField source="specialtyUz" label="Specialty" />
        )}

        {locale === "en" ? (
          <TextField source="countryEn" label="Country" />
        ) : locale === "ru" ? (
          <TextField source="countryRu" label="Country" />
        ) : (
          <TextField source="countryUz" label="Country" />
        )}

        <ReferenceField source="organizerRole.id" reference="organizer-role" label="Organizer type">
          {locale === "en" ? (
            <TextField source="titleEn" />
          ) : locale === "ru" ? (
            <TextField source="titleRu" />
          ) : (
            <TextField source="titleUz" />
          )}
        </ReferenceField>

        <DateField source="createAt" label="Publication date" />

        <DateField source="updateAt" label="Last update date" />

        <ShowButton />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};
