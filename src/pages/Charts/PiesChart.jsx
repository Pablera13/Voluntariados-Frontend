
import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie() {
  return (
    <PieChart
      colors={['orange', 'skyblue', 'purple']}
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'Puestos A' },
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