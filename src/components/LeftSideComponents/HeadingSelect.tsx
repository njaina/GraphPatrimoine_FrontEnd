import CheckboxItem from "./CheckboxItem";

const HeadingSelect = () => {
  return (
    <>
      <label>Patrimoine:</label>
      <select className="ml-2">
        <option>Option 1 </option>
      </select>
      <ul className="mt-3 items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <CheckboxItem id="agragat">Agrégat</CheckboxItem>
        <CheckboxItem id="trésorerie">Trésorerie</CheckboxItem>
        <CheckboxItem id="immobilisations">Immobilisations</CheckboxItem>
        <CheckboxItem id="obligations">Obligations</CheckboxItem>
      </ul>

      {/** Date Picker section **/}
      <div className="mt-3 flex">
        <label className="mx-4 text-gray-500">De</label>
        <div
          id="date-range-picker"
          date-rangepicker
          className=" flex items-center"
        >
          <div className="relative">
            <input
              id="datepicker-range-start"
              name="start"
              type="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Date du début"
            />
          </div>
          <span className="mx-4 text-gray-500">À</span>
          <div className="relative">
            <input
              id="datepicker-range-end"
              name="end"
              type="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Date de la fin"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default HeadingSelect;
