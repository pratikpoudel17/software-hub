export const Home = () => {
  const posts = [
    {
      id: 1,
      name: "Harry Bandi",
      time: "2h ago",
      content:"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me",
      likes: 23,
      comments: 5,
      shares: 2,
      img: "people1.png",
    },
    {
      id: 2,
      name: "Jaggu boss",
      time: "1 day ago",
      content:"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
            likes: 47,
      comments: 12,
      shares: 7,
      img: "people2.png",
    },
    {
      id: 3,
      name: "Nirmali Dhakali",
      time: "6 day ago",
      content: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
           likes: 15,
      comments: 2,
      shares: 0,
      img: "man.png",
    },
    {
      id: 4,
      name: "Dharmu Jii",
      time: "1 week ago",
           likes: 27,
      comments: 6,
      shares: 0,
      img: "man.png",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto mt-6">
      <div className="bg-gray-100 p-4 rounded-lg  mb-6">
        <div className="flex items-start gap-3">
          <img
            src="people.png"
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <textarea
            placeholder="Start a post"
            className="flex-1 border rounded-md p-2 "
            rows="2"
          />
        </div>
        <div className="flex justify-end mt-3">
          <button className="bg-fuchsia-700 text-white px-4 py-1 rounded-full font-medium hover:bg-fuchsia-600">
            Post
          </button>
        </div>
      </div>

      <h2 className="font-semibold text-lg mb-3">Feed</h2>

      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-gray-100 p-4 rounded-lg ">

            <div className="flex items-center gap-3 mb-2">
              <img
                src={post.img}

                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="font-semibold">{post.name}</h3>
                <span className="text-xs text-gray-400">{post.time}</span>
              </div>
            </div>

            <p className="text-gray-800 mb-3">{post.content}</p>

            <div className="flex items-center justify-between text-gray-500 text-sm border-t pt-2">
              <button className="hover:text-fuchsia-500">Like</button>
              <button className="hover:text-fuchsia-500">Comment</button>
              <button className="hover:text-fuchsia-500">Share</button>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              {post.likes} likes • {post.comments} comments • {post.shares}{" "}
              shares
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
