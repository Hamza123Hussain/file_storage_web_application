import { GetFile } from './GetFile'

export const fetchData = async () => {
  try {
    const data = await GetFile()
    return data.data
  } catch (error) {
    console.log(error)
  }
}
