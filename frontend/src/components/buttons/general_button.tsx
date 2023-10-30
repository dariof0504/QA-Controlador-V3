import { Link } from "react-router-dom"
import './style.css'

export const GENERAL_BUTTON = (props: {path:string, title: string}) => {
  
  const { path, title } = props
  
  return (
    <div className="generalButton" >
      <Link to={path} >
        {title}
      </Link>
    </div>
  )
}
