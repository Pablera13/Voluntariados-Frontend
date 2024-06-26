import React from 'react';
import PiesChart from "../Charts/PiesChart";
import BarsChart from "../Charts/BarsChart";
import LinesChart from "../Charts/LinesChart";
import LinesPlot from "../Charts/LinesPlot";
import '../../style/AdminPanel.css';

function AdminPanel() {
  return (
    <div className="admincontainer">
      <div className="admingrid">
        <div className="admin-chart-box bg-light px-2 border border-2">
          <BarsChart />
        </div>
        <div className="admin-chart-box bg-light px-2 border border-2">
          <LinesPlot />
        </div>
        <div className="admin-chart-box bg-light px-2 border border-2">
          <PiesChart />
        </div>
        <div className="admin-chart-box bg-light px-2 border border-2">
          <LinesChart />
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
