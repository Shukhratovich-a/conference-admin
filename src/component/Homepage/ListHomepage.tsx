import {
  Datagrid,
  EditButton,
  List,
  ShowButton,
  TextField,
  DateField,
  RichTextField,
  useLocaleState,
  ImageField,
} from "react-admin";

export const ListHomepage = ({ ...props }) => {
  const [locale] = useLocaleState();

  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" label="Id" />

        <ImageField
          source="poster.src"
          label="Poster"
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
          <TextField source="titleEn" label="Title" />
        ) : locale === "ru" ? (
          <TextField source="titleRu" label="Title" />
        ) : (
          <TextField source="titleUz" label="Title" />
        )}

        {locale === "en" ? (
          <RichTextField source="mainTextEn" label="Main text" />
        ) : locale === "ru" ? (
          <RichTextField source="mainTextRu" label="Main text" />
        ) : (
          <RichTextField source="mainTextUz" label="Main text" />
        )}

        <DateField source="createAt" label="Publication date" />

        <DateField source="updateAt" label="Last update date" />

        <ShowButton />
        <EditButton />
      </Datagrid>
    </List>
  );
};
