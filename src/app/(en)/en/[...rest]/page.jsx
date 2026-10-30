import { notFound } from 'next/navigation'

// Unknown /en/... URLs render the English 404 page.
export default function CatchAll() {
  notFound()
}
