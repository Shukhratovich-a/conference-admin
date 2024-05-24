import {
  Datagrid,
  EditButton,
  List,
  ShowButton,
  TextField,
  DateField,
  RichTextField,
  useLocaleState,
} from "react-admin";

export const ListAccommodation = ({ ...props }) => {
  const [locale] = useLocaleState();

  return (
    <List {...props}>
      <Datagrid>
        <TextField
          source="id"
          label="Id"
          sx={{
            "& img": {
              maxWidth: "auto !important",
              width: "100% !important",
              maxHeight: "100px !important",
              height: "auto !important",
              objectFit: "contain",
            },
          }}
        />

        {locale === "en" ? (
          <RichTextField source="bodyEn" label="Main text" />
        ) : locale === "ru" ? (
          <RichTextField source="bodyRu" label="Main text" />
        ) : (
          <RichTextField source="bodyUz" label="Main text" />
        )}

        <DateField source="createAt" label="Publication date" />

        <DateField source="updateAt" label="Last update date" />

        <ShowButton />
        <EditButton />
      </Datagrid>
    </List>
  );
};
