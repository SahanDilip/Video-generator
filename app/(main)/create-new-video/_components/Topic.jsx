'use client'
import React, {useState} from 'react'
import {Input} from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {Button} from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {SparklesIcon,Loader2Icon} from 'lucide-react'
import axios from 'axios';


const suggestions = [
  "Classic Fairy Tales",
  "Bedtime Stories",
  "Moral Stories for Kids",
  "Animal Adventures",
  "Princess Stories",
  "Magic and Spells",
  "Talking Animals",
  "Friendship Stories",
  "Fantasy Kingdoms",
  "Good vs Evil",
  "Tiny Heroes, Big Adventures",
  "Mythical Creatures",
  "Funny Kids Stories",
  "Lost and Found Tales",
  "Time Travel for Kids",
  "Magic School Adventures"
];


function Topic({onHandleInputChange}) {
    const [selectedTopic, setSelectedTopic] = useState('');
    const [scripts,setScripts] = useState();
    const [loading,setLoading] = useState(false);
    const [selectedScriptIndex,setSelectedScriptIndex] = useState();


    const GenerateScript = async () => {
        setLoading(true);
        setSelectedScriptIndex(null);
        try{

            const result = await axios.post('./api/generate-script', {
                topic: selectedTopic
            });
            console.log(result.data);
            setScripts(result?.data?.scripts);
        }catch(e){
            console.log(e)
        }
        setLoading(false)
    };


    return ( 
        <div>
            <h2 className='mb-1'>Project Title</h2>
            <Input placeholder = "Enter Project Title " onChange={(event)=>onHandleInputChange('title',event.target.value)}/>
            <div className='mt-5'>
                <h2>Video Topic</h2>
                <p className='text-sm text-gray-600'>Select Topic for Your Video</p>
                <Tabs defaultValue="suggestion" className="w-full mt-2">
                    <TabsList>
                        <TabsTrigger value="suggestion">Suggestions</TabsTrigger>
                        <TabsTrigger value="your_topic">Your Topic</TabsTrigger>
                    </TabsList>
                    <TabsContent value="suggestion">
                                <div>
                                {suggestions.map((suggestion, index) => (
                                        <Button
                                        variant="outline"
                                        key={index}
                                        className={`m-1 ${suggestion === selectedTopic ?'border-white bg-secondary':''}`}
                                        onClick={() => {
                                            setSelectedTopic(suggestion);
                                            onHandleInputChange("topic", suggestion);
                                        }}
                                        >
                                        {suggestion}
                                        </Button>
                                    ))}
                                </div>
                            </TabsContent>
                    <TabsContent value="your_topic">
                        <div>
                            <h2>Enter Your Own topic</h2>
                            <Textarea placeholder='Enter your topic'
                            onChange={(event)=>onHandleInputChange('topic',event.target.value)}/>

                        </div>
                    </TabsContent>
                </Tabs>
                <div className='mt-3'>
                    <h2>Select the Script</h2>
                    <div className=''>
                        {scripts?.length > 0 && (
                        <div className='grid grid-cols-2 gap-5'>
                            {scripts.map((item, index) => {
                            return (
                                <div
                                key={index}
                                className={`p-3 border rounded-lg mt-3 cursor-pointer ${
                                    selectedScriptIndex === index ? 'border-white bg-secondary' : ''
                                }`}
                                onClick={()=> setSelectedScriptIndex(index)}
                                >
                                <h2 className='line-clamp-4 text-sm text-gray-300'>
                                    {item.content}
                                </h2>
                                </div>
                            );
                            })}
                        </div>
                        )}
                    </div>
                </div>
            </div>
            {!scripts && <Button className='mt-3' size='sm' onClick={GenerateScript} disabled={loading}> 
                {loading?<Loader2Icon className ="animate-spin"/> : <SparklesIcon/>}Generate Script</Button>}
        </div>
    )
}

export default Topic