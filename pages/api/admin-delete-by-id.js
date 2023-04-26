import { client } from '../../pg'

export default async function (req, res) {
  const { user_id } = JSON.parse(req.body)

  try {
    await client.connect()

    const local_response = await client.query('DELETE FROM art_local WHERE user_id = $1', [user_id])
    const global_response = await client.query('DELETE FROM art_global WHERE user_id = $1', [user_id])

    await client.clean()

    if (!local_response.rows || global_response.rows) {
      throw new Error('Bad Response')
    }

    res.status(200).json({
      message: 'A Ok!'
    })
  } catch (error) {
    res.status(500).json({ message: 'Error!' })
  }
}
