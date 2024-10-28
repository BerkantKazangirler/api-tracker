import { IPTrackerI } from "../types";

interface props {
  data: IPTrackerI;
}

function ViewPanel({ data }: props) {
  return (
    <>
      <div className="lg:p-8 py-4 flex flex-col gap-2 lg:w-64 w-full">
        <span className="font-medium text-gray-500 text-xs lg:text-start text-center">
          IP ADRESS
        </span>
        <span className="2xl:text-2xl xl:text-xl lg:text-lg font-medium w-full lg:text-start text-center">
          {data ? data.query : "Veri Yok"}
        </span>
      </div>
      <span className="m-8 text-gray-500/40 border hidden xl:flex"></span>
      <div className="lg:p-8 py-4 flex flex-col gap-2 lg:w-64 w-full">
        <span className="font-medium text-gray-500 text-xs lg:text-start text-center">
          LOCATION
        </span>
        <div className="flex flex-col">
          <div className="flex flex-row gap-1 lg:w-fit w-full">
            <span className="2xl:text-2xl xl:text-xl lg:text-lg font-medium lg:w-fit w-full lg:text-start text-center">
              {data ? data.city : "Veri Yok"}
            </span>

            <span className="2xl:text-2xl xl:text-xl lg:text-lg font-medium lg:w-fit w-full lg:text-start text-center">
              {data ? data.zip : "Veri Yok"}
            </span>
          </div>
          <span className="2xl:text-2xl xl:text-xl lg:text-lg font-medium lg:w-fit w-full lg:text-start text-center">
            {data ? data.country : "Veri Yok"}
          </span>
        </div>
      </div>
      <span className="m-8 text-gray-500/40 border hidden xl:flex"></span>
      <div className="lg:p-8 py-4 flex flex-col lg:w-64 w-full 2xl:w-[22rem]">
        <span className="font-medium text-gray-500 text-xs lg:text-start text-center">
          TIMEZONE
        </span>
        <span className="2xl:text-2xl xl:text-xl lg:text-lg font-medium lg:w-fit w-full lg:text-start text-center">
          UTC - {data ? data.timezone : "Veri Yok"}
        </span>
      </div>
      <span className="m-8 text-gray-500/40 border hidden xl:flex"></span>
      <div className="lg:p-8 py-4 flex flex-col">
        <span className="font-medium text-gray-500 text-xs lg:text-start text-center">
          ISP
        </span>
        <span className="2xl:text-2xl xl:text-xl lg:text-lg text-base font-medium lg:text-start text-center">
          {data ? data.isp : "Veri Yok"}
        </span>
        <span className="2xl:text-2xl xl:text-xl lg:text-lg font-medium lg:text-start text-center">
          {data ? data.org : "Veri Yok"}
        </span>
      </div>
    </>
  );
}

export default ViewPanel;
