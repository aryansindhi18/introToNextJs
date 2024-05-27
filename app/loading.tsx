export default function Loading(){
    return (
        <div className=" flex justify-center flex-col h-screen">
      <div className=" flex justify-center">
        <div className=" border p-5 bg-slate-50 rounded">
          <div className=" text-center">
          <div role="status" className="max-w-sm animate-pulse">
        <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
        </div>
          </div>
          <div className=" text-center">
          <div role="status" className="max-w-sm animate-pulse">
        <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
        </div>
          </div>
        </div>
      </div>
    </div>
    
    )
}

