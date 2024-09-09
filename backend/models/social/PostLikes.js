import mongoose from 'mongoose';

const postLikeSchema = new mongoose.Schema({
    post_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserPost',
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    liked_at: {
        type: Date,
        default: Date.now
    }
});

postLikeSchema.index({ post_id: 1, user_id: 1 }, { unique: true });

const PostLike = mongoose.model('PostLike', postLikeSchema);

export default PostLike;