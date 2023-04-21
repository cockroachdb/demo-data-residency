import { getDB } from '../../pg'

export default async function handler(req, res) {
  const client = await getDB().connect()
  const { user_id, username, region, values } = JSON.parse(req.body)

  const last_updated = new Date()
  // console.log(process.env.AWS_REGION)

  console.log({ user_id, username, last_updated, region, values })

  try {
    const response = await client.query(
      'UPSERT INTO art_local (user_id, username, last_updated, region, values) VALUES($1, $2, $3, $4, $5) RETURNING values',
      [user_id, username, last_updated, `aws-${region}`, values]
    )

    console.log('user_id: ', user_id)
    console.log('username: ', username)
    console.log('region: ', region)
    console.log('values: ', values)
    console.log('local response values: ', response.rows[0])

    res.status(200).json({
      message: 'A Ok!'
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error!' })
  } finally {
    client.release()
  }
}
