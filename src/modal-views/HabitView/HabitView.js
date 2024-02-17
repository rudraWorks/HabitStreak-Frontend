import React from 'react';
import { Container } from './Styles';
import useModal from '../../hooks/useModal';
import { setHabitViewLocalStorage } from '../../utils/utils';

function HabitView({ habitView, setHabitView }) {
    const { dispatchModal } = useModal()
    // alert(HabitView)
    const handleClick = (p) => {   
        setHabitView(p)
        setHabitViewLocalStorage(p)
        dispatchModal({ type: 'CLOSE' })
    };

    return (
        <Container>
            <h4
                style={{
                    background: habitView === 'heatmap' ? 'lightgray' : 'white'
                }}
                onClick={() => handleClick('heatmap')}
            >
                Heatmap
            </h4>

            <h4
                style={{
                    background: habitView === 'monthly' ? 'lightgray' : 'white'
                }}
                onClick={() => handleClick('monthly')}
            >
                Monthly
            </h4>
            <h4
                style={{
                    background: habitView === 'grid' ? 'lightgray' : 'white'
                }}
                onClick={() => handleClick('grid')}
            >
                Grid
            </h4>
        </Container>
    );
}

export default HabitView;
