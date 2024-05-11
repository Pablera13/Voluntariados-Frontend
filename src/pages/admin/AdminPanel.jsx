
import PiesChart from "../Charts/PiesChart";
import BarsChart from "../Charts/BarsChart";
import LinesChart from "../Charts/LinesChart";
import LinesPlot from "../Charts/LinesPlot"
function AdminPanel() {
  return (
    <div>
      
      <div>
        <div className="bg-light px-2 border border-2 " style={{ width: "500px", height: "275px", boxShadow: '4px 4px 5px rgba(0, 0, 0, 0.4)',
          position: "relative", left: "653px", borderRadius: "2%", marginTop: "50px" }}>
             <div style={{ width: "200px", height: "200px", marginTop: "-210px" }}></div>
            <LinesPlot/>
        </div>
        <div className="bg-light px-2 border border-2 " style={{ width: "500px", height: "275px", boxShadow: '4px 4px 5px rgba(0, 0, 0, 0.4)',
          position: "relative", left: "112px", marginTop: "-273px", borderRadius: "2%" }}>
         <BarsChart/>
        </div> 
      </div>
      <div>
          <div className=" mx-auto border border-2 " style={{ width: "500px", height: "275px", boxShadow: '4px 4px 5px rgba(0, 0, 0, 0.4)',
          position: "relative", marginTop: "30px", right: "233px", borderRadius: "2%" }}>
            <div style={{ width: "200px", height: "200px", padding: "10px 0" }}>
            <PiesChart/>
              </div>
          </div>

            <div className="bg-light px-2 border border-2 " style={{ width: "500px", height: "275px", boxShadow: '4px 4px 5px rgba(0, 0, 0, 0.4)',
            position: "relative", left: "659px", borderRadius: "2%", marginTop: "-273px"  }}>
              <LinesChart/>
            </div>
         </div>   
    </div>
  )
}

export default AdminPanel