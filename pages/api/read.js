import { getDB } from '../../pg'

export default async function (req, res) {
  const client = await getDB().connect()

  try {
    const response = await client.query('SELECT * FROM art_local')

    console.log(JSON.stringify(response.rows[0], null, 2))

    res.status(200).json({
      message: 'A Ok!',
      data: response.rows
    })
  } catch (error) {
    res.status(500).json({ message: 'Error!', error: error })
  } finally {
    client.release()
  }
}
