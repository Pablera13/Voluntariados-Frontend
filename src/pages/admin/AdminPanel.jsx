import PiesChart from "../Charts/PiesChart";
import BarsChart from "../Charts/BarsChart";
import LinesChart from "../Charts/LinesChart";
import LinesPlot from "../Charts/LinesPlot";

function AdminPanel() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", marginTop: "50px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
        <div className="bg-light px-2 border border-2" style={{ width: "500px", height: "275px", boxShadow: '4px 4px 5px rgba(0, 0, 0, 0.4)', borderRadius: "2%" }}>
          <BarsChart />
        </div>
        <div className="bg-light px-2 border border-2" style={{ width: "500px", height: "275px", boxShadow: '4px 4px 5px rgba(0, 0, 0, 0.4)', borderRadius: "2%" }}>
          <LinesPlot />
        </div>
        <div className="bg-light px-2 border border-2" style={{ width: "500px", height: "275px", boxShadow: '4px 4px 5px rgba(0, 0, 0, 0.4)', borderRadius: "2%" }}>
        <div style={{ width: "200px", height: "200px" }}>
           <PiesChart />   
          </div>
        </div>
        <div className="bg-light px-2 border border-2" style={{ width: "500px", height: "275px", boxShadow: '4px 4px 5px rgba(0, 0, 0, 0.4)', borderRadius: "2%" }}>
          <LinesChart />
        </div>
      </div>
    </div>
  );
}
 
export default AdminPanel;
