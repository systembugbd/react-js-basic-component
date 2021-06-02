import React from 'react'
import style from './Busket.module.scss'

export default function Busket() {

     const [countLike, setCountLike] = React.useState(0);
     const [countUnLike, setUnCountLike] = React.useState(0);
     const [isLiked, setIsLiked] = React.useState(false)
     const [isUnLiked, setIsUnLiked] = React.useState(false)
    
     const likeHandler = () => {
          setCountLike(countLike+1)
          setIsLiked({
               isLiked:true
          })
     }

     const unlikeHandler = () => {
          setUnCountLike(countUnLike+1)
          setIsUnLiked({
               isUnLiked:true
          })
     }
    
    

     return (
          <div className={style.app}>
               <h2>Component Styling with Various type of Style Method</h2>
                    <ul className={style["unordered-list"]}>
                         <li className={style.item}>Shaheb
                              <button className={style.btn} onClick={ likeHandler }>Like {countLike}</button>
                              <button className={style.btn} onClick={ unlikeHandler }>Unlike {countUnLike}</button>
                         </li>
                       
                    </ul>
          </div>
     )
}
