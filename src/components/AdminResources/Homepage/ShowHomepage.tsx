import {
  DateField,
  EditButton,
  PrevNextButtons,
  Show,
  TextField,
  TopToolbar,
  RichTextField,
  TabbedShowLayout,
  ImageField,
} from "react-admin";

export const ShowHomepage = ({ ...props }) => {
  return (
    <Show
      actions={
        <TopToolbar>
          <PrevNextButtons linkType="show" />
          <EditButton />
        </TopToolbar>
      }
      {...props}
    >
      <TabbedShowLayout>
        <TabbedShowLayout.Tab label="Main">
          <TextField source="id" label="Id" />

          <ImageField
            source="poster.src"
            label="Poster"
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

          <DateField source="createAt" label="Publication date" />

          <DateField source="updateAt" label="Last update date" />
        </TabbedShowLayout.Tab>

        <TabbedShowLayout.Tab label="Uzbek">
          <TextField source="titleUz" label="Title" />

          <RichTextField source="mainTextUz" label="Main text" />
        </TabbedShowLayout.Tab>

        <TabbedShowLayout.Tab label="English">
          <TextField source="titleEn" label="Title" />

          <RichTextField source="mainTextEn" label="Main text" />
        </TabbedShowLayout.Tab>

        <TabbedShowLayout.Tab label="Russian">
          <TextField source="titleRu" label="Title" />

          <RichTextField source="mainTextRu" label="Main text" />
        </TabbedShowLayout.Tab>
      </TabbedShowLayout>
    </Show>
  );
};
