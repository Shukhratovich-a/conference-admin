import {
  DateField,
  EditButton,
  PrevNextButtons,
  Show,
  SimpleShowLayout,
  TextField,
  TopToolbar,
  CreateButton,
  ListButton,
} from "react-admin";

export const ShowHomepage = ({ ...props }) => {
  return (
    <Show
      actions={
        <TopToolbar>
          <PrevNextButtons linkType="show" />
          <ListButton />
          <CreateButton />
          <EditButton />
        </TopToolbar>
      }
      {...props}
    >
      <SimpleShowLayout>
        <TextField source="id" label="Id" />

        <TextField source="mainTextEn" label="Main text" />
        <TextField source="mainTextRu" label="Main text" />
        <TextField source="mainTextUz" label="Main text" />

        <DateField source="createAt" label="Publication date" />

        <DateField source="updateAt" label="Last update date" />
      </SimpleShowLayout>
    </Show>
  );
};
