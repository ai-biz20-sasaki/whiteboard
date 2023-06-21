import IconCircle from "@/components/icon-circle"

type HeaderProps = {
  callback: (currentSize: number) => void
}

export default function Header(props: HeaderProps) {
  const {callback} = props

  return (
    <div className="flex flex-row items-center bg-gray-900 text-white py-4 px-8">
      <h1 className="text-xl font-bold mr-3">Size</h1>
      <div className="flex flex-row items-center">
        <button className="p-2 hover:bg-blue-500" onClick={() => callback(12)}>
          <IconCircle size={12} />
        </button>
        <button className="p-2 hover:bg-blue-500" onClick={() => callback(24)}>
          <IconCircle size={24} />
        </button>
        <button className="p-2 hover:bg-blue-500" onClick={() => callback(36)}>
          <IconCircle size={36} />
        </button>
      </div>
    </div>    
  )
}
