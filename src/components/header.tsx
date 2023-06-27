import IconCircle from "@/components/icon-circle"
import Image from 'next/image';

type HeaderProps = {
  currentColor: string
  callbackOnClick: (currentSize: number) => void
  callbackOnChange: (currentColor:string) => void
}

export default function Header(props: HeaderProps) {
  const { currentColor, callbackOnClick, callbackOnChange } = props

  const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    callbackOnChange(e.target.value);
  };

  return (
    <div className="flex flex-row items-center bg-gray-900 text-white py-4 px-8">
      <div className="mr-2">
        <button>
          <Image 
            src="/icons/trash.svg"
            className=""
            alt="Icon"
            width={36}
            height={36}
          />
        </button>
      </div>
      <h1 className="text-xl font-bold mr-3">Size</h1>
      <div className="flex flex-row items-center">
        <button className="p-2 hover:bg-blue-500" onClick={() => callbackOnClick(12)}>
          <IconCircle size={12} />
        </button>
        <button className="p-2 hover:bg-blue-500" onClick={() => callbackOnClick(24)}>
          <IconCircle size={24} />
        </button>
        <button className="p-2 hover:bg-blue-500" onClick={() => callbackOnClick(36)}>
          <IconCircle size={36} />
        </button>
      </div>
      <h1 className="text-xl font-bold ml-3 mr-3">color</h1>
      <div className="flex flex-row items-center">
        <select
          value={currentColor}
          onChange={handleColorChange}
          className="px-3 py-2 border border-gray-300 bg-white text-black rounded-md shadow-sm focus:outline-none"
        >
          <option value="black">black</option>
          <option value="white">white</option>
          <option value="red">red</option>
          <option value="blue">blue</option>
          <option value="green">green</option>
        </select>        
      </div>
    </div>    
  )
}
