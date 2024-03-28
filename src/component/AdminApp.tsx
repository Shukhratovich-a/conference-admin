import { Admin, Resource } from "react-admin";

import { dataProvider } from "@/dataProvider";
import { authProvider } from "@/authProvider";

import { ListSection } from "./Section/ListSection";
import { CreateSection } from "./Section/CreateSection";
import { EditSection } from "./Section/EditSection";
import { ShowSection } from "./Section/ShowSection";

import { ListHomepage } from "./Homepage/ListHomepage";
import { EditHomepage } from "./Homepage/EditHomepage";
import { ShowHomepage } from "./Homepage/ShowHomepage";

const AdminApp = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource
      name="homepage"
      edit={EditHomepage}
      show={ShowHomepage}
      list={ListHomepage}
    />

    <Resource
      name="section"
      list={ListSection}
      create={CreateSection}
      edit={EditSection}
      show={ShowSection}
    />
  </Admin>
);

export default AdminApp;
