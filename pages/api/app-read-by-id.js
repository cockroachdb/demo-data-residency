import { getDB } from '../../pg'

export default async function (req, res) {
  const client = await getDB().connect()
  const { user_id } = JSON.parse(req.body)

  try {
    const local_response = await client.query('SELECT * FROM art_local WHERE user_id = $1', [user_id])
    const global_response = await client.query('SELECT * FROM art_global WHERE user_id = $1', [user_id])

    if (!local_response.rows || !global_response.rows) {
      throw new Error('Bad Response')
    }

    const local = local_response.rows.reduce(
      (items, item) => {
        const { super_region, values } = item

        items[super_region] = items[super_region] || {}

        items[super_region] = {
          ...values
        }

        return items
      },
      { us: null, eu: null }
    )

    const global = global_response.rows.reduce((items, item) => {
      const { values } = item
      items.global = items.global || []

      items.global = {
        ...values
      }

      return items
    }, {})

    res.status(200).json({
      message: 'A Ok!',
      data: { local, ...global }
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error!', error: error })
  } finally {
    client.release()
  }
}
