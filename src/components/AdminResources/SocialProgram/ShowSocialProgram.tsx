import { EditButton, PrevNextButtons, Show, TopToolbar, RichTextField, TabbedShowLayout } from "react-admin";

export const ShowSocialProgram = ({ ...props }) => {
  return (
    <Show
      actions={
        <TopToolbar>
          <PrevNextButtons linkType="show" />
          <EditButton />
        </TopToolbar>
      }
      {...props}
    >
      <TabbedShowLayout>
        <TabbedShowLayout.Tab label="Uzbek">
          <RichTextField source="bodyUz" label="Main text" />
        </TabbedShowLayout.Tab>

        <TabbedShowLayout.Tab label="English">
          <RichTextField source="bodyEn" label="Main text" />
        </TabbedShowLayout.Tab>

        <TabbedShowLayout.Tab label="Arabic">
          <RichTextField source="bodyRu" label="Main text" />
        </TabbedShowLayout.Tab>
      </TabbedShowLayout>
    </Show>
  );
};
