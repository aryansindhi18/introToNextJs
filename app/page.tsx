import axios from "axios";
import Image from "next/image";
async function getUserDetails() {
  await new Promise((resolve)=>{
    return setTimeout(resolve,5000);
  })
  const response = await axios.get('https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details')
  return response.data
}

export default async function Home() {
  const userData = await getUserDetails();
  return (
    <div className=" flex justify-center flex-col h-screen">
      <div className=" flex justify-center">
        <div className=" border p-5 bg-slate-50 rounded">
          <div className=" text-center">
            {userData?.email}
          </div>
          <div className=" text-center">
            {userData?.name}
          </div>
        </div>
      </div>
    </div>
  );
}
