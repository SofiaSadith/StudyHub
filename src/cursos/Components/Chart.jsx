import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Tareas Realizadas', 'Tareas NO Realizadas'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 3],
      backgroundColor: [
        'rgba(255, 105, 105)',
        'rgba(243, 238, 217)',
        
      ],
      borderColor: [
        'rgba(255, 105, 105)',
        'rgba(243, 238, 217)',
        
      ],
      borderWidth: 1,
    },
  ],
};