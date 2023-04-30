import {usePreview} from '../lib/sanity.client'
import {query, DocumentsCount} from './DocumentsCount'

export default function PreviewDocumentsCount() {
  const data = usePreview(null, query)
  return <DocumentsCount data={data} />
}