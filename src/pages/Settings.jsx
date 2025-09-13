export const Settings = () => {
    return (
      <>
        <div className="max-w-2xl bg-gray-100 rounded-2xl mt-5 mx-auto p-6">
          <h1 className="text-xl font-bold mb-4">Account Settings</h1>
          <p className="text-gray-600 mb-6">
            Manage your account details and preferences.
          </p>
  
         
          <h2 className="font-semibold mb-2">Profile</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input className="border p-2 rounded" placeholder="Name" />
            <input className="border p-2 rounded" placeholder="Username" />
          </div>
          <input
            className="border p-2 rounded w-full mb-4"
            placeholder="Email"
          />
          <textarea
            className="border p-2 rounded w-full h-24 mb-6"
            placeholder="Bio"
          ></textarea>
  
          
          <h2 className="font-semibold mb-2">Contact Information</h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <input
              className="border p-2 rounded"
              placeholder="Phone Number"
            />
            <input className="border p-2 rounded" placeholder="Location" />
          </div>
  
      
          <div className="flex justify-end gap-4">
            <button className="text-gray-600">Cancel</button>
            <button className="bg-fuchsia-700 hover:bg-fuchsia-600 text-white px-4 py-2 rounded">
              Save
            </button>
          </div>
        </div>
      </>
    );
  };
  