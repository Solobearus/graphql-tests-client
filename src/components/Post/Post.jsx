import React, { useState } from 'react'
import './Post.css'


const Post = ({ post, handleEditPostButton }) => {
    const [authorInput, setAuthorInput] = useState(post.author);
    const [textInput, setTextInput] = useState(post.text);
    const [editing, setediting] = useState(false)



    return (
        < div className="post" data-testid="post" >
            {
                editing ?
                    <>
                        <input type="text" value={authorInput} onChange={(e) => setAuthorInput(e.target.value)} />
                        <input type="text" value={textInput} onChange={(e) => setTextInput(e.target.value)} />
                        <button onClick={e => {
                            {
                                
                                handleEditPostButton(post.id, authorInput, textInput)
                            }
                        }}>confirm</button>

                        <button onClick={e => { setediting(false) }}>cancel</button>
                    </> :
                    <>
                        {`id: ${post.id} --
                        author: ${post.author} --
                        text: ${post.text} `}
                        <button onClick={e => { setediting(true) }}>edit</button>
                    </>
            }
        </div >
    )
}

export default Post
