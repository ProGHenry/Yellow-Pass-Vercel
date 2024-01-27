import {MdCleaningServices} from "react-icons/md";

const ResetButton = (props) => {
    return (
        <div onClick={() => {
            props.resetInput(12)
            props.resetButton("")
            props.resetShowBtn(true)
        }
        }><MdCleaningServices/></div>
    )
}

export default ResetButton