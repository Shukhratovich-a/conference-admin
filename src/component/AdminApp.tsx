import { Admin, Resource } from "react-admin";

import { dataProvider } from "@/dataProvider";
import { authProvider } from "@/authProvider";

import { ListTopic } from "./Topic/ListTopic";
import { CreateTopic } from "./Topic/CreateTopic";
import { EditTopic } from "./Topic/EditTopic";
import { ShowTopic } from "./Topic/ShowTopic";

const AdminApp = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource
      name="topic"
      list={ListTopic}
      create={CreateTopic}
      edit={EditTopic}
      show={ShowTopic}
    />
  </Admin>
);

export default AdminApp;
