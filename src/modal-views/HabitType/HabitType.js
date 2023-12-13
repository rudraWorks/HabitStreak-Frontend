import React from 'react';
import { Container } from './Styles';

function HabitType() {
  return (
    <Container>
      <h3>Habit Types </h3>
      <ul>
        <li>
          <strong>Binary Habits</strong> 
          <ul>
            <li>✔️ Drink a glass of water in the morning.</li>
            <li>❌ Brush teeth before sleep.</li>
          </ul>
        </li>
        <li>
          <strong>Integral Habits</strong>
          <ul>
            <li>🧘 Meditate for 10 minutes.</li>
            <li>🏋️‍♀️ Complete 20 pushups.</li>
            <li>🏃‍♂️ Run 2 kilometers.</li>
          </ul>
        </li>
      </ul>

      <span>Once selected, then it can't be changed in future.</span>
    </Container>
  );
}

export default HabitType;
