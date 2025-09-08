export const LogIn = () => {
    return (
        <> 
        <div className="h-screen">
            <div className="flex">
            <div className=" ">
                <h1 className="font-bold text-3xl text-amber-700 mt-50 ml-50">SoftwareHub</h1>
                <h3 className="ml-50">SoftwareHub helps you to find new friends </h3>
            </div>
            <div className="grid gap-2 ml-40 mt-15 bg-gray-100 p-15 rounded-2xl">
                <input className="border-black border-1 h-10 w-60" type="email " placeholder="Email Address" /> 
                <input className="border-black border-1 h-10 w-60" type="password " placeholder="Password" />
                <button className="bg-amber-700 text-white hover:bg-amber-600 h-10 rounded-4xl">LogIn</button>
                <p className="text-amber-700 ml-15">Forget Password?</p>
                <hr />
                <button className="bg-fuchsia-700 text-white hover:bg-fuchsia-600 h-10  rounded-3xl" >Sign Up</button>
                
            </div>
            </div>
        </div>
        
        </>
    )
}