import {
  Datagrid,
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  TextField,
  DateField,
  FileField,
  ReferenceField,
} from "react-admin";

export const ListArticle = ({ ...props }) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" label="Id" />

        <TextField source="title" label="Title" sortable={false} />

        <FileField source="file" label="Article" title="Download" target="_blanc" sortable={false} />

        <ReferenceField source="section.id" reference="section" label="Section" sortable sortBy="section">
          <TextField source="titleRu" label="Title" />
        </ReferenceField>

        {/* <ReferenceField source="user.id" reference="user" label="User">
          <TextField source="titleRu" label="Title" />
        </ReferenceField> */}

        <DateField source="createAt" label="Publication date" />

        <DateField source="updateAt" label="Last update date" />

        <ShowButton />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};
