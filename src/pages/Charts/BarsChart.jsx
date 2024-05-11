
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';

const chartSetting = {
  width: 500,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
  },
};
const dataset = [
  {
    london: 59,

    month: 'Ja',
  },
  {

    paris: 52,
    month: 'Fe',
  },
  {
    london: 47,

    month: 'Ma',
  },
  {
    london: 54,
    paris: 56,
    month: 'Ap',
  },
  {
    london: 57,
    paris: 69,
    month: 'May',
  },
  {
  
    paris: 63,
    month: 'Ju',
  },
  {

    paris: 60,
    month: 'Jul',
  },
  {
    london: 65,

    month: 'Au',
  },
  {
    london: 51,

    month: 'Se',
  },
  {
    london: 60,
    paris: 65,
    month: 'Oc',
  },
  {
    
    paris: 64,
    month: 'No',
  },
  {
    
    paris: 70,
    month: 'De',
  },
];

export default function BarsDataset() {
  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      colors={['skyblue', 'purple']}
      series={[
        { dataKey: 'london', label: 'Actividades' },
        { dataKey: 'paris', label: 'Voluntariados' },
      ]}
      {...chartSetting}
    />
  );
}
