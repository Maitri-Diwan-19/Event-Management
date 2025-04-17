import React from 'react';
import { useForm } from 'react-hook-form';

const CreateEvent = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data); 
  };

  return (
    <div >
      <h2 >Create New Event</h2>
      <form onSubmit={handleSubmit(onSubmit)} >
        <input {...register('title')} placeholder="Event Title"  />
        <input type="date" {...register('date')}  />
        <textarea {...register('description')} placeholder="Description"/>
        <button type="submit" >Create</button>
      </form>
    </div>
  );
};

export default CreateEvent;
