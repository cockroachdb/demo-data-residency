import { getDB } from '../../pg'

export default async function handler(req, res) {
  const client = await getDB().connect()

  try {
    const local_response = await client.query('SELECT * FROM art_local')
    const global_response = await client.query('SELECT * FROM art_global')

    res.status(200).json({
      message: 'A Ok!',
      data: [...local_response.rows, ...global_response.rows]
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error!' })
  } finally {
    client.release()
  }
}
