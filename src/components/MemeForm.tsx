import Input from "./Input";
import { useForm } from 'react-hook-form';
import { server_calls } from '../api/servers';
import { useDispatch, useStore } from 'react-redux';
import { file_name, title, mimetype, upper_cap, lower_cap } from "../redux/slices/RootSlice"

// interfaces
interface MemeFormProps {
  id?: string []
}

const MemeForm = (props:MemeFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  // function that handles form submission for adding or updating a car record.
  const onSubmit = (data: any, event: any) => {
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data);
      console.log(data)
      setTimeout(() => {
        window.location.reload(); 
      }, 1000);
      event.target.reset();
    } else {
    // Use dispatch to update the state in the store
   dispatch(file_name(data.file_name));
   dispatch(title(data.title));
   dispatch(mimetype(data.mimetype));
   dispatch(upper_cap(data.upper_cap));
   dispatch(lower_cap(data.lower_cap));
 
      
      server_calls.create(store.getState());
      setTimeout(() => {window.location.reload()}, 500);
    }
  }
  return (  
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input {...register('file_name')} name='file_name' placeholder="Name"/>
        </div>
        <div>
          <Input {...register('title')} name='title' placeholder="Title"/>
        </div>
        <div>
          <Input {...register('mimetype')} name='mimetype' placeholder="File Extension"/>
        </div>
        <div>
          <Input {...register('upper_cap')} name='upper_cap' placeholder="Top Writing"/>
        </div>
        <div>
          <Input {...register('lower_cap')} name='lower_cap' placeholder="Bottom Writing"/>
        </div>
        <div className="flex p-1">
          <button
            className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
            >
              Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default MemeForm