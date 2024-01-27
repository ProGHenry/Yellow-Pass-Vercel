import {useState} from "react"
import cssStyle from "./index.module.css"
import passwordGenerator from "../../modules/passGenerator"
import ResetButton from "./ResetButton"
import {RiAiGenerate} from "react-icons/ri";
import {LuCopy} from "react-icons/lu";
import {LuCopyCheck} from "react-icons/lu";

const InputNum = () => {

    const [showContentPassBtn, setShowContentPassBtn] = useState(true)
    const [input, setInput] = useState(12)
    const [buttonValue, setButtonValue] = useState("")
    const [messageInput, setMessageInput] = useState(true)
    const [defautPassSize, setDefaultPassSize] = useState(true)

    const copiarInput = () => {
        setMessageInput(false)
        navigator.clipboard.writeText(buttonValue)
        setTimeout(() => {
            setMessageInput(true)
        }, 5000)
    }


    return (
        <div className={cssStyle.inputContainer}>
            <div>
                <label htmlFor="customSizeCheck">Customizar tamanho</label>
                <input
                    type="checkbox"
                    id="customSizeCheck"
                    value={defautPassSize}
                    onChange={() => {
                        setDefaultPassSize((currentCheck) => !currentCheck)
                    }}
                />
            </div>

            {defautPassSize ? (

                <button
                    className={cssStyle.button}
                    onClick={() => {
                        setButtonValue(() => "")
                        setButtonValue((currentValue) => currentValue + passwordGenerator(12))
                        setShowContentPassBtn(false)
                    }}>
                    {showContentPassBtn ? (
                        <div>
                            <RiAiGenerate/>
                            {buttonValue}
                        </div>
                    ) : buttonValue}
                </button>

            ) : (

                <>
                    <div className={cssStyle.inputBox}>
                        <label htmlFor="inputNum"></label>
                        <input className={cssStyle.inputField} type="number" id="inputNum" min={1} value={input}
                               onChange={(ev) => setInput(ev.target.value)}/>
                    </div>
                    <button disabled={input === 0}
                            className={cssStyle.button}
                            onClick={() => {
                                setButtonValue(() =>  "")
                                setButtonValue((currentValue) => currentValue + passwordGenerator(input))
                                setShowContentPassBtn(false)
                            }}>
                        {showContentPassBtn ? (
                            <div>
                                <RiAiGenerate/>
                                {buttonValue}
                            </div>
                        ) : buttonValue}
                    </button>
                </>

            )}
            <button className={cssStyle.resetButton}>
                <ResetButton resetInput={setInput} resetButton={setButtonValue} resetShowBtn={setShowContentPassBtn}/>
            </button>

            {messageInput ? (
                <button
                    // className={messageInput === "Copiar item" ? cssStyle.button : cssStyle.copiedButton}
                    className={cssStyle.button}
                    onClick={() => copiarInput()}>
                    <LuCopy/>
                </button>
            ) : (
                <button
                    className={cssStyle.copiedButton}>
                    <LuCopyCheck/>
                </button>
            )}

        </div>
    )
}

export default InputNum