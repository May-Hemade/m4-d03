import { Badge } from "react-bootstrap"

const MyBadge = (props) => {
  return <Badge bg={props.color}>{props.message}</Badge>
}

export default MyBadge
