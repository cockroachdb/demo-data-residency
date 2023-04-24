import { getDB } from '../../pg'

export default async function (req, res) {
  const client = await getDB().connect()

  const { user_id } = JSON.parse(req.body)

  try {
    await client.query('DELETE FROM art_local WHERE user_id = $1', [user_id])
    await client.query('DELETE FROM art_global WHERE user_id = $1', [user_id])

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
