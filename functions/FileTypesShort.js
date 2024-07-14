// Helper function to map MIME types to friendly names
export const getFileType = (mimeType) => {
  const mimeTypes = {
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
      'document',
    'image/png': 'image',
    'application/pdf': 'pdf',
    'video/mp4': 'mp4',
    'image/jpg': 'image',
    'image/jpeg': 'image',
    'application/vnd.ms-powerpoint': 'document',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation':
      'document',
    'audio/mpeg': 'mp3',
    // Add more mappings as needed
  }
  return mimeTypes.mimeType || 'others'
}
