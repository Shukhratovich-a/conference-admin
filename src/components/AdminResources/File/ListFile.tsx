import { Datagrid, FileField, List, TextField } from "react-admin";

export const ListFile = ({ ...props }) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="name" label="Name" />

        <TextField source="download" label="Download link" />

        <FileField source="download" label="Download" title="Download" target="_blank" />
      </Datagrid>
    </List>
  );
};
