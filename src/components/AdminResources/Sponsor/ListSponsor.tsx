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

export const ListSponsor = ({ ...props }) => {
  const [locale] = useLocaleState();

  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" label="Id" />

        <ImageField
          source="image"
          sx={{ "& img": { maxWidth: 100, maxHeight: 100, height: "100px !important", width: "100px !important" } }}
        />

        {locale === "ru" ? (
          <TextField source="titleRu" label="Title" />
        ) : locale === "en" ? (
          <TextField source="titleEn" label="Title" />
        ) : (
          <TextField source="titleUz" label="Title" />
        )}

        <TextField source="website" label="Website" />

        <ShowButton />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};
