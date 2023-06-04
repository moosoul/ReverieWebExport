import Image from 'next/image'

export default function IconWrapper(props: {
  src: string
  alt?: string
  classNames: string
}) {
  return (
    <Image alt={props.alt || ''} src={props.src} className={props.classNames} />
  )
}
