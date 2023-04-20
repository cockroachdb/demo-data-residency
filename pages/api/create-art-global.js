import { getDB } from '../../pg'

export default async function handler(req, res) {
  const client = await getDB().connect()
  const { user_id, username, values } = JSON.parse(req.body)

  const last_updated = new Date()
  // console.log(process.env.AWS_REGION)

  try {
    await client.query('UPSERT INTO art_global (user_id, username, last_updated, values) VALUES($1, $2, $3, $4)', [
      user_id,
      username,
      last_updated,
      values
    ])

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
