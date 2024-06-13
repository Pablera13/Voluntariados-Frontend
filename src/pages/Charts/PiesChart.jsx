import  { useState, useEffect } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { getTotalVolunteer } from '../../services/Volunteer';
import { getTotalOrganization } from '../../services/Organization';

export default function BasicPie() {
  const [totalVolunteer, setTotalVolunteer] = useState(0);
  const [totalOrganization, setTotalOrganization] = useState(0);

  useEffect(() => {
    const fetchTotalOrganization = async () => {
      const total = await getTotalOrganization();
      setTotalOrganization(total);
    };

    fetchTotalOrganization();
  }, []);

  useEffect(() => {
    const fetchTotalVolunteer = async () => {
      const total = await getTotalVolunteer();
      setTotalVolunteer(total);
    };

    fetchTotalVolunteer();
  }, []);

  return (
    <PieChart
      colors={['orange', 'skyblue', 'purple']}
      series={[
        {
          data: [
            { id: 0, value: totalOrganization, label: 'Organizaciones' },
            { id: 1, value: totalVolunteer, label: 'Voluntarios' },
            { id: 2, value: 5, label: 'Empresas C' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
  );
}