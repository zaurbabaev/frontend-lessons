import { Link } from "react-router-dom";

function PostCard({ post }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-blue-400">
      <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -z-10 group-hover:scale-150 transition-transform duration-500"></div>

      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
          {post.title}
        </h3>

        {post.excerpt && (
          <p className="text-gray-600 line-clamp-2">{post.excerpt}</p>
        )}

        <Link
          to={`/posts/${post.id}`}
          className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all duration-300 group/link">
          <span>Daha çox oxu</span>
          <svg
            className="w-5 h-5 group-hover/link:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </Link>
      </div>

      <div className="absolute bottom-0 left-0 w-0 h-1 bg-linear-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500"></div>
    </div>
  );
}

export default PostCard;
