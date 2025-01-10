import React from 'react';
import { ArrowRight } from 'lucide-react';

const BlogPage = () => {
  const articles = [
    {
      id: 1,
      title: "Oral Cancer Awareness: Signs, Symptoms, and Prevention",
      category: "News",
      image: "/api/placeholder/400/300",
      excerpt: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque..."
    },
    {
      id: 2,
      title: "The Dos and Don'ts of Teeth Whitening: Expert Advice",
      category: "Tips",
      image: "/api/placeholder/400/300",
      excerpt: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque..."
    },
    {
      id: 3,
      title: "Oral Health for All Ages: Tips for Kids, Teens, and Adults",
      category: "Health",
      image: "/api/placeholder/400/300",
      excerpt: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque..."
    },
    {
      id: 4,
      title: "Truth About Teeth Whitening: Separating Fact from Fiction",
      category: "News",
      image: "/api/placeholder/400/300",
      excerpt: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque..."
    },
    {
      id: 5,
      title: "What Your Mouth Can Reveal About Your Overall Health",
      category: "Health",
      image: "/api/placeholder/400/300",
      excerpt: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque..."
    },
    {
      id: 6,
      title: "Keeping Your Smile Healthy: Tips and Tricks from a Dentist",
      category: "Tips",
      image: "/api/placeholder/400/300",
      excerpt: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque..."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-blue-50 py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-blue-600 mb-2">Blog</div>
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-blue-600">Dental</span>
            <span className="text-gray-900"> Blog & Article</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nullam quis ante. Etiam sit amet orci eget eros faucibus
            tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Articles Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Latest Article</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles.map((article) => (
                <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <span className="text-blue-600 text-sm">{article.category}</span>
                    <h3 className="text-lg font-bold mt-2 mb-3">{article.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-700 transition-colors">
                      Read More
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Categories</h2>
              <div className="space-y-2">
                {['Tips', 'News', 'Health'].map((category) => (
                  <div key={category} className="flex items-center gap-2">
                    <ArrowRight size={16} className="text-blue-600" />
                    <span>{category}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Articles */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Featured Article</h2>
              <div className="space-y-4">
                {articles.slice(0, 3).map((article) => (
                  <div key={article.id} className="border-b pb-4 last:border-b-0">
                    <h3 className="font-medium mb-2">{article.title}</h3>
                    <span className="text-sm text-gray-500">March 2, 2023</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-gray-900 text-white rounded-lg p-6">
              <h2 className="text-xl font-bold mb-3">Become More Closer</h2>
              <p className="text-gray-300 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.
              </p>
              <div className="space-y-2">
                <p>Jl. Patimura II No. 18, Denpasar</p>
                <p>dentic@mail.com</p>
                <p>+01234 567 890</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;