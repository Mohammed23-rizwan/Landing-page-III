import { Tabledatas1 } from "../../assets/data/data-assets3";

const Tabledata = () => {
  return (
    <div className="max-w-full lg:w-[60%] max-h-full overflow-x-scroll lg:overflow-auto">
      <div className="flex justify-between">
        <h1 className="text-2xl">List of Beneficiaries</h1>
        <div className="flex gap-4 items-center">
          <button>add</button>
          <div className="w-[1px] h-[50%] bg-black"></div>
          <button>Delete</button>
        </div>
      </div>
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 overflow-hidden">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="p-4">
              SNo
            </th>
            <th scope="col" class="px-6 py-3">
              Name
            </th>
            <th scope="col" class="px-6 py-3">
              Relationship
            </th>
            <th scope="col" class="px-6 py-3">
              Date of Birth
            </th>
            <th scope="col" class="px-6 py-3">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {Tabledatas1.map((item) => {
            return (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label for="checkbox-table-search-1" class="sr-only">
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Vaishanavi
                </th>
                <td class="px-6 py-4">Sister</td>
                <td class="px-6 py-4">23/03/1998</td>
                <td class="px-6 py-4">
                  <label class="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="hidden peer" />
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Tabledata;
