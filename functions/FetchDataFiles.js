import { GetFile } from './GetFile'

export const fetchData = async (Email) => {
  try {
    const data = await GetFile(Email)
    return data.data
  } catch (error) {
    console.log(error)
  }
}
