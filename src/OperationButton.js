import { ACTIONS} from './App'
import './App.css'

export default function OperationButton( {operation, dispatch}) {
    return (
        <button className="operation" onClick={ () => dispatch( { type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}>{operation}</button>
    )
}