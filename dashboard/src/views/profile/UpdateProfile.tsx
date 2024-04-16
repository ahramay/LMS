const UpdateProfile = () => {
    const handleSubmit = () => {
        console.log('fromdata')
    }

    return (
        <>
            <h2 className="text-2xl ">Profile Details</h2>
            <p className="text-xl py-4">Basic Info</p>
            <form onSubmit={handleSubmit}>
                <div className="grid gap-4 md:gap-8 md:grid-cols-2 lg:gap-12 py-5 text-sm md:text-base border-b-2 py-4 items-center">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        className="p-2 border  rounded-md"
                        placeholder="Username"

                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        // value={formik.values?.username}
                    />
                    {/* {formik.touched.username && formik.errors.username && <div>{formik.errors.username}</div>} */}
                </div>
                <div className="grid gap-4 md:gap-8 md:grid-cols-2 lg:gap-12 py-5 text-sm md:text-base border-b-2 py-4 items-center">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        className="p-2 border  rounded-md"
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        // value={formik.values?.email}
                    />
                    {/* {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>} */}
                </div>
                <div className="grid gap-4 md:gap-8 md:grid-cols-2 lg:gap-12 py-5 text-sm md:text-base border-b-2 py-4 items-center">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        className="p-2 border rounded-md"
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        // value={formik.values?.phoneNumber}
                    />
                    {/* {formik.touched.phoneNumber && formik.errors.phoneNumber && <div>{formik.errors.phoneNumber}</div>} */}
                </div>
                <div className="grid gap-4 md:gap-8 md:grid-cols-2 lg:gap-12 py-5 text-sm md:text-base border-b-2 py-4 items-center">
                    <label htmlFor="displayImage">Avatar</label>
                    <input
                        type="file"
                        id="displayImage"
                        name="displayImage"
                        className="p-2 border cursor-pointer rounded-md"
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        // value={formik.values?.displayImage}
                    />
                    {/* {formik.touched.displayImage && formik.errors.displayImage && <div>{formik.errors.displayImage}</div>} */}
                </div>
                <div className="pt-4 text-right">
                <button type="button" className="py-2.5 px-5 
                        me-2 mb-2 text-sm font-medium text-gray-900 
                        focus:outline-none bg-white rounded-lg border 
                        border-gray-200
                        hover:bg-[#4f46e4] 
                        focus:z-10 focus:ring-4 focus:ring-gray-200">Reset</button>
                <button
                            type="submit"
                            className=" text-white bg-black hover:bg-[#4f46e4]
                        
                            border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2"
                        >
                            Submit
                        </button>
                </div>                   
            </form>
            <div className="pt-4">
                <form onSubmit={handleSubmit}>
                    <div>
                        <h2 className="text-2xl">Password</h2>
                        <p className="text-xl py-4">
                            Enter your current & new password to reset password
                        </p>
                    </div>
                    <div className="grid gap-4 md:gap-8 md:grid-cols-2 lg:gap-12 py-5 text-sm md:text-base border-b-2 py-4 items-center">
                        <label htmlFor="currentpassword">
                            Current Password
                        </label>
                        <input
                            type="text"
                            id="currentpassword"
                            name="currentpassword"
                            className="p-2 border  rounded-md"
                            placeholder="Current Password"
                        />
                        
                    </div>
                    <div className="grid gap-4 md:gap-8 md:grid-cols-2 lg:gap-12 py-5 text-sm md:text-base border-b-2 py-4 items-center">
                        <label htmlFor="newpassword">New Password</label>
                        <input
                            type="text"
                            id="newpassword"
                            name="newpassword"
                            className="p-2 border  rounded-md"
                            placeholder="New Password"

                            // onChange={formik.handleChange}
                            // onBlur={formik.handleBlur}
                            // value={formik.values?.username}
                        />
                        {/* {formik.touched.username && formik.errors.username && <div>{formik.errors.username}</div>} */}
                    </div>
                    <div className="grid gap-4 md:gap-8 md:grid-cols-2 lg:gap-12 py-5 text-sm md:text-base border-b-2 py-4 items-center">
                        <label htmlFor="confirmpassword">
                            Confirm Password
                        </label>
                        <input
                            type="text"
                            id="confirmpassword"
                            name="confirmpassword"
                            className="p-2 border  rounded-md"
                            placeholder="Confirm Password"

                            // onChange={formik.handleChange}
                            // onBlur={formik.handleBlur}
                            // value={formik.values?.username}
                        />
                        {/* {formik.touched.username && formik.errors.username && <div>{formik.errors.username}</div>} */}
                    </div>
                    <div className="pt-4 text-right">
                        <button
                            type="submit"
                            className=" text-white bg-black hover:bg-[#4f46e4]
                            
                                border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2"
                        >
                            Update Password
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default UpdateProfile
