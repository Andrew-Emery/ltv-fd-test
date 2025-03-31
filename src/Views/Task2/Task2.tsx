import { useState } from 'react'
import Button from './Components/Button/Button'
import './task2.css'

const Task2 = () => {
        const [clicked, setClicked] = useState({
            primary: 0,
            secondary: 0,
            tertiary: 0,
            disabled: 0,
        });
        console.log("🚀 ~ Task2 ~ click counts:", clicked);
    return (
        <div className="task2">
        <Button
            type="primary"
            label='Primary'
            onClick={() => setClicked({...clicked, primary: clicked.primary + 1})}
        />
        <Button
            type="secondary"
            label='Secondary'
            onClick={() => setClicked({...clicked, secondary: clicked.secondary + 1})}
        />
        <Button
            type="tertiary"
            label='Tertiary'
            onClick={() => setClicked({...clicked, tertiary: clicked.tertiary + 1})}
        />
        <Button
            type="disabled"
            label='Disabled'
            onClick={() => setClicked({...clicked, disabled: clicked.disabled + 1})}
        />
        </div>
    );
};
export default Task2;
