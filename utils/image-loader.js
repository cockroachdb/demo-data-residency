export const imageLoader = ({ src, width }) => {
  return `${process.env.NEXT_PUBLIC_S3_BUCKET}/${src}?w=${width}&q=75`
}
