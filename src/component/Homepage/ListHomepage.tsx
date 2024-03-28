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

        <TextField source="mainTextEn" label="Main text" />
        <TextField source="mainTextRu" label="Main text" />
        <TextField source="mainTextUz" label="Main text" />

        <DateField source="createAt" label="Publication date" />

        <DateField source="updateAt" label="Last update date" />

        <ShowButton />
        <EditButton />
      </Datagrid>
    </List>
  );
};
