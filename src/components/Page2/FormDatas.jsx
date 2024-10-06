import React from "react";

const FormData = () => {
  return (
    <div className="w-full mt-4 lg:mt-0 lg:w-[40%] max-h-[100%] lg:ml-4 lg:mb-4 flex items-center flex-col shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <h2 className="text-center pt-5">Add benificiary</h2>

      <form className="w-[80%] mt-4">
        <h1 className="m-[0] p-[0]">Personal information</h1>
        <div class="grid gap-4 mb-3 ">
          <div>
            <input
              type="text"
              id="first_name"
              class=" w-full p-2 outline-none border border-black"
              placeholder="Title"
              required
            />
          </div>
          <div>
            <input
              type="text"
              id="first_name"
              class=" w-full p-2 outline-none border border-black"
              placeholder="First Name"
              required
            />
          </div>
          <div>
            <input
              type="text"
              id="first_name"
              class=" w-full p-2 outline-none border border-black"
              placeholder="Gender"
              required
            />
          </div>
          <div>
            <input
              type="text"
              id="first_name"
              class=" w-full p-2 outline-none border border-black"
              placeholder="Date of Birth"
              required
            />
          </div>
          <div>
            <input
              type="text"
              id="first_name"
              class=" w-full p-2 outline-none border border-black"
              placeholder="Religion"
              required
            />
          </div>
          <div>
            <input
              type="text"
              id="first_name"
              class=" w-full p-2 outline-none border border-black"
              placeholder="MotherName"
              required
            />
          </div>
          <div>
            <input
              type="text"
              id="first_name"
              class=" w-full p-2 outline-none border border-black"
              placeholder="FatherName"
              required
            />
          </div>
        </div>
        <div className="flex gap-3 mb-4">
          <button
            type="submit"
            class="text-black border border-black font-medium  text-sm w-full  px-5 py-2.5 text-center "
          >
            Cancel
          </button>
          <button
            type="submit"
            class="text-white bg-[#055891] font-medium  text-sm w-full  px-5 py-2.5 text-center "
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormData;
