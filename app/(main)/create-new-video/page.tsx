'use client'
import React,{useState} from 'react'
import Topic from './_components/Topic'
import VideoStyle from './_components/VideoStyle'
import Voice from "./_components/Voice"
import Captions from "./_components/Captions"
import { Loader2Icon, WandSparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Preview from "./_components/Preview";




function CreateNewVideo(){
    const [formData,setFormData] = useState({});
    const [loading, setloading] = useState(false);
    const onHandleInputChange = (fieldName,fieldValue)=>{
        setFormData(prev=>({
            ...prev,
            [fieldName]:fieldValue
        }))
        console.log(formData)
    }

    const GenerateVideo = async () => {

        
        // if (!formdata?.topic || !formdata?.script || !formdata?.videoStyle || !formdata?.caption || !formdata?.voice) {
        //   console.error("Missing fields:", {
        //     topic: formdata.topic,
        //     script: formdata.script,
        //     videoStyle: formdata.videoStyle,
        //     caption: formdata.caption,
        //     voice: formdata.voice
        //   });
        //   alert("Enter all the fields");
        //   return;
        // }
        setloading(true);

        // const resp = await CreateInitialVideoRecord({
        //   topic: formdata.topic,
        //   script: formdata.script,
        //   title: formdata.title,
        //   caption: formdata.caption,
        //   videoStyle: formdata.videoStyle,
        //   voice: formdata.voice,
        //   uid: user?._id,
        //   createdBy: user?.email,
        //   credits: user?.credits
        // });
        // console.log(resp);

        // const result = await axios.post('/api/generate-video-data', {
        //   ...formdata,
        //   recordID: resp

        // })
        console.log(result);

        setloading(false);
    }

    return (
        <div>
            <h2 className = 'text-3xl'>Create New Video</h2>
            {/* Topic  & Script  */}
            <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-5">
                <div className="col-span-2 p-7 border rounded-xl h-[72vh] overflow-auto">
                    <Topic onHandleInputChange={onHandleInputChange}/>
                    {/* Video and Image Style */}
                    <VideoStyle onHandleInputChange={onHandleInputChange}/>
                    {/* Voice */}
                     <Voice onHandleInputChange={onHandleInputChange} />
                    {/* Captions */}
                     <Captions onHandleInputChange={onHandleInputChange}/>
                     <Button className="w-full mt-5 cursor-pointer"
                        // disabled={loading}
                        onClick={GenerateVideo}> <WandSparkles />Generate video</Button>
                </div>
                <div>
                    <Preview formdata={formData} />
                </div>
            </div>

        </div>
    )
}

export default CreateNewVideo