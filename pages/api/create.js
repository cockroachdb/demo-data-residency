import { getDB } from '../../pg'

export default async function handler(req, res) {
  //   const client = await getDB().connect()
  const { user_id, values } = JSON.parse(req.body)

  try {
    // const response = await client.query(
    //     'INSERT INTO ... (..., ..., ) VALUES($1, $2) RETURNING id',
    //     [..., ...]
    //   );

    res.status(200).json({
      message: 'A Ok!',
      data: {}
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error!' })
  } finally {
    // client.release()
  }
}
