import { Alert } from "react-bootstrap"

const WarningSign = (props) => {
  return <Alert variant="danger">{props.message}</Alert>
}

export default WarningSign
