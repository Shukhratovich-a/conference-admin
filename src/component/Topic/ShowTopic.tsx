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
} from "react-admin";

export const ShowTopic = ({ ...props }) => {
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

        <TextField source="title" label="Title" />

        <DateField source="createAt" label="Publication date" />

        <DateField source="updateAt" label="Last update date" />
      </SimpleShowLayout>
    </Show>
  );
};
