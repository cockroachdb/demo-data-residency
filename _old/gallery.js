import { client } from '../../../pg'

export default async function handler(req, res) {
  //   const region = `aws-${process.env.AWS_REGION}`

  const region = `aws-us-east-1`

  try {
    await client.connect()
    // const response = await client.query('SELECT * from art_local WHERE region = $1', [region])

    // if (!response.rows) {
    //   throw new Error('Bad Response')
    // }

    // res.status(200).json({
    //   message: 'Gallery v1 - A Ok!',
    //   data: response
    // })

    const response = await client.query(
      'SELECT l.user_id, l.username, l.region, l.last_updated AS local_last_update, l.values AS local_values, g.last_updated AS global_last_update, g.values AS global_values FROM art_local l LEFT JOIN art_global g ON l.user_id = g.user_id WHERE region = $1',
      [region]
    )

    await client.clean()

    if (!response.rows) {
      throw new Error('Bad Response')
    }

    const newResponse = response.rows
      .map((data) => {
        const { user_id, username, local_last_update, local_values, global_values } = data

        return {
          user_id,
          username,
          date: local_last_update,
          local_last_update: new Date(local_last_update).toLocaleString('default', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          }),
          local_values,
          global_values
        }
      })
      .sort((a, b) => b.date - a.date)

    console.log(newResponse)

    res.status(200).json({
      message: 'Gallery v1 - A Ok!',
      data: newResponse
    })
  } catch (error) {
    console.log('gallery api error: ', error)
    res.status(500).json({
      message: 'Gallery - Error!'
    })
  }
}
