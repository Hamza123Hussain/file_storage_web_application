import { GetFolder } from './GetFolder'

export const fetchFolderData = async () => {
  try {
    const data = await GetFolder()
    return data.data
  } catch (error) {}
}
