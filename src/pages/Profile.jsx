export const Profile = () => {
    const posts = [
      {
        id: 1,
        user: "Pratik Poudel",
        time: "5d",
        text: " Too many people buy things they don't need with money they don't have to impress people they don't know.  Read Rich Dad, Poor Dad.",
        likes: 120,
        comments: 30,
        shares: 15,
       
      },
      {
        id: 2,
        user: "Pratik Poudel",
        time: "3w",
        text: "If a person wants to be a part of your life, they will make an obvious effort to do so.  Think twice before reserving a space in your heart for people who do not make an effort to stay.",
        likes: 95,
        comments: 22,
        shares: 10,
       
      },
    ];
  
    return (
      <div className="bg-gray-100 p-6 mx-40 rounded-lg shadow">
     
        <div className="flex items-center gap-6 pb-6 border-b">
          <img
            className="h-24 w-24 rounded-full object-cover"
            src="people.png"
            alt="Profile"
          />
  
          <div className="flex-1">
            <h2 className="text-2xl font-bold">Pratik Poudel</h2>
            <h4 className="text-gray-600">
              A normal IT student who doesn't know coding but trying to learn
            </h4>
            <p className="text-gray-500 mt-1">10K Followers · 510 Following</p>
  
            <div className="flex gap-3 mt-4">
              <button className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-5 py-2 rounded-full font-medium">
                Follow
              </button>
              <button className="bg-gray-300 hover:bg-gray-400 text-black px-5 py-2 rounded-full font-medium">
                Message
              </button>
            </div>
          </div>
        </div>
  
        
        <div className="flex gap-6 border-b mt-4">
          <button className="py-2 px-3 border-b-2 border-fuchsia-600 font-medium text-fuchsia-600">
            Posts
          </button>
          <button className="py-2 px-3 text-gray-500 hover:text-fuchsia-600">
            About
          </button>
          <button className="py-2 px-3 text-gray-500 hover:text-fuchsia-600">
            Activity
          </button>
        </div>
  
        
        <div className="bg-white rounded-lg p-4 mt-4 ">
          <div className="flex gap-3">
            <img
              src="people.png"
              alt="profile"
              className="h-10 w-10 rounded-full object-cover"
            />
            <textarea
              className="flex-1 border rounded-lg p-2 "
              placeholder="Start a post"
              rows="2"
            ></textarea>
          </div>
          <div className="flex justify-end mt-3">
            <button className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-5 py-1 rounded-full">
              Post
            </button>
          </div>
        </div>
  
        
        <div className="mt-4 space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="bg-white p-4 rounded-lg ">
              <div className="flex items-center gap-3 mb-2">
                <img
                  src="people.png"
                  alt="profile"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold">{post.user}</h4>
                  <p className="text-gray-500 text-sm">{post.time}</p>
                </div>
              </div>
              <p className="mb-2">{post.text}</p>
              <div className="flex gap-6 text-gray-600 text-sm">
                <span> {post.likes} Likes</span>
                <span> {post.comments} Comments</span>
                <span> {post.shares} Shares</span>
             
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  