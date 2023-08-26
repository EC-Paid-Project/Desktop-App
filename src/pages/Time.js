import React,{useState} from 'react'

export default function Time({setTime}) {


    const [hour, setHour] = useState(null);
  const [minute, setMinute] = useState(null);
  const [zone, setZone] = useState("");
  const [displayTime, setDisplayTime] = useState('');

  const handleChange = (e) => {
    setZone(e.target.value)
    if(hour!=null && hour>=0 && minute!=null && minute>=0  ){
        if(e.target.value=="PM"){
            // setHour(hour+12);
            console.log(parseInt(hour)+12)
            setTime(`${parseInt(hour)+12}:${minute}:${0}`)
            return 
            
        }
        if(e.target.value=="AM"){
          // setHour(hour+12);
            console.log(parseInt(hour))
            setTime(`${hour}:${minute}:${0}`)
            return 
            
        }
        console.log("jee")

        
    }
    // setDisplayTime(`${formattedHour}:${formattedMinute}`);

  };
  return (
    <div style={{display:'flex',height:"20px",width:"300px",alignContent:"center",justifyContent:"center"}}>
    <input
      type="number"
      placeholder="Hour (0-12)"
      min={0}
      max={12}
      maxLength={2}
      value={hour}
      onChange={(e) => setHour((e.target.value)<13?e.target.value:null)}
    />
    <input
      type="number"
      placeholder="Minute (0-59)"
      min="0"
      max="59"
      oninput="validity.valid||(value='');"
      maxLength={2}
      value={minute}
      onChange={(e) => setMinute((e.target.value)<60?e.target.value:null)}
    />
                      <select
                        value={zone}
                        onChange={handleChange}
                        style={{width:"100px",height:"20px",textAlign:"center",padding:"0px 6px"}}
                      >
                        <option value="">AM/PM</option>
                        <option value="AM">AM</option>
                        <option value="PM">PM</option>
                      </select>
  </div>
  )
}
