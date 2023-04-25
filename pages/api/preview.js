import { getDB } from '../../pg'

export default async function handler(req, res) {
  const client = await getDB().connect()

  const { user_id } = JSON.parse(req.body)

  //   const region = `aws-${process.env.AWS_REGION}`;
  // const region = process.env.AWS_REGION ? `aws-${process.env.AWS_REGION}` : 'aws-us-east-1'
  const region = process.env.AWS_REGION ? `aws-${process.env.AWS_REGION}` : 'aws-eu-central-1'

  try {
    const response = await client.query(
      'SELECT l.user_id, l.username, l.region, l.last_updated AS local_last_update, l.values AS local_values, g.last_updated AS global_last_update, g.values AS global_values FROM art_local l LEFT JOIN art_global g ON l.user_id = g.user_id WHERE l.user_id = $1 AND region = $2',
      [user_id, region]
    )

    if (!response.rows) {
      throw new Error('Bad Response')
    }

    const newResponse = response.rows.map((data) => {
      const { user_id, username, local_last_update, local_values, global_values } = data

      return {
        user_id,
        username,
        local_last_update: new Date(local_last_update).toLocaleString('default', {
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        }),
        local_values,
        global_values
      }
    })

    // if (!local_response.rows || !global_response.rows) {
    //   throw new Error('Bad Response')
    // }

    // const local = local_response.rows.reduce(
    //   (items, item) => {
    //     const { super_region, values } = item

    //     items[super_region] = items[super_region] || {}

    //     items[super_region] = {
    //       ...values
    //     }

    //     return items
    //   },
    //   { us: null, eu: null }
    // )

    // const global = global_response.rows.reduce((items, item) => {
    //   const { values } = item
    //   items.global = items.global || []

    //   items.global = {
    //     ...values
    //   }

    //   return items
    // }, {})

    res.status(200).json({
      message: 'A Ok!',
      data: newResponse
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error!' })
  } finally {
    client.release()
  }
}
