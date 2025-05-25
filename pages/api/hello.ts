/**
 * hello.ts - API Example Route
 * 
 * This is a simple example API route created as part of the Next.js project template.
 * It demonstrates basic API functionality by returning a JSON response with a name field.
 * 
 * In the context of this CV application, this file is not actively used but remains
 * as a reference for how API routes can be implemented if needed in the future.
 * 
 * For more information on Next.js API routes:
 * https://nextjs.org/docs/api-routes/introduction
 */
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
