import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'mmjpmckc',
    dataset: 'production',
  },
  autoUpdates: true,
})
