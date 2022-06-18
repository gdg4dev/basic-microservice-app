import React, {useState} from 'react'
import axios from 'axios'

const CommentCreate = ({postId}) => {
    const [content, setContent] = useState("")

    const formHandler = async (e) =>{
        e.preventDefault()
        await axios.post(`http://localhost:4001/posts/${postId}/comments`, {content})
        setContent("")
    }
    
    return <div>
        <form onClick={formHandler}>
            <div className='form-group'>
                <label>New Comment</label>
                <input value={content} onChange={e => setContent(e.target.value)} className='form-control'/>
            </div><br />
            <button className='btn btn-primary'>submit</button>
        </form>
    </div>
}

export default CommentCreate