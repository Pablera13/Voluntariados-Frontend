import  { useState, useEffect } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { getTotalVolunteerings } from '../../services/Volunteering';

export default function BasicPie() {
  const [totalVolunteering, setTotalVolunteering] = useState(0);

  useEffect(() => {
    const fetchTotalVolunteering = async () => {
      const total = await getTotalVolunteerings();
      setTotalVolunteering(total);
    };

    fetchTotalVolunteering();
  }, []);

  return (
    <PieChart
      colors={['orange', 'skyblue', 'purple']}
      series={[
        {
          data: [
            { id: 0, value: totalVolunteering, label: 'Volunteering' },
            { id: 1, value: 15, label: 'Solicitante B' },
            { id: 2, value: 20, label: 'Empresas C' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
  );
}