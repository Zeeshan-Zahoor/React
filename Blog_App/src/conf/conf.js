const conf = {
    aapwriteURL: String(import.meta.env.VITE_APPWRITE_URL),
    aapwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    aapwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    aapwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    aapwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}


export default conf