export default async (req, context) => {
  const ip = context.ip

  return Response.json({ ip })
}

export const config = {
  path: '/api/get-ip',
}
