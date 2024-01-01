import { FiMessageCircle } from 'react-icons/fi';

function CommentReviewForm() {
  return (
    <div className='mb-10'>
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-lg font-bold text-gray-900">Thảo luận</h2>
        <div className="flex items-center h-full text-gray-700 text-sm">
          <FiMessageCircle className="w-4 h-4 mr-1" />
          <span>{10}</span>
        </div>
      </div>
      <form className="mb-6">
        <div className="mb-4 rounded-lg border border-gray-200">
          <label htmlFor="comment" className="sr-only">
            Hãy thảo luận về chủ đề
          </label>
          <textarea
            id="comment"
            rows="5"
            className="py-2 px-4 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
            placeholder="Viết bình luận"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 "
        >
          Gửi bình luận
        </button>
      </form>
    </div>
  );
}

export default CommentReviewForm;