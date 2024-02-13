import clsx from 'clsx'
import css from './FriendListItem.module.css'

export default function FriendListItem({ avatar, name, isOnline }) {
  const containerClass = clsx(css.container, isOnline ? css.isOnline : css.isOffline);  
  return (
<div>
  <img src={ avatar } alt="Avatar" width="48" />
  <p className={css.title}> { name }</p>
  <p className={containerClass}> { isOnline ? "Online" : "Offline"}</p>
</div>
 )
}