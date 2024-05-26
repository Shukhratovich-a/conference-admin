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
  ImageField,
} from "react-admin";

export const ShowSpeaker = ({ ...props }) => {
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

        <ImageField
          source="image.src"
          sx={{ "& img": { maxWidth: 100, maxHeight: 100, height: "100px !important", width: "100px !important" } }}
        />

        <TextField source="name" />
        <TextField source="website" />

        <TextField source="specialty" />

        <TextField source="description" />

        <DateField source="createAt" label="Publication date" />
        <DateField source="updateAt" label="Last update date" />
      </SimpleShowLayout>
    </Show>
  );
};
