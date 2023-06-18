import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Link
        className="text-4xl font-bold"
        href="/top"
      >
          Whiteboard
      </Link>
      <div><br /></div>
      <div className="text-xl">Welcome my site</div>
    </div>
    )
}
