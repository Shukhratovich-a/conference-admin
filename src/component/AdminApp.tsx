import { Admin, Resource } from "react-admin";

import { dataProvider } from "@/providers/data.provider";
import { authProvider } from "@/providers/auth.provider";
import { i18nProvider } from "@/providers/i18n.provider";

import { ListHeader } from "./Header/ListHeader";
import { EditHeader } from "./Header/EditHeader";
import { ShowHeader } from "./Header/ShowHeader";

import { ListDate } from "./Date/ListDate";
import { EditDate } from "./Date/EditDate";
import { ShowDate } from "./Date/ShowDate";

import { ListFee } from "./Fee/ListFee";
import { EditFee } from "./Fee/EditFee";
import { ShowFee } from "./Fee/ShowFee";

import { ListSubmission } from "./Submission/ListSubmission";
import { EditSubmission } from "./Submission/EditSubmission";
import { ShowSubmission } from "./Submission/ShowSubmission";

import { ListHomepage } from "./Homepage/ListHomepage";
import { EditHomepage } from "./Homepage/EditHomepage";
import { ShowHomepage } from "./Homepage/ShowHomepage";

import { ListUser } from "./User/ListUser";
import { CreateUser } from "./User/CreateUser";
import { EditUser } from "./User/EditUser";
import { ShowUser } from "./User/ShowUser";

import { ListSection } from "./Section/ListSection";
import { CreateSection } from "./Section/CreateSection";
import { EditSection } from "./Section/EditSection";
import { ShowSection } from "./Section/ShowSection";

import { ListArticle } from "./Article/ListArticle";
import { CreateArticle } from "./Article/CreateArticle";
import { EditArticle } from "./Article/EditArticle";
import { ShowArticle } from "./Article/ShowArticle";

const AdminApp = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider} i18nProvider={i18nProvider} requireAuth>
    <Resource name="header" list={ListHeader} edit={EditHeader} show={ShowHeader} />

    <Resource name="homepage" list={ListHomepage} edit={EditHomepage} show={ShowHomepage} />

    <Resource name="date" list={ListDate} edit={EditDate} show={ShowDate} />

    <Resource name="fee" list={ListFee} edit={EditFee} show={ShowFee} />

    <Resource name="submission" list={ListSubmission} edit={EditSubmission} show={ShowSubmission} />

    <Resource name="user" list={ListUser} create={CreateUser} edit={EditUser} show={ShowUser} />

    <Resource name="section" list={ListSection} create={CreateSection} edit={EditSection} show={ShowSection} />

    <Resource name="article" list={ListArticle} create={CreateArticle} edit={EditArticle} show={ShowArticle} />
  </Admin>
);

export default AdminApp;
