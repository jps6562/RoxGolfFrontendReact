import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from '@/sanity/schemas'

const structure = (S: any) =>
  S.list()
    .title('RoxGolf')
    .items([
      S.listItem()
        .title('Announcements')
        .schemaType('announcement')
        .child(S.documentTypeList('announcement').title('Announcements')),

      S.divider(),

      S.listItem()
        .title('Golf')
        .child(
          S.list()
            .title('Golf')
            .items([
              S.listItem()
                .title('Tuesday League')
                .child(
                  S.list()
                    .title('Tuesday League')
                    .items([
                      S.listItem()
                        .title('Flight Standings Image')
                        .child(
                          S.documentList()
                            .title('Flight Standings Image')
                            .filter('_type == "scoreImage" && section == "Tuesday League — Flight Standings"')
                        ),
                      S.listItem()
                        .title('Score Sheet Image')
                        .child(
                          S.documentList()
                            .title('Score Sheet Image')
                            .filter('_type == "scoreImage" && section == "Tuesday League — Score Sheet"')
                        ),
                    ])
                ),

              S.listItem()
                .title('MASTERS Trip')
                .child(
                  S.list()
                    .title('MASTERS Trip')
                    .items([
                      S.listItem()
                        .title('Standings Image')
                        .child(
                          S.documentList()
                            .title('Standings Image')
                            .filter('_type == "scoreImage" && section == "MASTERS Trip — Standings"')
                        ),
                    ])
                ),

              S.divider(),

              S.listItem()
                .title('RgA Rules')
                .schemaType('rule')
                .child(S.documentTypeList('rule').title('RgA Rules')),
            ])
        ),

      S.divider(),

      S.listItem()
        .title('All Score Images')
        .schemaType('scoreImage')
        .child(S.documentTypeList('scoreImage').title('All Score Images')),
    ])

export default defineConfig({
  name: 'roxgolf',
  title: 'RoxGolf',
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  plugins: [deskTool({ structure })],
  schema: { types: schemaTypes },
})
