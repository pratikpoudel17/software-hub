export const Register = () => {
    return (
      <>
       
        <div className="text-amber-700 text-4xl font-extrabold ml-125 mt-5 ">
          <h1>SocioHub</h1>
        </div>
  
        <div className="flex justify-center mt-6">
          <div className="bg-gray-100 rounded-3xl p-6  ">
            <form>
              <h2 className="text-amber-700 font-bold text-lg mb-4 ml-25">
                Create A New Account
              </h2>
              <hr className="mb-4" />
  
             
              <div className="grid grid-cols-2 gap-3 mb-3">
                <input
                  className="border border-black p-2 rounded"
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                />
                <input
                  className="border border-black p-2 rounded"
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                />
              </div>
  
              <div className="grid gap-3 mb-4">
                <input
                  className="border border-black p-2 rounded"
                  type="text"
                  placeholder="Email Address or Mobile Number"
                  name="email"
                />
                <input
                  className="border border-black p-2 rounded"
                  type="password"
                  placeholder="Password"
                  name="password"
                />
                <input
                  className="border border-black p-2 rounded"
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                />
              </div>
  
            
              <div className="flex flex-col items-center gap-2">
                <button
                  type="submit"
                  className="bg-fuchsia-700 text-white hover:bg-fuchsia-600 h-10 w-40 rounded-3xl"
                >
                  Sign Up
                </button>
                <p className="text-amber-700">Already have an account?</p>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  };
  