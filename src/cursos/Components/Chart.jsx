import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Tareas Realizadas', 'Tareas NO Realizadas'],
  datasets: [
    {
      label: '#Tareas',
      data: [12, 3],
      backgroundColor: [
        'rgba(16, 117, 133)',
        'rgba(0, 164, 155)',
        
        
      ],
      borderColor: [
        'rgba(255, 255, 255)',
        'rgba(255, 255, 255)',
 
      ],
      borderWidth: 1,
    },
  ],
};