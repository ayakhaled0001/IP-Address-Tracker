import { useIP } from "../context/IPProvider";

function Results() {
  const { ip } = useIP();
  return (
    <section className=" overflow-hidden z-50 absolute rounded-md bg-white left-1/6 -translate-y-16 mx-auto flex md:flex-row flex-col justify-center w-8/12 shadow p-7 ">
      <div className="border-b border-b-gray-400 md:border-b-0 md:border-r-gray-400 md:border-r md:px-3 py-3">
        <h6>IP ADDRESS</h6>
        <p className="text-lg md:text-3xl font-semibold">
          {ip?.as?.route ? ip.as.route : "_"}
        </p>
      </div>
      <div className="border-b border-b-gray-400 md:border-b-0 md:border-r-gray-400 md:border-r md:px-3 py-3">
        <h6>LOCATION</h6>
        <p className="text-lg md:text-3xl font-semibold">
          {ip?.location?.city ? ip.location.city : "_"} ,{" "}
          {ip?.location?.ccountry ? ip.location.ccountry : "_"} ,
          {ip?.location?.geonameId ? ip.location.geonameId : "_"}
        </p>
      </div>
      <div className="border-b border-b-gray-400 md:border-b-0 md:border-r-gray-400 md:border-r md:px-3 py-3">
        <h6>TIMEZONE</h6>
        <p className="text-lg md:text-3xlfont-semibold">
          {ip?.location?.timezone ? ip.location.timezone : "_"}
        </p>
      </div>
      <div className=" px-3">
        <h6>ISP</h6>
        <p className="text-lg md:text-3xl font-semibold">
          {ip?.as?.isp ? ip.as.isp : "_"}
        </p>
      </div>
    </section>
  );
}

export default Results;
