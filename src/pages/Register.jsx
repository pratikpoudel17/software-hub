export const Register = () => {
    return (
        <>
            <div className="text-amber-700 text-4xl font-extrabold ml-125">
                <h1>SoftwareHub</h1>
            </div>
            <div className="h-115 flex rounded-3xl ml-95 p-3 bg-gray-100 w-120 ">
                <div>
                    <h2 className="text-amber-700 font-bold ml-35">Create A New Account</h2>
                    <hr /><br />
                    <div className="grid grid-cols-2 gap-2">
                        <input className="border-black border-1" type="text" placeholder="First Name" />
                        <input className="border-black border-1 " type="text" placeholder="Last Name" />
                    </div>
                    <br />
                    <p>Date of Birth</p>
                    <div className="grid grid-cols-3 gap-2">
                        <input className="border-black border-1" type="number" placeholder="DD" />
                        <input className="border-black border-1" type="number" placeholder="MM" />
                        <input className="border-black border-1" type="number" placeholder="YYYY" />
                    </div><br />
                    <p>Gender</p>
                    <div className="grid grid-cols-6 gap-2">
                        <p>Male</p><input name="gender" value="male" type="radio" />
                        <p>Female</p><input name="gender" value="Female" type="radio" />
                        <p>Others</p> <input name="gender" value="Others" type="radio" />
                    </div><br />
                    <div className="grid gap-2">
                        <input className="border-black border-1" type="text" placeholder="Email Address or Mobile Number" />
                        <input className="border-black border-1" type="password" placeholder="Password" />
                        <input className="border-black border-1" type="password" placeholder="Confirm Password" /><br />
                    </div>
                    <div className="grid gap-2 ml-35">
                        <button className="bg-fuchsia-700 text-white hover:bg-fuchsia-600 h-10 w-40 rounded-3xl">Sign Up</button>
                        <p className="text-amber-700">Already have an account?</p>
                    </div>
                </div>

            </div>

        </>
    )
}