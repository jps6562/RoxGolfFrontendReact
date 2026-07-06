import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from '@/sanity/schemas'

export default defineConfig({
  name: 'roxgolf',
  title: 'RoxGolf',
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  plugins: [deskTool()],
  schema: { types: schemaTypes },
})
