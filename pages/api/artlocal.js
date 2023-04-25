import { getDB } from '../../pg'

export default async function handler(req, res) {
  const client = await getDB().connect()
  const { user_id, username, region, values } = JSON.parse(req.body)

  const last_updated = new Date()
  // console.log(process.env.AWS_REGION)

  try {
    const response = await client.query(
      'UPSERT INTO art_local (user_id, username, last_updated, region, values) VALUES($1, $2, $3, $4, $5) RETURNING values',
      [user_id, username, last_updated, `aws-${region}`, values]
    )

    if (!response.rows) {
      throw new Error('Bad Response')
    }

    res.status(200).json({
      message: 'A Ok!'
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error!', error: error })
  } finally {
    client.release()
  }
}
