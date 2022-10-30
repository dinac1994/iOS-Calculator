import { ACTIONS } from './App'
import './App.css'

export default function DigitButton({ dispatch, digit }) {
    return  (
        <button className="digit" onClick={() => dispatch( { type: ACTIONS.ADD_DIGIT, payload: { digit } } )}>{digit}</button>
    )
}