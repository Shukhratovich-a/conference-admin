import {
  Datagrid,
  DeleteButton,
  EditButton,
  ImageField,
  List,
  ShowButton,
  TextField,
  useLocaleState,
} from "react-admin";

export const ListSpeaker = ({ ...props }) => {
  const [locale] = useLocaleState();

  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" label="Id" />

        <ImageField
          source="image"
          sx={{ "& img": { maxWidth: 100, maxHeight: 100, height: "100px !important", width: "100px !important" } }}
        />

        <TextField source="name" label="Name" />

        {locale === "ru" ? (
          <TextField source="degreeRu" label="Degree" />
        ) : locale === "en" ? (
          <TextField source="degreeEn" label="Degree" />
        ) : (
          <TextField source="degreeUz" label="Degree" />
        )}

        {locale === "ru" ? (
          <TextField source="specialtyRu" label="Specialty" />
        ) : locale === "en" ? (
          <TextField source="specialtyEn" label="Specialty" />
        ) : (
          <TextField source="specialtyUz" label="Specialty" />
        )}

        <TextField source="website" label="Website" />

        <ShowButton />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};
