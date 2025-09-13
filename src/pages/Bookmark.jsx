import { useState } from "react";

export const Bookmark = () => {
  const [activeTab, setActiveTab] = useState("posts");

  const items = [
    {
      id: 1,
      date: "1 day ago",
      title: "The Furniture",
      desc: "This is the best furniture in the Nepal.We import these from the Malasiya.......",
      img: "furniture.webp",
    },
    {
      id: 2,
      date: "2 days ago",
      title: "BMW GSA 1250",
      desc: "The best Adventure motobike in the world.The look is so bulky and sexy......",
      img: "gsa.jpg",
    },
    {
      id: 3,
      date: "3 days ago",
      title: "Speaker",
      desc: "This speaker is made in Nepal. It has the 9hrs+ of playback time....... ",
      img: "speaker.webp",
    },
    {
      id: 4,
      date: "4 days ago",
      title: "Canvas",
      desc: "We create the canvas painting according to the need of customer.......",
      img: "canvas.webp",
    },
    {
      id: 5,
      date: "5 days ago",
      title: "I-Phone 17 pro",
      desc: "The latest version of Apple product just lunched 3 days ago in the worldwide......",
      img: "iphone.jpg",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold">Saved Items</h1>
      <p className="text-gray-500 mb-6">
        All the posts and articles you've saved in one place.
      </p>


      <div className="flex border-b mb-6">
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === "posts"
              ? "text-purple-600 border-b-2 border-purple-600"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("posts")}
        >
          Posts
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === "articles"
              ? "text-purple-600 border-b-2 border-purple-600"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("articles")}
        >
          Articles
        </button>
      </div>
      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white shadow rounded-lg p-4"
          >
            <div className="flex-1">
              <p className="text-sm text-gray-400">{item.date}</p>
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-gray-600 mb-3">{item.desc}</p>
              <button className="bg-fuchsia-700 hover:bg-fuchsia-600 text-white text-sm px-4 py-2 rounded-full">
                Read post →
              </button>
            </div>

      
            <img
              src={item.img}
             
              className="w-40 h-24 rounded-md object-cover ml-4"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
