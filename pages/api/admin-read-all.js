import { client } from '../../pg'

export default async function handler(req, res) {
  try {
    await client.connect()

    const local_response = await client.query('SELECT * FROM art_local')
    const global_response = await client.query('SELECT * FROM art_global')

    await client.clean()

    if (!local_response.rows || !global_response.rows) {
      throw new Error('Bad Response')
    }

    res.status(200).json({
      message: 'A Ok!',
      data: [...local_response.rows, ...global_response.rows]
    })
  } catch (error) {
    res.status(500).json({ message: 'Error!' })
  }
}
