import { Badge } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

const MyBadge = (props) => {
  return (
    <Badge pill variant={props.color}>
      {props.message}
    </Badge>
  )
}

export default MyBadge
