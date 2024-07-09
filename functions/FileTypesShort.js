// Helper function to map MIME types to friendly names
export const getFileType = (mimeType) => {
  const mimeTypes = {
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
      'document',
    'image/png': 'png',
    'application/pdf': 'pdf',
    'video/mp4': 'mp4',
    'image/jpg': 'jpg',
    'image/jpeg': 'jpeg',
    // Add more mappings as needed
  }
  return mimeTypes[mimeType] || 'others'
}
