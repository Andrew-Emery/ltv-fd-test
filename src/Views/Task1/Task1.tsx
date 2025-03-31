import './task1.css'
import ViewTemplate from '../../Components/ViewTemplate/ViewTemplate.tsx'

const Task1 = () => {
    return (
        <ViewTemplate className="task1">
            <header>
                Header&nbsp;
                <span className='screen-type mobile'>Mobile</span>
                <span className='screen-type tablet'>Tablet</span>
                <span className='screen-type small-desktop'>Small Desktop</span>
                <span className='screen-type large-desktop'>Large Desktop</span>
            </header>
            <main>
                <div>Block 1</div>
                <div>Block 2</div>
                <div>Block 3</div>
                <div>Block 4</div>
                <div>Block 5</div>
                <div>Block 6</div>
                <div>Block 7</div>
                <div>Block 8</div>
            </main>
            <footer>Fotter</footer>
        </ViewTemplate>
    )
}
export default Task1
