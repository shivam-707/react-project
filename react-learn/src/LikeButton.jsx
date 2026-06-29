import { useState } from 'react'

export default function LikeButton() {
    let [isLiked, setIsLiked] = useState(false)
    let likeStyle = {color: "red"}

    return (
    <div>
        <p onClick={() => setIsLiked(!isLiked)} style={isLiked ? likeStyle : {}}>
            <i className={`fa-regular fa-heart ${isLiked ? 'fas' : ''}`}></i>
        </p>
    </div>)
}
