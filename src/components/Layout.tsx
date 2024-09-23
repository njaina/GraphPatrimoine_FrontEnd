import HeadingSelect from "./LeftSideComponents/HeadingSelect";
import LeftSideContent from "./LeftSideComponents/LeftsideContents";
import Chart from "./RightSideComponents/Chart";

const Layout = () => {
  return (
    /*  <div className="flex">
      <div className="">Left side</div>
      <div>Right side</div>
    </div>*/
    <div className="flex">
      <div className="w-5/12 bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
        <div className="flex justify-between mb-5">
          <div>
            <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">
              <HeadingSelect />
            </h5>
            <LeftSideContent />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="graph-container">
          <Chart />
        </div>
      </div>
    </div>
  );
};
export default Layout;
