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

import { ListContact } from "./Contact/ListContact";
import { EditContact } from "./Contact/EditContact";
import { ShowContact } from "./Contact/ShowContact";

import { ListAccommodation } from "./Accommodation/ListAccommodation";
import { EditAccommodation } from "./Accommodation/EditAccommodation";
import { ShowAccommodation } from "./Accommodation/ShowAccommodation";

import { ListProgram } from "./Program/ListProgram";
import { EditProgram } from "./Program/EditProgram";
import { ShowProgram } from "./Program/ShowProgram";

import { ListSocialProgram } from "./SocialProgram/ListSocialProgram";
import { EditSocialProgram } from "./SocialProgram/EditSocialProgram";
import { ShowSocialProgram } from "./SocialProgram/ShowSocialProgram";

import { ListHomepage } from "./Homepage/ListHomepage";
import { EditHomepage } from "./Homepage/EditHomepage";
import { ShowHomepage } from "./Homepage/ShowHomepage";

import { ListSponsor } from "./Sponsor/ListSponsor";
import { CreateSponsor } from "./Sponsor/CreateSponsor";
import { EditSponsor } from "./Sponsor/EditSponsor";
import { ShowSponsor } from "./Sponsor/ShowSponsor";

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

    <Resource name="contact" list={ListContact} edit={EditContact} show={ShowContact} />

    <Resource name="accommodation" list={ListAccommodation} edit={EditAccommodation} show={ShowAccommodation} />

    <Resource name="program" list={ListProgram} edit={EditProgram} show={ShowProgram} />

    <Resource name="social-program" list={ListSocialProgram} edit={EditSocialProgram} show={ShowSocialProgram} />

    <Resource name="sponsor" list={ListSponsor} create={CreateSponsor} edit={EditSponsor} show={ShowSponsor} />

    <Resource name="user" list={ListUser} create={CreateUser} edit={EditUser} show={ShowUser} />

    <Resource name="section" list={ListSection} create={CreateSection} edit={EditSection} show={ShowSection} />

    <Resource name="article" list={ListArticle} create={CreateArticle} edit={EditArticle} show={ShowArticle} />
  </Admin>
);

export default AdminApp;
