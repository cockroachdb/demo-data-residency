import { getDB } from '../../pg'

export default async function (req, res) {
  const client = await getDB().connect()
  const { user_id } = JSON.parse(req.body)

  try {
    const response = await client.query(
      'SELECT l.user_id, l.super_region, l.values AS local_values, g.values AS global_values FROM art_local l JOIN art_global g ON l.user_id = g.user_id WHERE l.user_id = $1',
      [user_id]
    )

    if (!response.rows.length > 0) {
      throw new Error('No row data')
    }

    const newResponse = response.rows.reduce(
      (items, item) => {
        const { super_region, local_values, global_values } = item

        items[super_region] = items[super_region] || {}

        items[super_region] = {
          ...local_values
        }

        items.global = items.global || {}
        items.global = {
          ...global_values
        }

        return items
      },
      { us: {}, eu: {}, global: {} }
    )

    res.status(200).json({
      message: 'A Ok!',
      data: newResponse,
      raw_data: response
    })
  } catch (error) {
    res.status(500).json(error)
  } finally {
    client.release()
  }
}
