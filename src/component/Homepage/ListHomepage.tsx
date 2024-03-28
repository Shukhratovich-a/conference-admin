import {
  Datagrid,
  EditButton,
  List,
  ShowButton,
  TextField,
  DateField,
} from "react-admin";

export const ListHomepage = ({ ...props }) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" label="Id" />

        <TextField source="titleEn" label="Title" />
        <TextField source="titleRu" label="Title" />
        <TextField source="titleUz" label="Title" />

        <DateField source="createAt" label="Publication date" />

        <DateField source="updateAt" label="Last update date" />

        <ShowButton />
        <EditButton />
      </Datagrid>
    </List>
  );
};
