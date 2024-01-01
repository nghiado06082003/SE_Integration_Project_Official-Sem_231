function CommentReviewList() {
  return (
    <div className="mb-6">
      {comments.map((comment) => (
        <article
          key={comment.id}
          className="p-6 text-base bg-white border-t border-gray-200 "
        >
          <footer className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <p className="inline-flex items-center mr-3 text-sm text-gray-900 font-semibold">
                <img
                  className="mr-2 w-6 h-6 rounded-full"
                  src={comment.profilePic}
                  alt={comment.author}
                />
                {comment.author}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <time
                  // pubdate
                  dateTime="2022-02-08"
                  title="February 8th, 2022"
                >
                  {comment.date}
                </time>
              </p>
            </div>
          </footer>
          <p className="text-gray-500 dark:text-gray-400">
            {comment.content}
          </p>
          <div className="flex items-center mt-4 space-x-4">
            <button
              type="button"
              className="flex items-center text-sm text-gray-500 hover:underline font-medium"
            ></button>
          </div>
        </article>
      ))}
    </div>
  );
}

export default CommentReviewList;

const comments = [
  {
    id: 1,
    author: "Michael Gough",
    profilePic: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
    date: "Feb. 8, 2022",
    content:
      "Very straight-to-point article. Really worth time reading. Thank you! But tools are just the instruments for the UX designers. The knowledge of the design tools are as important as the creation of the design strategy.",
  },
];