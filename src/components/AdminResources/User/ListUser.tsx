import { Datagrid, DeleteButton, EditButton, List, ShowButton, TextField, DateField } from "react-admin";

export const ListUser = ({ ...props }) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" label="Id" />

        <TextField source="firstName" label="First name" sortable={false} />

        <TextField source="lastName" label="Last name" sortable={false} />

        <TextField source="country" label="Country" />

        <TextField source="trip" label="Trip" />

        <DateField source="createAt" label="Publication date" />

        <DateField source="updateAt" label="Last update date" />

        <ShowButton />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};
