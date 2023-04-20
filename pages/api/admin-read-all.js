import { getDB } from '../../pg'

export default async function handler(req, res) {
  const client = await getDB().connect()

  try {
    const response = await client.query(
      'SELECT l.user_id, l.username, l.region, l.values AS local_values, g.values AS global_values FROM art_local l JOIN art_global g ON l.user_id = g.user_id'
    )

    res.status(200).json({
      message: 'A Ok!',
      data: response
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error!' })
  } finally {
    client.release()
  }
}
