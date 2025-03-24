import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Select from 'react-select';

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [predictionResult, setPredictionResult] = useState(null);
  const onSubmit = async (data) => {
    const modelsToUse = selectedModels.map(model => ({
      key: model.label,
      value: model.value,
    }));
    const userData = [
      data["1st_Road_Class"],
      data["Day_of_Week"],
      data["Junction_Control"],
      data["Junction_Detail"],
      data["Light_Conditions"],
      data["Local_Authority"],
      data["Pedestrian_Crossing_Human_Control"],
      data["Pedestrian_Crossing_Physical_Facilities"],
      data["Road_Surface_Conditions"],
      data["Road_Type"],
      data["Special_Conditions_at_Site"],
      data["Speed_limit"],
      data["Urban_or_Rural_Area"],
      data["Weather_Conditions"]
    ];
    const formattedData = {
      modelsToUse: modelsToUse,
      userData: userData,
    };

    console.log("Formatted Data: ", formattedData);
    try {
      // const formattedData = {
      //   "modelsToUse": [
      //     {
      //       "key": "Decision Tree Classifier",
      //       "value": "dt_classifier"
      //     },
      //     {
      //       "key": "Logistic Regression",
      //       "value": "lg_classifier"
      //     }
      //   ],
      //   "userData": [
      //     "0", "0", "2", "4", "1", "119", "0", "0", "1", "0", "8", "40", "2", "1"
      //   ]
      // }
      
      const response = await fetch(`${import.meta.env.VITE_base_url}/predict`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedData),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("Backend Response: ", responseData);
        let resultString = '';
        for (const key in responseData) {
          const value = responseData[key];
          console.log(`key: ${key}, value: ${value}`);
          resultString += `${key}: ${value}\n`;
        }
        setPredictionResult(resultString);
        reset();
      } else {
        console.error('Error submitting data:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const [selectedModels, setSelectedModels] = useState([]);
  const options = [
    { label: "Decision Tree Classifier", value: 'dt_classifier' },
    { label: "Gradient Boosting Classifier", value: 'gb_classifier' },
    { label: "Random Forest Classifier", value: 'rf_classifier' },
    { label: "Logistic Regression", value: 'lg_classifier' },
    { label: "XGBoost Classifier", value: 'xgb_classifier' },
    { label: "KNN Classifier", value: 'knn_classifier' },
  ];

  const onSelect = (selectedOptions) => {
    setSelectedModels(selectedOptions);
  };

  const onRemove = (selectedOptions) => {
    setSelectedModels(selectedOptions);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className='max-w-4xl mx-auto p-6 bg-slate-200 rounded-lg shadow-md'>
        <h2 className='text-2xl font-bold mb-4'>Road Traffic Accident Form</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {/* 1st Road Class */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">1st Road Class</label>
            <select {...register("1st_Road_Class", { required: false })} className='block w-full border rounded-lg p-2' defaultValue="">
              <option disabled value="">Select Road_Class</option>
              <option value="0">A</option>
              <option value="2">B</option>
              <option value="3">C</option>
              <option value="4">Motorway</option>
              <option value="5">Unclassified</option>
            </select>
          </div>

          {/* Day of Week */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Day of Week</label>
            <select {...register("Day_of_Week", { required: false })} className='block w-full border rounded-lg p-2' defaultValue="">
              <option disabled value="">Select Day of Week</option>
              <option value="1">Monday</option>
              <option value="5">Tuesday</option>
              <option value="6">Wednesday</option>
              <option value="4">Thursday</option>
              <option value="0">Friday</option>
              <option value="2">Saturday</option>
              <option value="3">Sunday</option>
            </select>
          </div>

          {/* Junction Control */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Junction Control</label>
            <select {...register("Junction_Control", { required: false })} className='block w-full border rounded-lg p-2' defaultValue="">
              <option disabled value="">Select Junction Control</option>
              <option value="0">Authorised person</option>
              <option value="1">Auto traffic signal</option>
              <option value="2">Give way or uncontrolled</option>
              <option value="3">Not at junction or within 20 metres</option>
              <option value="4">Stop sign</option>
            </select>
          </div>

          {/* Junction Detail */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Junction Detail</label>
            <select {...register("Junction_Detail", { required: false })} className='block w-full border rounded-lg p-2' defaultValue="">
              <option disabled value="">Select Junction Detail</option>
              <option value="0">Crossroads</option>
              <option value="2">Mini-roundabout</option>
              <option value="3">More than 4 arms (not roundabout)</option>
              <option value="4">Not at junction or within 20 metres</option>
              <option value="5">Other junction</option>
              <option value="6">Private drive or entrance</option>
              <option value="7">Roundabout</option>
              <option value="8">Slip road</option>
              <option value="9">T or staggered junction</option>
            </select>
          </div>

          {/* Light Conditions */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Light Conditions</label>
            <select {...register("Light_Conditions", { required: false })} className='block w-full border rounded-lg p-2' defaultValue="">
              <option disabled value="">Select Light_Conditions</option>
              <option value="0">Darkness - lighting unknown</option>
              <option value="1">Darkness - lights lit</option>
              <option value="2">Darkness - lights unlit</option>
              <option value="3">Darkness - no lighting</option>
              <option value="4">Daylight</option>
            </select>
          </div>

          {/* Local Authority */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Local Authority (District)</label>
            <select {...register("Local_Authority", { required: false })} className='block w-full border rounded-lg p-2' defaultValue="">
              <option disabled value="">Select Local Authority</option>
              <option value="0">Allerdale</option>
              <option value="1">Alnwick</option>
              <option value="2">Amber Valley</option>
              <option value="3">Ashfield</option>
              <option value="4">Barking and Dagenham</option>
              <option value="5">Barnet</option>
              <option value="6">Barnsley</option>
              <option value="7">Barrow-in-Furness</option>
              <option value="8">Bassetlaw</option>
              <option value="9">Berwick-upon-Tweed</option>
              <option value="10">Bexley</option>
              <option value="11">Birmingham</option>
              <option value="12">Blackburn with Darwen</option>
              <option value="13">Blackpool</option>
              <option value="14">Blyth Valley</option>
              <option value="15">Bolsover</option>
              <option value="16">Bolton</option>
              <option value="17">Bradford</option>
              <option value="18">Brent</option>
              <option value="19">Bridgnorth</option>
              <option value="20">Bromley</option>
              <option value="21">Bromsgrove</option>
              <option value="22">Burnley</option>
              <option value="23">Bury</option>
              <option value="24">Calderdale</option>
              <option value="25">Camden</option>
              <option value="26">Cannock Chase</option>
              <option value="27">Carlisle</option>
              <option value="28">Castle Morpeth</option>
              <option value="29">Chester</option>
              <option value="30">Chester-le-Street</option>
              <option value="31">Chesterfield</option>
              <option value="32">Chorley</option>
              <option value="33">City of London</option>
              <option value="34">Congleton</option>
              <option value="35">Copeland</option>
              <option value="36">Coventry</option>
              <option value="37">Craven</option>
              <option value="38">Crewe and Nantwich</option>
              <option value="39">Croydon</option>
              <option value="40">Darlington</option>
              <option value="41">Derby</option>
              <option value="42">Derbyshire Dales</option>
              <option value="43">Derwentside</option>
              <option value="44">Doncaster</option>
              <option value="45">Dudley</option>
              <option value="46">Durham</option>
              <option value="47">Ealing</option>
              <option value="48">Easington</option>
              <option value="49">East Riding of Yorkshire</option>
              <option value="50">East Staffordshire</option>
              <option value="51">Eden</option>
              <option value="52">Ellesmere Port and Neston</option>
              <option value="53">Enfield</option>
              <option value="54">Erewash</option>
              <option value="55">Fylde</option>
              <option value="56">Gateshead</option>
              <option value="57">Greenwich</option>
              <option value="58">Hackney</option>
              <option value="59">Halton</option>
              <option value="60">Hambleton</option>
              <option value="61">Hammersmith and Fulham</option>
              <option value="62">Haringey</option>
              <option value="63">Harrogate</option>
              <option value="64">Harrow</option>
              <option value="65">Hartlepool</option>
              <option value="66">Havering</option>
              <option value="67">Herefordshire, County of</option>
              <option value="68">High Peak</option>
              <option value="69">Hillingdon</option>
              <option value="70">Hounslow</option>
              <option value="71">Hyndburn</option>
              <option value="72">Islington</option>
              <option value="73">Kensington and Chelsea</option>
              <option value="74">Kingston upon Hull, City of</option>
              <option value="75">Kingston upon Thames</option>
              <option value="76">Kirklees</option>
              <option value="77">Knowsley</option>
              <option value="78">Lambeth</option>
              <option value="79">Lancaster</option>
              <option value="80">Leeds</option>
              <option value="81">Lewisham</option>
              <option value="82">Lichfield</option>
              <option value="83">Liverpool</option>
              <option value="84">London Airport (Heathrow)</option>
              <option value="85">Macclesfield</option>
              <option value="86">Malvern Hills</option>
              <option value="87">Manchester</option>
              <option value="88">Mansfield</option>
              <option value="89">Merton</option>
              <option value="90">Middlesbrough</option>
              <option value="91">Newark and Sherwood</option>
              <option value="92">Newcastle upon Tyne</option>
              <option value="93">Newcastle-under-Lyme</option>
              <option value="94">Newham</option>
              <option value="95">North East Derbyshire</option>
              <option value="96">North East Lincolnshire</option>
              <option value="97">North Lincolnshire</option>
              <option value="98">North Shropshire</option>
              <option value="99">North Tyneside</option>
              <option value="100">North Warwickshire</option>
              <option value="101">Nuneaton and Bedworth</option>
              <option value="102">Oldham</option>
              <option value="103">Oswestry</option>
              <option value="104">Pendle</option>
              <option value="105">Preston</option>
              <option value="106">Redbridge</option>
              <option value="107">Redcar and Cleveland</option>
              <option value="108">Redditch</option>
              <option value="109">Ribble Valley</option>
              <option value="110">Richmond upon Thames</option>
              <option value="111">Richmondshire</option>
              <option value="112">Rochdale</option>
              <option value="113">Rossendale</option>
              <option value="114">Rotherham</option>
              <option value="115">Rugby</option>
              <option value="116">Rushcliffe</option>
              <option value="117">Ryedale</option>
              <option value="118">Salford</option>
              <option value="119">Sandwell</option>
              <option value="120">Scarborough</option>
              <option value="121">Sedgefield</option>
              <option value="122">Sefton</option>
              <option value="123">Selby</option>
              <option value="124">Sheffield</option>
              <option value="125">Shrewsbury and Atcham</option>
              <option value="126">Solihull</option>
              <option value="127">South Derbyshire</option>
              <option value="128">South Lakeland</option>
              <option value="129">South Ribble</option>
              <option value="130">South Shropshire</option>
              <option value="131">South Staffordshire</option>
              <option value="132">South Tyneside</option>
              <option value="133">Southwark</option>
              <option value="134">St. Helens</option>
              <option value="135">Stafford</option>
              <option value="136">Staffordshire Moorlands</option>
              <option value="137">Stockport</option>
              <option value="138">Stockton-on-Tees</option>
              <option value="139">Stoke-on-Trent</option>
              <option value="140">Stratford-upon-Avon</option>
              <option value="141">Sunderland</option>
              <option value="142">Sutton</option>
              <option value="143">Tameside</option>
              <option value="144">Tamworth</option>
              <option value="145">Teesdale</option>
              <option value="146">Telford and Wrekin</option>
              <option value="147">Tower Hamlets</option>
              <option value="148">Trafford</option>
              <option value="149">Tynedale</option>
              <option value="150">Vale Royal</option>
              <option value="151">Wakefield</option>
              <option value="152">Walsall</option>
              <option value="153">Waltham Forest</option>
              <option value="154">Wandsworth</option>
              <option value="155">Wansbeck</option>
              <option value="156">Warrington</option>
              <option value="157">Warwick</option>
              <option value="158">Wear Valley</option>
              <option value="159">West Lancashire</option>
              <option value="160">Westminster</option>
              <option value="161">Wigan</option>
              <option value="162">Wirral</option>
              <option value="163">Wolverhampton</option>
              <option value="164">Worcester</option>
              <option value="165">Wychavon</option>
              <option value="166">Wyre</option>
              <option value="167">Wyre Forest</option>
              <option value="168">York</option>
            </select>
          </div>

          {/* Pedestrian Crossing - Human Control */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Pedestrian Crossing - Human Control</label>
            <select {...register("Pedestrian_Crossing_Human_Control", { required: false })} className='block w-full border rounded-lg p-2' defaultValue="">
              <option disabled value="">Pedestrian Crossing Human Control</option>
              <option value="0">No control</option>
              <option value="1">Controlled</option>
            </select>
          </div>

          {/* Pedestrian Crossing - Physical Facilities */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Pedestrian Crossing - Physical Facilities</label>
            <select {...register("Pedestrian_Crossing_Physical_Facilities", { required: false })} className='block w-full border rounded-lg p-2' defaultValue="">
              <option disabled value="">Select Pedestrian Crossing Facilities</option>
              <option value="0">None</option>
              <option value="1">Zebra</option>
              <option value="2">Pelican</option>
              <option value="3">Puffin</option>
              <option value="4">Toucan</option>
              <option value="5">Other</option>
            </select>
          </div>

          {/* Road Surface Conditions */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Road Surface Conditions</label>
            <select {...register("Road_Surface_Conditions", { required: false })} className='block w-full border rounded-lg p-2' defaultValue="">
              <option disabled value="">Select Road Surface Conditions</option>
              <option value="1">Dry</option>
              <option value="2">Flood over 3cm. deep</option>
              <option value="3">Frost or ice</option>
              <option value="4">Snow</option>
              <option value="5">Wet or damp</option>
            </select>
          </div>

          {/* Road Type */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Road Type</label>
            <select {...register("Road_Type", { required: false })} className='block w-full border rounded-lg p-2' defaultValue="">
              <option disabled value="">Select Road Type</option>
              <option value="0">Dual carriageway</option>
              <option value="1">One way street</option>
              <option value="2">Roundabout</option>
              <option value="3">Single carriageway</option>
              <option value="4">Slip road</option>
              <option value="5">Other</option>
            </select>
          </div>

          {/* Special_Conditions_at_Site */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Special Conditions at Site</label>
            <select {...register("Special_Conditions_at_Site", { required: false })} className='block w-full border rounded-lg p-2' defaultValue="">
              <option disabled value="">Select Special Conditions at Site</option>
              <option value="0">Auto signal part defective</option>
              <option value="1">Auto traffic signal - out</option>
              <option value="3">Mud</option>
              <option value="4">Oil or diesel</option>
              <option value="5">Road sign or marking defective or obscured</option>
              <option value="6">Road surface defective</option>
              <option value="7">Roadworks</option>
              <option value="8">None</option>
            </select>
          </div>

          {/* Speed_limit */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Speed Limit</label>
            <input
              type="number"
              {...register("Speed_limit", { required: false, min: 0 })}
              className='block w-full border rounded-lg p-2' defaultValue=""
            />
            {errors["Speed_limit"] && <span className='text-red-500'>This field is required and false be a positive number</span>}
          </div>

          {/* "Urban_or_Rural_Area */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Urban or Rural Area</label>
            <select {...register("Urban_or_Rural_Area", { required: false })} className='block w-full border rounded-lg p-2' defaultValue="">
              <option disabled value="">Select Urban or Rural</option>
              <option value="0">Urban</option>
              <option value="1">Rural</option>
            </select>
          </div>

          {/* Weather */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Weather Condition</label>
            <select {...register("Weather_Conditions", { required: false })} className="block w-full border rounded-lg p-2" defaultValue="">
              <option disabled value="">Select Weather Condition</option>
              <option value="0">Fine + High Winds</option>
              <option value="1">Fine No High Winds</option>
              <option value="2">Fog or Mist</option>
              <option value="4">Raining + High Winds</option>
              <option value="5">Raining No High Winds</option>
              <option value="6">Snowing + High Winds</option>
              <option value="7">Snowing No High Winds</option>
              <option value="3">Other</option>
            </select>
          </div>

          {/* Model */}
          <div className='w-4/5 lg:w-full'>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">Model</label>
            <Select
              options={options}
              isMulti
              value={selectedModels}
              onChange={onSelect}
            />
          </div>
        </div>
        <button type="submit" className='mt-4 bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition duration-200'>Submit</button>
      </form>
      {/* Displaying the Prediction Result */}
      {predictionResult && (
        <div className="flex flex-col justify-center items-center mt-6 p-4 bg-gray-100 rounded-lg">
          <h3 className="font-semibold text-xl">Prediction Results:</h3>
          <pre className="whitespace-pre-wrap">{predictionResult}</pre>
        </div>
      )}
    </>
  );
};

export default Form;