export const Post = () => {
    return (
        <div className="max-w-xl mx-auto mt-6 bg-gray-100 rounded-lg  p-4">

            <h2 className="text-lg font-semibold mb-3">Create a Post</h2>

            <div className="flex items-start gap-3">

                <img
                    src="people.png"
                    className="w-10 h-10 rounded-full"
                />
                <textarea
                    placeholder="What's on your mind, Pratik?"
                    className="flex-1 border rounded-md p-2 "
                    rows="3"
                />
            </div>


            <div className="flex justify-between items-center mt-3 border-t pt-2">
                <div className="flex gap-4 text-gray-500 text-sm">
                    <button className="flex items-center gap-1 hover:text-fuchsia-500">
                        <span>Photo</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-fuchsia-500">
                        <span>Video</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-fuchsia-500">
                        <span>Document</span>
                    </button>
                </div>
                <button
                    className="bg-fuchsia-700 text-white px-4 py-1 rounded-md text-sm font-medium hover:bg-fuchsia-600"
                >
                    Post
                </button>
            </div>
        </div>
    );
};
