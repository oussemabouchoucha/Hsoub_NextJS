import auth from 'utils/auth'
import Post from 'models/post'

const handler = async (req, res) => {
    try {
        const user = req.user.id;
        const {post, type} = req.body;
        await Post.vote(post, {user, type});
        res.status(200).json()
    } catch (e) {
        console.log('vote error : ', e)
    }

}

export default auth(handler)
