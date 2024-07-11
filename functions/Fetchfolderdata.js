import { GetFolder } from './GetFolder'

export const fetchFolderData = async (Email) => {
  try {
    const data = await GetFolder(Email)
    return data.data
  } catch (error) {}
}
