import {
  DateField,
  DeleteButton,
  EditButton,
  PrevNextButtons,
  Show,
  SimpleShowLayout,
  TextField,
  TopToolbar,
  CreateButton,
  ListButton,
  useLocaleState,
  ReferenceField,
} from "react-admin";

export const ShowOrganizer = ({ ...props }) => {
  const [locale] = useLocaleState();

  return (
    <Show
      actions={
        <TopToolbar>
          <PrevNextButtons linkType="show" />
          <ListButton />
          <CreateButton />
          <EditButton />
          <DeleteButton />
        </TopToolbar>
      }
      {...props}
    >
      <SimpleShowLayout>
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

        {locale === "en" ? (
          <TextField source="cityEn" label="city" />
        ) : locale === "ru" ? (
          <TextField source="cityRu" label="city" />
        ) : (
          <TextField source="cityUz" label="city" />
        )}

        {locale === "en" ? (
          <TextField source="roleEn" label="role" />
        ) : locale === "ru" ? (
          <TextField source="roleRu" label="role" />
        ) : (
          <TextField source="roleUz" label="role" />
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
      </SimpleShowLayout>
    </Show>
  );
};
