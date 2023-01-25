import React,{useState, useEffect} from 'react';
import useDraggable from './useDraggable';

const Setbox = (id: string, top: string, left: string, title: string) => {

    useDraggable(id.id);

    const buttonHandler = (e: MouseEvent) => {
        // console.log('click');
        const button: HTMLButtonElement = e.currentTarget;

        const box: HTMLDIvElement = e.currentTarget;

        console.log("top:",box.style.top);
        console.log("left:",box.style.left);

        // result = 100 * target / context
        
        // var screenWidth = window.screen.width;
        // var screenHeight = window.screen.height;

        // var percentageTop = ( 100 * box.style.top.split("px")[0] ) / screenHeight ;
        // var percentageLeft = ( 100 * box.style.left.split("px")[0] ) / screenWidth ;

        // console.log("top:",Math.ceil(percentageTop));
        // console.log("left:",Math.ceil(percentageLeft));
    };
    
    return (
        <div onClick={buttonHandler} id={id.id} className="box_area" style={{top: `${id.top}px`, left: `${id.left}px`}}>
            {id.title}
        </div>
    )
}

const DashboardView = () => {

    const panels_array = [
        {"id": 0, "startX": 0, "startY": 0, "title": "satu"},
        {"id": 1, "startX": 370, "startY": 235, "title": "dua"},
        {"id": 2, "startX": 724, "startY": 14, "title": "tiga"},
    ]

    const [panels, setPanels] = useState([]);

    useEffect(()=>{
        setPanels(panels_array);
    },[])

    const AddElement = () => {
        
        // setRandomNum(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal));

        var id = Math.floor(Math.random() * (12000 - 12 + 1) + 12);

        setPanels(current => [...current, {id: id, title: id, startX: 0, startY: 0}]);
        
    };

    return(
      
        <main>

            <button onClick={AddElement}>Add Element</button>

            <div className='container_area'>

                {
                    panels.map((data,i) => {

                    return (
                        
                        <Setbox key={i} id={data.id} top={data.startY} left={data.startX} title={data.title}/>
                        
                    )})
                }

                {/* <Setbox id={'1'} top={"123px"} left={"88"} title={"satu"}/> */}
               
            </div>
        </main>
        
    )
}

export default DashboardView;