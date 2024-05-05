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
  RichTextField,
  ImageField,
} from "react-admin";

export const ShowUser = ({ ...props }) => {
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

        <TextField source="firstName" />
        <TextField source="lastName" />
        <TextField source="gender" />
        <TextField source="country" />
        <TextField source="institute" />
        <TextField source="specialty" />
        <TextField source="role" />
        <TextField source="postalCode" />

        <TextField source="phone" />
        <TextField source="email" />

        <ImageField
          source="image.src"
          label="Image"
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

        <RichTextField source="description" />

        <DateField source="createAt" label="Publication date" />

        <DateField source="updateAt" label="Last update date" />
      </SimpleShowLayout>
    </Show>
  );
};
